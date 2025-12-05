"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createAccount } from "@/actions/dashboard";
import { accountSchema } from "@/app/lib/schema";

export function AccountForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  const {
    loading: createAccountLoading,
    fn: createAccountFn,
    error,
    data: newAccount,
  } = useFetch(createAccount);

  const onSubmit = async (data) => {
    await createAccountFn(data);
  };

  useEffect(() => {
    if (newAccount && newAccount.success) {
      toast.success("Account created successfully");
      reset();
      router.push(`/account/${newAccount.data.id}`);
    }
  }, [newAccount, reset, router]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create account");
    }
  }, [error]);

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800 shadow-sm p-6 space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Account Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Account Name
          </label>
          <Input
            id="name"
            placeholder="e.g., Main Checking"
            {...register("name")}
            className="h-11 rounded-xl bg-slate-50 dark:bg-neutral-800 border-slate-200 dark:border-neutral-700"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Account Type */}
        <div className="space-y-2">
          <label
            htmlFor="type"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Account Type
          </label>
          <Select
            onValueChange={(value) => setValue("type", value)}
            defaultValue={watch("type")}
          >
            <SelectTrigger
              id="type"
              className="h-11 rounded-xl bg-slate-50 dark:bg-neutral-800 border-slate-200 dark:border-neutral-700"
            >
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CURRENT">Current</SelectItem>
              <SelectItem value="SAVINGS">Savings</SelectItem>
            </SelectContent>
          </Select>
          {errors.type && (
            <p className="text-sm text-red-500">{errors.type.message}</p>
          )}
        </div>

        {/* Initial Balance */}
        <div className="space-y-2">
          <label
            htmlFor="balance"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Initial Balance
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₹
            </span>
            <Input
              id="balance"
              type="number"
              step="10"
              placeholder="0.00"
              {...register("balance")}
              className="pl-8 h-11 rounded-xl bg-slate-50 dark:bg-neutral-800 border-slate-200 dark:border-neutral-700"
            />
          </div>
          {errors.balance && (
            <p className="text-sm text-red-500">{errors.balance.message}</p>
          )}
        </div>

        {/* Set as Default */}
        <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-800 p-4">
          <div className="space-y-0.5">
            <label
              htmlFor="isDefault"
              className="text-base font-medium cursor-pointer"
            >
              Set as Default
            </label>
            <p className="text-sm text-muted-foreground">
              This account will be selected by default for transactions
            </p>
          </div>
          <Switch
            id="isDefault"
            checked={watch("isDefault")}
            onCheckedChange={(checked) => setValue("isDefault", checked)}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1 h-11 rounded-xl border-slate-200 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-800"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
            disabled={createAccountLoading}
          >
            {createAccountLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
