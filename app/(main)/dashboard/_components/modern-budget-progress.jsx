"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X, AlertTriangle } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { updateBudget } from "@/actions/budget";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ModernBudgetProgress({ initialBudget, currentExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount?.toString() || ""
  );

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const percentUsed = initialBudget
    ? (currentExpenses / initialBudget.amount) * 100
    : 0;

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    await updateBudgetFn(amount);
  };

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Budget updated successfully");
    }
  }, [updatedBudget]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update budget");
    }
  }, [error]);

  // Determine color based on usage
  let progressColor = "bg-green-500";
  let textColor = "text-green-500";
  if (percentUsed >= 90) {
    progressColor = "bg-red-500";
    textColor = "text-red-500";
  } else if (percentUsed >= 75) {
    progressColor = "bg-yellow-500";
    textColor = "text-yellow-500";
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-sm border border-slate-100 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Monthly Budget
          </h3>
          <p className="text-sm text-slate-500 dark:text-neutral-400">
            Track your spending against your monthly limit
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                className="w-32 h-9 bg-slate-50 dark:bg-neutral-800 border-slate-200 dark:border-neutral-700"
                placeholder="Amount"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleUpdateBudget}
                disabled={isLoading}
                className="h-9 w-9 text-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                disabled={isLoading}
                className="h-9 w-9 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="h-9 w-9 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-6 bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden mb-4">
        <div
          className={`absolute top-0 left-0 h-full ${progressColor} transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
          style={{ width: `${Math.min(percentUsed, 100)}%` }}
        >
          {/* Animated Shine Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="flex flex-col">
          <span className="text-slate-500 dark:text-neutral-500 text-xs uppercase tracking-wider font-semibold">
            Spent
          </span>
          <span className={`font-bold text-lg ${textColor}`}>
            ${currentExpenses?.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-slate-500 dark:text-neutral-500 text-xs uppercase tracking-wider font-semibold">
            Remaining
          </span>
          <span className="font-bold text-lg text-slate-700 dark:text-neutral-300">
            $
            {initialBudget
              ? (initialBudget.amount - currentExpenses).toFixed(2)
              : "0.00"}
          </span>
        </div>
      </div>

      {percentUsed >= 80 && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <p className="text-xs text-red-600 dark:text-red-400 font-medium">
            You&apos;ve used {percentUsed.toFixed(0)}% of your budget. Careful!
          </p>
        </div>
      )}
    </div>
  );
}
