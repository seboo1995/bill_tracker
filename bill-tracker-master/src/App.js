import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Lineplot from "./components/LinePlot/Lineplot";
import Histogram from "./components/Histogram/Histogram";
import { electricity_bills } from "./components/FakeData/bills";
import { useState } from "react";
import BillTable from "./components/BillTable/BillTable";
import { Box } from "@chakra-ui/react";
function App() {
  const t = electricity_bills
    .filter(({ paid }) => paid === "No")
    .reduce((sum, record) => sum + record.toBePaid, 0);

  

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" style={{ padding: 0 }}>
            <Lineplot props={electricity_bills} type="electricity" />
          </div>
          <div className="col-md-6" style={{ padding: 0 }}>
            {/* <Lineplot props={electricityBills} type='amount' /> */}
            <Histogram props={electricity_bills} />
          </div>
        </div>
        <div className="row table-heading">
          <p> All Bills</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <BillTable />
          </div>
          <div className="col-md-6">
            <div className="col-sm">
              <h1 className="kpi-heading"> To be Paid</h1>
              <Box
                bg="teal"
                w="20%"
                h="20%"
                p={"2%"}
                color="white"
                float="right"
              >
               <p style = {{fontSize:'1.4rem'}}> {t} MKD </p>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
