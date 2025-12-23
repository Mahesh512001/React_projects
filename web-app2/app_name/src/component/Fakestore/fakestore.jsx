import axios from "axios";
import { useEffect,useState } from "react";
import "./fakestore.css";



export function Fakestore() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([{id:0, title:"", price:0, description:"", category:"", image:"", rating:{rate:0, count:0}}]);

  function LoadCategories(){
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response=>{
      response.data.unshift("all");
      setCategories(response.data);
    })
  }

  function LoadProduct() {
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
      setProducts(response.data);
    })
  }

  useEffect(()=>{
    LoadCategories();
    LoadProduct();
  },[])

  return (
    <div className="container-fluid">
 <header className="d-flex mt-2 fs-4 justify-content-between p-2 bg-light align-items-center">
<div className="fw-bold">Fakestore</div>
   <div >
    <div className="input-group">
    <input type="text" placeholder="Search Fakestore"className="form-control" />
    <button className="btn btn-warning bi bi-search" type="button">Search</button>
    </div>
   </div>
   <span className="bi bi-cart4"></span>
    </header>

    <section className="mt-3 row">
      <nav className="col-2">
      <div className="">
    <label htmlFor="" className="form-label fw-bold">Select Category</label>
    <div>
      <select className="form-select">
        {
          categories.map((category,index)=><option value={category} key={index}>{category.toUpperCase()}</option>
          )
        }
      </select>
    </div>
      </div>
      </nav>
      <main className="col-10 d-flex flex-wrap overflow-auto fakestore-container">
        {
          products.map((product)=>
          <div key={product.id} className="card m-2 p-2 fakestore-card">
            <img src={product.image} alt={product.title} className="card-img-top fakestore-img-top"/>
            <div className="card-header fakestore-card-header">{product.title}</div>
        <div className="card-body">
          <dl>
            <dt>price</dt>
            <dd>{product.price.toLocaleString('en-in',{style:"currency",currency:"INR"})}</dd>
            <dt>Rating
            </dt>
            <dd>
              <span className="badge bg-success text-white rounded p-2">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
            </dd>
          </dl>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning w-100 bi bi-cart4">Add to cart</button>
        </div>
          </div>
          )
        }
      </main>
    </section>
    </div>
   
  );
}