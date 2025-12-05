import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { ModernAddTransactionForm } from "../_components/modern-transaction-form";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();
  const editId = searchParams?.edit;

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold gradient-title mb-2">
          {editId ? "Edit Transaction" : "Add Transaction"}
        </h1>
        <p className="text-slate-500 dark:text-neutral-400">
          {editId
            ? "Update your transaction details"
            : "Track your income and expenses"}
        </p>
      </div>
      <ModernAddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
