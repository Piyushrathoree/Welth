"use client";

import { useState, useEffect } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { deleteAccount } from "@/actions/account";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DeleteAccountButton({ accountId }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    loading: deleteLoading,
    fn: deleteAccountFn,
    error,
    data: deleted,
  } = useFetch(deleteAccount);

  const handleDelete = async () => {
    await deleteAccountFn(accountId);
  };

  useEffect(() => {
    if (deleted && !deleteLoading) {
      toast.success("Account deleted successfully");
      router.push("/dashboard");
    }
  }, [deleted, deleteLoading, router]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to delete account");
    }
  }, [error]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          className="rounded-xl h-10 w-10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove all associated transactions from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
            className="bg-red-600 hover:bg-red-700"
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete Account"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
