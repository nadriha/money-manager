"use client"

import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Radio, RadioGroup, Input} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { CategoryDropdown } from './CategoryDropdown';

export const CreateTransactionModal = () => {
    const router = useRouter();
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [isExpenses, setIsExpenses] = useState("");
    const [category, setCategory] = useState('');

    const handleChangeCategory = (e) => {
        setCategory(e);
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeExpenses = (e) => {
        console.log(e.target.value)
        if (e.target.value === "expenses"){
            setIsExpenses("true")
        } else {
            setIsExpenses("")
        }
    }

    async function handlePostTransaction() {
        const res = await fetch("http://localhost:3000/api/transactions/",{
            method: "POST",
            body: JSON.stringify({
                title,
                category,
                "createDate": "2024-01-29T14:15:39Z",
                amount,
                description,
                "paymentType": "bni",
                "user_id": "ad793ef5-5857-44f4-aed2-97a6c9fbcc09",
                isExpenses
            })
        })
        console.log(res)
        router.refresh()
        onClose()
    }
        

    return (
      <>
        <Button onPress={onOpen} color="primary">Add Transaction</Button>
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">New Transaction</ModalHeader>
                <ModalBody>
                    <RadioGroup onChange={handleChangeExpenses}
                    orientation="horizontal"
                    >
                <Radio value="expenses">Expenses</Radio>
                <Radio value="income">Income</Radio>
                
                </RadioGroup>
                <CategoryDropdown onChange={handleChangeCategory}/>
                  <Input onChange={handleChangeTitle}
                    autoFocus
                    label="Title"
                    placeholder="Transaction"
                    variant="bordered"
                  />
                  <Input onChange={handleChangeAmount}
                    label="Amount"
                    placeholder="Amount"
                    variant="bordered"
                  />
                  <Input onChange={handleChangeDescription}
                    label="Description"
                    placeholder="Description"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handlePostTransaction}>
                    Add Transaction
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}
