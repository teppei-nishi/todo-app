import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

type Credentials = {
  email: string
  password: string
}

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body: Credentials = await request.json()

  try {
    const user = await prisma.user.create({
      data: body,
    })
    console.log(user)
    return NextResponse.json({ message: '登録しました。' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: '登録できませんでした。' },
      { status: 400 }
    )
  }
}
