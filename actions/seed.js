"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Categories with their typical amount ranges
const CATEGORIES = {
  INCOME: [
    { name: "salary", range: [50000, 80000] },
    { name: "freelance", range: [10000, 30000] },
    { name: "investments", range: [5000, 20000] },
    { name: "other-income", range: [1000, 10000] },
  ],
  EXPENSE: [
    { name: "housing", range: [10000, 20000] },
    { name: "transportation", range: [1000, 5000] },
    { name: "groceries", range: [2000, 6000] },
    { name: "utilities", range: [1000, 3000] },
    { name: "entertainment", range: [50, 2000] },
    { name: "food", range: [50, 150] },
    { name: "shopping", range: [1000, 5000] },
    { name: "healthcare", range: [1000, 10000] },
    { name: "education", range: [2000, 10000] },
    { name: "travel", range: [5000, 20000] },
  ],
};

// Helper to generate random amount within a range
function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

// Helper to get random category with amount
function getRandomCategory(type) {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

export async function seedTransactions() {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    let account = await db.account.findFirst({
      where: { userId: user.id, isDefault: true },
    });

    if (!account) {
      account = await db.account.findFirst({
        where: { userId: user.id },
      });
    }

    if (!account) {
      account = await db.account.create({
        data: {
          name: "Default Account",
          type: "CURRENT",
          balance: 0,
          isDefault: true,
          userId: user.id,
        },
      });
    }

    // Generate 10 days of transactions
    const transactions = [];
    let totalBalance = account.balance.toNumber();

    for (let i = 10; i >= 0; i--) {
      const date = subDays(new Date(), i);

      // Generate 1-3 transactions per day
      const transactionsPerDay = Math.floor(Math.random() * 3) + 1;

      for (let j = 0; j < transactionsPerDay; j++) {
        // 40% chance of income, 60% chance of expense
        const type = Math.random() < 0.4 ? "INCOME" : "EXPENSE";
        const { category, amount } = getRandomCategory(type);

        const transaction = {
          id: crypto.randomUUID(),
          type,
          amount,
          description: `${
            type === "INCOME" ? "Received" : "Paid for"
          } ${category}`,
          date,
          category,
          status: "COMPLETED",
          userId: user.id,
          accountId: account.id,
          createdAt: date,
          updatedAt: date,
        };

        totalBalance += type === "INCOME" ? amount : -amount;
        transactions.push(transaction);
      }
    }

    // Insert transactions in batches and update account balance
    await db.$transaction(async (tx) => {
      // Clear existing transactions
      await tx.transaction.deleteMany({
        where: { accountId: account.id },
      });

      // Insert new transactions
      await tx.transaction.createMany({
        data: transactions,
      });

      // Update account balance
      await tx.account.update({
        where: { id: account.id },
        data: { balance: totalBalance },
      });
    });

    revalidatePath("/dashboard");
    revalidatePath(`/account/${account.id}`);

    return { success: true, message: "Data seeded successfully" };
  } catch (error) {
    console.error("Error seeding data:", error);
    return { success: false, error: error.message };
  }
}
