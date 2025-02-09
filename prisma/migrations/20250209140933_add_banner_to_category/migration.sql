-- AlterTable
ALTER TABLE "article_contents" ALTER COLUMN "types" SET DEFAULT 'TEXT';

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "banner" TEXT NOT NULL DEFAULT '';
