import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    const userId = params.id;

    const userData = await prisma.users.findFirst({
        where: {
            id: userId
        }
    })

    return NextResponse.json({message: "Success get user by id", data: userData})
}