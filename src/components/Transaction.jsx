import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export const Transaction = ({data}) => {
  return (
    <Card shadow={'none'} className="border">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="grid grid-cols-4 gap-2 items-center" style={{width: '100%'}}>
            <p className="text-small text-default-500">{data.category}</p>
            <div className="col-span-2">
                <p className="text-md font-bold">{data.title}</p>
                <p className="text-xs">{data.description}</p>
            </div>
            <p className="text-md text-default-500">{data.amount}</p>
        </div>
      </CardHeader>
    </Card>
  )
}
