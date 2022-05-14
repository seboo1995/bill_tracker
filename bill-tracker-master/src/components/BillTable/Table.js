import react from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { electricity_bills } from "../FakeData/bills";

function TableBill({ columns, data }) {



return (  <TableContainer overflowX='auto'>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      
      <Tr>
      {columns.map(col => {
        return <Th> {col}</Th>
      })}
      </Tr>
    </Thead>
    <Tbody>



      {data.map(row => {
        return (
        <Tr>
        <Td>{row.id}</Td> 
        <Td>{row.month}</Td>
        <Td>{row.year}</Td>
        <Td>{row.toBePaid}</Td>
        <Td>{row.spentKwh}</Td>
        <Td>{row.paid}</Td>

        </Tr>
        )
      })}
     
    </Tbody>
   
  </Table>
</TableContainer>)
    
  }

  export default TableBill