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

    const body = await request.json()
    const name = body.get('name')
    const description = body.get('description')
    const ip = body.get('ip')
    const address = body.get('address')
    const port = body.get('port')
    const country = body.get('country')
    const region = body.get('region')
    const type = body.get('type')
    const latency = body.get('latency')
    const votes = body.get('votes')

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
            port: parseInt(port),
            countryCode: country,
            region,
            type: type,
            latency: parseInt(latency),
            votes: parseInt(votes),
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