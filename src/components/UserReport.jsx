"use client"

import React from 'react'
import { Card, CardBody, Text } from "@nextui-org/react";

export const UserReport = () => {
  
  return (
    <div className="flex space-y-5 flex-col items-center mx-6">
      <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">Your Balance</p>
          <p className="font-bold text-4xl">Rp3.000.000,00</p>
      </div>
      <div className="grid grid-cols-2 w-full gap-3">
        <Card>
          <CardBody className="p-4">
            <p className="font-bold text-lg">Expenses</p>
            <p className="font-bold text-2xl text-red-500">Rp2.000.000,00</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-4">
            <p className="font-bold text-lg">Income</p>
            <p className="font-bold text-2xl text-green-500">Rp5.0000.000,00</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
