import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { ModernTransactionTable } from "../_components/modern-transaction-table";
import { notFound } from "next/navigation";
import { ModernAccountChart } from "../_components/modern-account-chart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AccountPage({ params }) {
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard"
        className="relative inline-flex items-center justify-center gap-2  p-3 text-sm font-semibold transition-all duration-300 rounded-full  active:scale-95 dark:bg-neutral-700 dark:hover:bg-neutral-800 text-black dark:text-white shadow-inner bg-[#fafafa] hover:bg-[#f5f5f5]"
      >
        <span className="hidden lg:inline ">
          {" "}
          <ArrowLeft />{" "}
        </span>
      </Link>
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ₹{parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <ModernAccountChart transactions={transactions} />
      </Suspense>

      {/* Transactions Table */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <ModernTransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
}
