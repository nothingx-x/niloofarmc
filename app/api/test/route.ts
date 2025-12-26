import prisma from "@/app/libs/prisma";

export async function GET() {
    const servers = await prisma.server.findMany();
    return Response.json(servers);
}