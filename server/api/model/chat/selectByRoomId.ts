import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  const chats = await prisma.chat.findMany({
    where: {
      roomid: { equals: body.id }
    }
  });
  return chats;
});