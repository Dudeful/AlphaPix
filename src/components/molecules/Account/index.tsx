import React from "react"
import { Input } from "../../atoms"

interface Accounts {
  agency?: string,
  accountNumber?: string
}


const Account: React.FC<Accounts> = ({accountNumber, agency}) =>{
  return (
    <div>
      <Input placeholder="" value={accountNumber} />
      <Input placeholder="" value={agency}/>
    </div>
  )
}

export {Account}