import { useState } from "react";
import Swal from "sweetalert2";
export default function MovieWebsite() {
  const [text, setText] = useState([]);
  const [movies, setMovies] = useState([])

  //117fedef
  function getMoviesHandler(e){
    e.preventDefault();
    if (text.length < 3) {
      Swal.fire('Enter A Movie ')
    }
    fetch('http://www.omdbapi.com/?apikey=117fedef&s=' + text)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.log(error))
  }


  return (
    <div className="w-100 py-5 " style={{ backgroundColor: "black", height: "100%", position: "absolute" }}>
      <h1 className="text-center text-uppercase text-white">MovieFlix</h1>
      <form onSubmit={getMoviesHandler} className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-danger">
        {/* 2.Add an onChange event to input  */}
        <input onChange={e => setText(e.target.value)} placeholder="Enter Movie Title" type="text" className=" fs-5 p-3 .rounded  me-5" />
        {/* 3. Add an onClick event to the button  */}
        <button className=" btn btn-danger p-3 fs-5">Search</button>
      </form>

      <div className="d-flex flex-wrap justify-content-center px-1">
        {movies.map(x => {
          return <div className={x.imbID} style={{ width: '18rem'}}>
            <img src={x.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{x.Title}</h5>
              <p className="card-text"> {x.Year} {x.type}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        })}


      </div>

    </div>
  );
}
