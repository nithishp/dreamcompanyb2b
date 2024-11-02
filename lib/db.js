import { PrismaClient } from "@prisma/client";

globalThis.prisma = globalThis.prisma || new PrismaClient();
export const db = globalThis.prisma;
