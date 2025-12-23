import {useState} from "react";
export function DataBinArra3() {

  const [categories] = useState(["Home", "fashion" ,"electronics" ]);

 

  return (
    
    <>
    <div className="container-fluid p-2">
   
    <ol>
      {categories.map( (category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ol>
  <select>
    {categories.map( (category , index) => {
      return (<option key={index} value = {category}>{category} </option>)
    })}
  </select>

    </div>
    </>
  )
}