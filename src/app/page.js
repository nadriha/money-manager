"use client"

import { useEffect } from "react";

import { NavbarApp } from "@/components/NavbarApp";
import { UserReport } from "@/components/UserReport";
import { UserTransactions } from "@/components/UserTransactions";
import { Chart } from "@/components/Chart";
import { useAtom } from "jotai";
import { transactionsAtom } from "@/components/atoms/transactionAtom";
import { userDataAtom } from "@/components/atoms/userData";

export const dynamic = "force-dynamic"

async function getTransactions(){
  const res = await fetch("http://localhost:3000/api/users/transactions/bb841c75-7d35-462b-b983-56adb95f2808");
  const transactionsData = await res.json()
  
  return transactionsData.data;
}


async function getUserData(){
  const res = await fetch("http://localhost:3000/api/users/bb841c75-7d35-462b-b983-56adb95f2808");
  const userData = await res.json()
  
  return userData.data;
}

export default function Home() {
  const [transactions, setTransactions] = useAtom(transactionsAtom)
  const [userData, setUserData] = useAtom(userDataAtom)
  // const { data } = await getTransactions()
  // const userData = await getUserData()

  useEffect(() => {
    async function fetchData() {
      const transactionsData = await getTransactions();
      setTransactions(transactionsData);

      const userData = await getUserData();
      setUserData(userData)
      // Assuming getTransactions() returns the data in the correct format
    }
    
    fetchData();
    
  }, [transactions]);


  return (
    <div>
      <NavbarApp/>
      <div className="m-6 grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <UserReport data={ userData } transactionData={transactions}/>
        </div>
        <UserTransactions data={ transactions }/>
      </div>
    </div>
  );
}
