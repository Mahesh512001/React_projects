import React, { useEffect, useState } from "react";

export function DataBindingRE(){

  const [mobile , setMobile] = useState("");

  useEffect(() => {
    setMobile( prompt("Enter mobile number with country code"))
  },[]);

  return (
    <div className="container-fluid p-2">
     <p>
      {mobile.match(/\+91\d{10}/) ? "valid mobile number" : "invalid mobile number"}
     </p>
      
    </div>
  )
}