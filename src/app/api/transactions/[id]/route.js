import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(_, {params}){
    const transactionId = params.id;

    await prisma.transactions.delete({
        where: {
            id: transactionId
        }
    })

    return NextResponse.json({message: "Transaction Deleted"})
}

export async function GET(_, {params}){
    const transactionId = params.id;


    const transactionData = await prisma.transactions.findMany({
        where: {
            id: transactionId
        }
    })

    return NextResponse.json({message: "Get Transaction Success", data: transactionData})
}