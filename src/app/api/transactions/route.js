import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, category, createDate, amount, description, user_id, isExpenses} = await req.json();
    let type = ""

    if (isExpenses === "true"){
        type = "expenses"
    } else {
        type = "income"
    }

    const createdTransactions = await prisma.transactions.create({
        data: {
            title,
            category, 
            createDate, 
            amount, 
            description, 
            type,
            user_id
        },

    });
    const user = await prisma.users.findFirst({
        where: {
            id: user_id
        }
    })

    console.log(isExpenses === "true")

    if (isExpenses === "true"){
        user.balance = parseInt(user.balance) - parseInt(amount)
        user.expences = parseInt(user.expences) + parseInt(amount)

            const updatedData = await prisma.users.update({
                where: {
                    id: user_id
                },
                data: {
                    balance: user.balance,
                    expences: user.expences
                }
            });

            
        } else {
            user.balance = parseInt(user.balance) + parseInt(amount)
            user.income = parseInt(user.income) + parseInt(amount)

            const updatedData = await prisma.users.update({
                where: {
                    id: user_id
                },
                data: {
                    balance: user.balance,
                    income: user.income
                }
            });
        }

        
        
        console.log(user)

        return NextResponse.json({message: "Success create transactions", data: createdTransactions }, {status: 201})
    }

    export async function GET(){
        const allTransactions = await prisma.transactions.findMany()

        return NextResponse.json({message: "Get all users success", data: allTransactions})
    }