"use client";

import { ArrowUpRight, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import Link from "next/link";
import { updateDefaultAccount } from "@/actions/account";
import { toast } from "sonner";

export function ModernAccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault(); // Prevent navigation

    if (isDefault) {
      toast.warning("You need atleast 1 default account");
      return; // Don't allow toggling off the default account
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Link href={`/account/${id}`}>
      <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 border border-slate-800/50">
        {/* Background Decoration */}
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />
        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

        <div className="relative z-10 flex flex-col justify-between h-full min-h-[180px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1 capitalize">
                {type} Account
              </p>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {isDefault && (
                <div className="px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <p className="text-[10px] font-bold text-green-400 uppercase tracking-wider">
                    Default
                  </p>
                </div>
              )}
              <Switch
                checked={isDefault}
                onClick={handleDefaultChange}
                disabled={updateDefaultLoading}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-400 mb-2">Current Balance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">
                ${parseFloat(balance).toFixed(2)}
              </span>
              <div className="flex items-center text-xs text-green-400">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                2.5%
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <CreditCard className="h-3 w-3" />
              <span>**** **** **** {id.slice(-4)}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 font-medium">
              View Details →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
