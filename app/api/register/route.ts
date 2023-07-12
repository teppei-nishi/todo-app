import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

type Credentials = {
  email: string
  password: string
}

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body: Credentials = await request.json()
  const CredentialsSchema = z.object({
    email: z
      .string()
      .email({ message: 'メールアドレスの形式が正しくありません。' }),
    password: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/, {
        message: 'パスワードは半角英数字で入力してください。',
      })
      .min(8, { message: 'パスワードは8文字以上です。' })
      .max(32, { message: 'パスワードは32文字以下です。' }),
  })

  const result = CredentialsSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      {
        message: result.error.issues
          .map((issue) => issue.message)
          .join('<br />'),
      },
      { status: 400 }
    )
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hash(body.password, salt)

  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    })
    return NextResponse.json({ message: '登録しました。' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: '登録できませんでした。' },
      { status: 400 }
    )
  }
}
