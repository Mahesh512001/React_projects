import { useState,useEffect } from "react";
export function EmiCalculator() {

const [amount , setAmount] = useState(100000);

const [years , setYears] = useState(1);
const [rate , setRate] = useState(10.45);

useEffect(() => {
      setAmount(100000);
      setYears(1);
      setRate(10.45);
},[])
  return (
  <div className="container-fluid p-2 bg-secondary">
    <div className="bg-light m-4 p-2">
      <div className="fs-4 my-2 fw-bold text-center">personal Loan EMI</div>
    <div className="row my-4">
      <div className="col">
        Amount you need<input value={amount} type="text" size="16"/>
      </div>
      <div className="col">
        for <input type="text"  value={years} size="2"/> years
      </div>
      <div className="col">
        interest rate <input value={rate} type="text" size="4"/>%
      </div>
      
    </div>
    <div className="row">
      <div className="col">
        <input type="range" value={amount}  className="form-range" step={5000} min={100000}/>
        <div className="">
          <span>&#8377; 1,00,000</span>
            <span className="float-end">&#8377; 1,00,00,00</span>
        </div>
      </div>
      <div className="col">
        <input type="range"  value={years} className="form-range" step={1} min={1} max={10}/>
          <span>1 year</span>
            <span className="float-end">6 year</span>
      </div>  
      <div className="col">
        <input type="range" value={rate} className="form-range" step={0.1} min={5} max={15}/>
          <span>10.45%</span>
            <span className="float-end">18.45%</span>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col text-end">
      <button className="btn btn-primary ">
        Calculate EMI
      </button>
      </div>
     
    </div>
    <div className="my-5">
      <div className="col text-center">
        <div className="fs-5 fw-bold">Your EMI is &#8377; 20,345</div>
      </div>
    </div>
    </div>
  </div>
  )

}