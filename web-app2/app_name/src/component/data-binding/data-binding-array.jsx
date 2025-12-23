import { useEffect, useState } from "react";

export function DataBinArra() {
 

  const [categories, setCategories] = useState([]);
  const [electronics] = useState(Array.of("Electronic 1", "Electronic 2", "Electronic 3"));
  const [fashion] = useState(Array.from(["Fashion 1", "Fashion 2", "Fashion 3"]));
  

  useEffect(() => {
   setCategories([...electronics, ...fashion]);
  }, []);
  return (
    <>
    <div className="container-fluid p-2">
      <p>{categories}</p>
    </div>
    </>
  );


}