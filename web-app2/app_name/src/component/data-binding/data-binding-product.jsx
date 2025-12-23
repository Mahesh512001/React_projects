import { useState, useEffect } from "react";
import axoios from "axios";

export function DataBindingProduct() {
  const [product, setProduct] = useState({
    title: null,
    price: 0,
    image: null,
    rating: {},
    offers: [],
  });

  // function LoadProduct() {
  //   let http = new XMLHttpRequest();
  //   http.open("GET", "product.json", true);
  //   http.send();
  //   http.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       setProduct(JSON.parse(this.responseText));
  //     }
  //   };
  // }

  // function LoadProduct() {
  //   fetch("product.json")
  //     .then((response) => response.json())
  //     .then((product) => {
  //       setProduct(product);
  //     });
  // }

  function LoadProduct() {
    axoios.get('product.json')
    .then((Response) =>{
      setProduct(Response.data);
    })
  }



  useEffect(() => {
    LoadProduct();
  });

  return (
    <>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col-3">
            <img src={product.image} alt="Product" className="img-fluid" />
          </div>
          <div className="col-9">
            <h3>{product.title}</h3>

            <div className="my-2">
              <span className="badge bg-success text-white rounded p-1">
                {product.rating.rate}
                <span className="bi bi-star-fill mx-1 "></span>
              </span>
              <span className="mx-2">
                {product.rating.ratings} rating & {product.rating.reviews}{" "}
                reviews
              </span>
            </div>

            <div className="mt-3">
              <div className="fw-bold fs-1">
                {product.price.toLocaleString("en-in", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
              <div className="mt-4">
                <div className="fw-bold fs-9 my-2">Available offers </div>
                <ul className="list-unstyled">
                  {product.offers.map((offer, index) => (
                    <li
                      className="bi bi-tag-fill text-success my-2"
                      key={index}
                    >
                      <span className="text-secondary mx-3">
                        {offer.offerType}:{offer.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
