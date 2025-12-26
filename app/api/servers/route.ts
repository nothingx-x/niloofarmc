import { Server, ServerType } from "@/app/generated/prisma"
import prisma from "@/app/libs/prisma"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const type = searchParams.get('type') as ServerType | null
  const country = searchParams.get('country')
  const sort = searchParams.get('sort') || 'votes'

  const where = {
    ...(type && { type }),
    ...(country && { countryCode: country }),
  }

  const orderBy: Record<string, 'asc' | 'desc'> = {}
  switch (sort) {
    case 'votes': orderBy.votes = 'desc'; break
    case 'players': orderBy.players = "desc"; break
    case 'newest': orderBy.createdAt = 'desc'; break
    case 'latency': orderBy.latency = 'asc'; break
  }

  const [servers, total] = await Promise.all([
    prisma.server.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.server.count({ where })
  ])

  return Response.json({
    servers,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  })
}


export async function POST(request: Request) {
    const body = await request.json() as Server
    const name = body.name
    const description = body.description || ''
    const ip = body.ip
    const address = body.address || ''
    const port = body.port
    const country = body.countryCode || ""
    const region = body.region || ""
    const type = body.type
    const latency = body.latency
    const votes = body.votes

    if (!name || !ip || !port || !type) return new Response('Invalid data', { status: 400 })

    const server = await prisma.server.create({
        data: {
            name,
            description,
            ip,
            address,
            port: port,
            countryCode: country,
            region,
            type: type,
            latency: latency,
            votes: votes,
        }
    })
    return Response.json(server)
}