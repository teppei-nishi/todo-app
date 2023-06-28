import { Request, Response } from 'express'

export default function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    res.status(200).json({ message: `${req.body.email}を登録しました。` })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
