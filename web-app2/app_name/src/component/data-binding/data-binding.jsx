import { useState, useEffect } from "react";
import { DataBinArra } from "./data-binding-array";
import { DataBinArra3 } from "./data-binding-3";
import { DataBindingobj } from "./dat-binding-obj";
import { DataBindingRE } from "./data-binding-RE";
import moment from "moment/moment";

let categories = ["Home", "About" ,"electronics" ];

export function DataBinding() {
const [price , setPrice] = useState(0);
const [views, setViews] = useState(0);
const [buttonwidth,setButtonWidth] = useState("w-25");
const [title , setTitle] = useState("Data Binding Example");
const [stock, setStock] = useState(true);
const [value , setValue] = useState();



useEffect( () => {
  setValue((80000000000));
  setPrice(560000.00)
  setViews(4364643443)
  setButtonWidth("w-50")
  setTitle("Updated Data Binding Example")
  setStock(false)

},[]);

const [departure] = useState(new Date());
return(
  <>

    <header className="d-flex align-items-center p-2   bg-black text-white justify-content-between">
      <div className="fw-bold">Amazone</div>
      <nav>
        {
          categories.map( category=><span className="mx-2" key={category}>{category}</span>)
        }
      </nav>
    <button className="btn btn-danger">Sign in</button>

     </header>
        <h1><DataBindingRE/></h1>
     <div className="container-fluid p-2">
        <dl>
          <dt>Dparture</dt>
          <dd>{moment(departure).format('DD(dddd)-MMMM-YYYY')}</dd>
        </dl>
     </div>

      <h1>{title.toUpperCase()}</h1>
      <div className="container-fluid-p-2">

            <p>
              Price : {price.toLocaleString('en-in', {style:"currency", currency:'INR'})} 
            </p>

            <p>
              Views : {views.toLocaleString('en-us',{notation:"compact"})}
            </p>

      </div>

        <button className={`btn btn-primary ${buttonwidth}`}>
        submit
        </button>

        <p>
          { stock ? "In Stock" : "Out of Stock" }
        </p>

         <p>
           Value : {(value) ? value : "no value entered"}
        </p>
          
       <DataBinArra/>
          <DataBinArra3/>
          <DataBindingobj/>
  </>
)
   
  
}