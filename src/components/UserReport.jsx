"use client"

import React from 'react'
import { Text } from "@nextui-org/react";

export const UserReport = () => {
  
  return (
    <div className="space-y-3">
    <div>
        <p className="font-bold text-xl">Your Balance</p>
        <p className="font-bold text-3xl">Rp3.000.000,00</p>
    </div>
    <div>
        <p className="font-bold text-xl">Income</p>
        <p className="font-bold text-3xl text-green-500">Rp5.0000.000,00</p>
    </div>
    <div>
        <p className="font-bold text-xl">Expenses</p>
       <p className="font-bold text-3xl text-red-500">Rp2.000.000,00</p>
    </div>
  
    </div>
  )
}
