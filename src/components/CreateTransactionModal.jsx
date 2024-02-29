"use client"

import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export const CreateTransactionModal = () => {
    const router = useRouter();
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    async function handlePostTransaction() {
        const res = await fetch("http://localhost:3000/api/transactions/",{
            method: "POST",
            body: JSON.stringify({
                title,
                "category" : "Gift",
                "createDate": "2024-01-29T14:15:39Z",
                amount,
                description,
                "paymentType": "bni",
                "user_id": "ad793ef5-5857-44f4-aed2-97a6c9fbcc09"
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
