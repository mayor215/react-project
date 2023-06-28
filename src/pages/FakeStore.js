import { useEffect, useState } from "react"
import Header from "../components/Header"
import Slider from "../components/Slider"

export default function FakeStore(){

  const[products , setProducts] = useState([]);
  useEffect(() => {
//  Fetch products from https://fakestoreapi.com/products
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => setProducts(data))
.catch(error => console.log("Error is" + error))
  }, [])
    return<>
  <Header></Header>
  <Slider></Slider>
  <div>
  <h1 className="m-5 text-center">WHAT WE DO</h1>
  {/* service starts here */}
  <div className="services d-flex justify-content-between p-3 text-center flex-lg-row flex-md-column flex-sm-column">
    <div className="service fs-3 text-primary">
      <i className="fa fa-clock" />
      <h3>24/7</h3>
      <p>customer service</p>
    </div>
    <div className="service fs-3 text-primary">
      <i className="fa fa-user" />
      <h3>1000</h3>
      <p>esteemed customers</p>
    </div>
    <div className="service text-primary fs-3">
      <i className="fa fa-handshake" />
      <h3>300</h3>
      <p>complete deals</p>
    </div>
    <div className="service fs-3 text-primary">
      <i className="fa fa-truck" />
      <h3>100%</h3>
      <p>swift delivery</p>
    </div>
  </div>
  {/* services ends here     */}
  <h1 className="m-5 text-center">PRODUCT GALLERY</h1>
  <section className="d-flex flex-wrap justify-content-center p-1">
    {products.map(x => {
    return <div key={x.id} className="card" style={{width: '18rem'}}>
      <img src={x.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{x.title}</h5>
        <h5 className="card-title"><i className="fa fa-star text-warning"></i>{x.rating.rate} ({x.rating.count})</h5>
        <p className="card-text">{x.description}</p>
        <a href="#" className="btn btn-primary">${x.price}</a>
      </div>
    </div>})}
  </section>
</div>

    </>
}