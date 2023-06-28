import { NextResponse } from 'next/server'

type Credentials = {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: Credentials = await request.json()
  return NextResponse.json({ message: `${body.email}を登録しました。` })
}
