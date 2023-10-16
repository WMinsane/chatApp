import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const body = await readBody(event);
  const res = await prisma.chat.create({
    data: body
  });
  return res;
});