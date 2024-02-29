import React from 'react'
import { Input } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';
import { Transaction } from './Transaction';

export const UserTransactions = ({data}) => {
  return (
    <div>
        <div className=" h-[580px] border rounded-lg p-5 ">
            <div className="flex justify-between">
                <div className="font-bold text-xl">Transactions</div>
                    <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-8",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                    />
                </div>
                <div className="space-y-2 mt-5">
                {data.map((item, index) => {
                  return (
                    <Transaction key={index} data={item}/>
                  );
                })}
                </div>
            
        </div>
    </div>
  );
}
