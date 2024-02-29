import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, category, createDate, amount, description, paymentType, user_id} = await req.json();

    const createdTransactions = await prisma.transactions.create({
        data: {
            title,
            category, 
            createDate, 
            amount, 
            description, 
            paymentType,
            user_id
        },
    });

    return NextResponse.json({message: "Success create transactions", data: createdTransactions }, {status: 201})
}

export async function GET(){
    const allTransactions = await prisma.transactions.findMany()

    return NextResponse.json({message: "Get all users success", data: allTransactions})
}