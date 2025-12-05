import { AccountForm } from "../_components/account-form";

export default function CreateAccountPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold gradient-title mb-2">
          Create New Account
        </h1>
        <p className="text-slate-500 dark:text-neutral-400">
          Add a new bank account or credit card to track your finances
        </p>
      </div>
      <AccountForm />
    </div>
  );
}
