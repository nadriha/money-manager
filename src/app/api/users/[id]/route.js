import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(_, {params}){
    const userId = params.id;

    const userData = await prisma.users.findFirst({
        where: {
            id: userId
        }
    })

    return NextResponse.json({message: "Success get user by id", data: userData})
}

export async function PATCH (req, {params}){
    const userId = params.id;
    const { name } = await req.json()

    const updatedData = await prisma.users.update({
        where: {
            id: userId
        },
        data: {
            name,
        }
    });

    return NextResponse.json({message: "Update transaction success", data : updatedData})
}