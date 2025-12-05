import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { Plus } from "lucide-react";
import { ModernBudgetProgress } from "./_components/modern-budget-progress";
import { ModernDashboardOverview } from "./_components/modern-transaction-overview";
import { ModernAccountCard } from "./_components/modern-account-card";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* Budget Progress */}
      <ModernBudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />

      {/* Dashboard Overview */}
      <ModernDashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* Accounts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <div className="group relative overflow-hidden rounded-2xl p-[1px] h-full cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-neutral-800 dark:to-neutral-900 opacity-100 transition-opacity" />
            <div className="relative h-full bg-white dark:bg-neutral-950 rounded-2xl flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 dark:border-neutral-800 group-hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Add New Account
              </p>
              <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1">
                Connect a bank or card
              </p>
            </div>
          </div>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts?.map((account) => (
            <ModernAccountCard key={account.id} account={account} />
          ))}
      </div>
    </div>
  );
}
