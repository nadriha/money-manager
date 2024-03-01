"use client"

import React from 'react'
import { Input, Button } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';
import { Transaction } from './Transaction';
import { CategoryDropdown } from './CategoryDropdown';
import { CreateTransactionModal } from './CreateTransactionModal';
import { useState } from 'react';


export const UserTransactions = ({data}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchContent, setSearchContent] = useState('');

  const handleChangeCategory = (e) => {
    setSelectedCategory(e);
  }

  const handleChangeSearch = (e) => {
    setSearchContent(e.target.value)
    
  }

  if (searchContent || selectedCategory) {
    data = data.filter(data => 
        (!selectedCategory || data.category === selectedCategory) && 
        (!searchContent || data.title.toLowerCase().includes(searchContent.toLowerCase()))
    );
  }
  
 
   return (
    <div>
        <div className=" h-[580px] border rounded-lg p-5 ">
            <div className="flex justify-between">
                <div className="font-bold text-xl">Transactions</div>
                <CreateTransactionModal className="col-span-1"/> 
              </div>

              <div className="space-y-2 mt-2">
              <div className="grid grid-cols-4 gap-2">
              <Input className="col-span-3"
                    classNames={{
                        base: "w-full h-12",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                    onChange={handleChangeSearch}
              />
              <CategoryDropdown onChange={handleChangeCategory} className="col-span-1"/>
              </div>
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
