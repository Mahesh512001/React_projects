import { useEffect } from "react";
import { useState } from "react";

export function DataBinding() {
const [user,setUser] = useState('john doe');
const [Age,setAge] = useState(0);

useEffect(() => {
    setUser('David');
    setAge(22);
}, []);


  return (
    <div>
   
      <p>Hello ! {user} </p>
      <dl>
        <dt>user Name</dt>
        <dd><input type="text" value={user}/></dd>
      </dl>
      <dl>
        <dt>Age</dt>
        <dd><input type="text" value={Age}/></dd>
      </dl>
    </div>
  )
}