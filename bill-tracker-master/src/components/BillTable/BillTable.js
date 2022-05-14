import React,{useState} from "react";
import { electricity_bills } from "../FakeData/bills";
import './BillTable.css'
import Table from './Table'
const paidBills = electricity_bills.filter(function(x){
  return x.paid === 'Yes'
  })
  
  const unpaidBills = electricity_bills.filter(function(x){
    return x.paid === 'No'
    })
const mapping = {
  'Paid Bills': paidBills,
  'Unpaid Bills': unpaidBills,
  'All Bills':electricity_bills
}


function BillTable() {
  const columns = Object.keys(electricity_bills[0])
  const [billType,setBillType] = useState('')
  console.log(billType)

  console.log(mapping[billType])
  return (
    <div>
        <select className="select-bills" onChange={e=>{setBillType(e.target.value)}}>
        <option value='All Bills'>All Bills</option>
        <option value = 'Paid Bills'>Paid Bills</option>
        <option value = 'Unpaid Bills'>Unpaid Bills</option>
       
      </select>

        <div>  
        <Table columns={columns} data={billType == '' ? electricity_bills:mapping[billType]} />
        </div>
        


    </div>

  );
}

export default BillTable;
