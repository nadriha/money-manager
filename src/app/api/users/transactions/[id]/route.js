import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(_, {params}){
    const userId = params.id;


    const transactionData = await prisma.transactions.findMany({
        where: {
            user_id: userId
        }
    })

    return NextResponse.json({message: "Get all user transactions success", data: transactionData})
}