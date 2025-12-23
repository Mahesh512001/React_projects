import { useState } from "react";

export function EventBinding4(){

  const [user , setUser] = useState("Mahesh");


  function handleChange(e){
    setUser(e.target.value);

  }


  return(
    <div className="container-fluid p-4">
      <dl>
        <dt>User Name</dt>
        <dd>    <input type="text" onChange={handleChange} value={user}/>
</dd>
      </dl>
      <p>Hello ! {user} </p>
    </div>
  )
}