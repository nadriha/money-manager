-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" DECIMAL NOT NULL,
    "expences" DECIMAL NOT NULL,
    "income" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL,
    "amount" DECIMAL NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
