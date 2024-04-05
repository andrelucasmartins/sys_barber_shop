import { PrismaClient } from "@prisma/client"

import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const company = await prisma.company.findMany()
  res.status(200).json(company)
}

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { companyName, fantasyName, cnpj, email, address, phoneNumber} = req.body

  try {
    const company = await prisma.company.create({ data: { companyName,
  fantasyName,
  cnpj,
  email,
  address,
  phoneNumber,
  createdAt: new Date()
}})
    return NextResponse.json({ message: "Ok", company }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
  
}