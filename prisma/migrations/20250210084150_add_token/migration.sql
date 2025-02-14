/*
  Warnings:

  - Added the required column `updated_at` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TokensType" AS ENUM ('PASSWORD', 'REGISTER');

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" "TokensType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);
