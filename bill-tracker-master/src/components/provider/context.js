import React, { useState, createContext } from "react";
import { electricity_bills } from "../FakeData/bills";

const ElectricityContext = createContext();
// const { ElectricityContext: ThemeProvider } = createContext();

const ElectricityBillProvider = ({ children }) => {
  const [electricityBills, setElectricityBills] = useState(electricity_bills);

  function addElectricityBill(month, year, toBePaid, spentKwh) {
    const max_id = electricityBills.reduce(function (prev, current) {
      return prev.y > current.y ? prev : current;
    });
    setElectricityBills([
      ...electricityBills,
      {
        id: max_id + 1,
        month: month,
        year: year,
        toBePaid: toBePaid,
        spentKwh: spentKwh,
        paid: false,
      },
    ]);
  }
  function payElectricityBill(month, year) {
    const allBills = [...electricityBills];
    let objInd = allBills.findIndex(
      (bill) => bill.month === month && bill.year === year
    );
    allBills[objInd].paid = true;
    setElectricityBills(allBills);
  }
  const value = { addElectricityBill, payElectricityBill, electricityBills };

  return <ElectricityContext value = {value}>{children}</ElectricityContext>;
};
export { ElectricityContext, ElectricityBillProvider };
