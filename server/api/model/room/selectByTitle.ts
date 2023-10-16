import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  const rooms = await prisma.room.findMany({
    where: {
      title:{contains: body.title}
    }
  });
  return rooms;
});