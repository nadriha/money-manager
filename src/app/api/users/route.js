import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req){
    const {username, password, name} = await req.json();

    const createUser = await prisma.users.create({
        data: {
            username,
            password, 
            name,
            balance: 0,
            expences: 0,
            income: 0,
        },
    });

    return NextResponse.json({message: "Success create transactions", data: createUser }, {status: 201})
}