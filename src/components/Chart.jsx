import React from 'react'
import { PieChart } from './PieChart'
import { useAtom } from 'jotai'
import { transactionsAtom } from './atoms/transactionAtom'

export const Chart = () => {
    const [transactions] = useAtom(transactionsAtom);

    const totalType = [
        {
            type: "expenses",
            amount: 0,
            color: "#EF4444"
        },
        {
            type: "income",
            amount: 0,
            color:"#10B981"
        }
    ];

    transactions.map((transaction) => {
        if (transaction.type === "expenses"){
            totalType[0].amount = parseInt(totalType[0].amount) + parseInt(transaction.amount)
        } else {
            totalType[1].amount = parseInt(totalType[1].amount) + parseInt(transaction.amount)
        }
        return null; 
    })

    const chartData = {
        labels: totalType.map((transaction) => transaction.type),
        datasets: [
            {
                label: "Chart",
                data: totalType.map((transaction) => transaction.amount), 
                backgroundColor: totalType.map((transaction) => transaction.color)
            }
        ]
    }  

    return (
        <div>
            <PieChart chartData={chartData}/>
        </div>
    )
}
