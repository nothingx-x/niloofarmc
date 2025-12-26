import { Server } from "@/app/generated/prisma"
import prisma from "@/app/libs/prisma"

export async function GET(request: Request) {
    const { pathname } = new URL(request.url)
    const id = pathname.split('/').at(-1)
    if (!id || isNaN(parseInt(id))) return new Response('Not found', { status: 404 })

    const server = await prisma.server.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!server) return new Response('Not found', { status: 404 })
    return Response.json(server)
}


export async function PATCH(request: Request) {
    const { pathname } = new URL(request.url)
    const id = pathname.split('/').at(-1)
    if (!id || isNaN(parseInt(id))) return new Response('Not found', { status: 404 })

    const server = await prisma.server.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!server) return new Response('Not found', { status: 404 })

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

    await prisma.server.update({
        where: {
            id: parseInt(id)
        },
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

export async function DELETE(request: Request) {
    const { pathname } = new URL(request.url)
    const id = pathname.split('/').at(-1)
    if (!id || isNaN(parseInt(id))) return new Response('Not found', { status: 404 })

    const server = await prisma.server.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!server) return new Response('Not found', { status: 404 })

    await prisma.server.delete({
        where: {
            id: parseInt(id)
        }
    })
    return Response.json(server)
}