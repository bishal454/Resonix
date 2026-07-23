/*
  Warnings:

  - The values [CUSTOMER] on the enum `VoiceVariant` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VoiceVariant_new" AS ENUM ('SYSTEM', 'CUSTOM');
ALTER TABLE "Voice" ALTER COLUMN "variant" TYPE "VoiceVariant_new" USING ("variant"::text::"VoiceVariant_new");
ALTER TYPE "VoiceVariant" RENAME TO "VoiceVariant_old";
ALTER TYPE "VoiceVariant_new" RENAME TO "VoiceVariant";
DROP TYPE "public"."VoiceVariant_old";
COMMIT;
