// pages/api/schedule.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
   try {
    const { open, close, interval } = await req.json();
    const scheduling = await prisma.openingHours.create({
      data: {
        open,
        close,
        interval,
      },
    });
    return Response.json({ data: scheduling, status: 201 });
   } catch (error) {
    return Response.json({ data: error, status: 405}); /* Method Not Allowed */
   }
    
}

export async function GET(
  req: Request
) {
  const schedule = await prisma.scheduling.findMany()
  return Response.json({ schedule, status: 200 })
}
