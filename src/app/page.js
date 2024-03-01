import { NavbarApp } from "@/components/NavbarApp";
import { UserReport } from "@/components/UserReport";
import { UserTransactions } from "@/components/UserTransactions";

export const dynamic = "force-dynamic"

async function getTransactions(){
  const res = await fetch("http://localhost:3000/api/users/transactions/ad793ef5-5857-44f4-aed2-97a6c9fbcc09");
  const transactionsData = await res.json()
  
  return transactionsData;
}


async function getUserData(){
  const res = await fetch("http://localhost:3000/api/users/ad793ef5-5857-44f4-aed2-97a6c9fbcc09");
  const userData = await res.json()
  
  return userData;
}



export default async function Home() {
  const { data } = await getTransactions()
  const userData = await getUserData()

  return (
    <div>
      <NavbarApp/>
      <div className="m-6 grid grid-cols-2">
        <UserReport data={ userData.data }/>
        <UserTransactions data={ data }/>
      </div>
    </div>
  );i
}
