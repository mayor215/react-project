export default function Slider(){
    return<>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1191909007/photo/smiling-taxi-driver-with-woman-passenger-pointing-on-road.jpg?s=612x612&w=0&k=20&c=yzY9aKM6CDMFlPcz2QMCRYXKPqM9G8VKd7G4Vt5cARo=" alt />
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/image-photo/man-waiting-taxi-cab-on-260nw-1857440074.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.betterteam.com/images/taxi-driver-job-description-4651x3101-2020122.jpeg?crop=1:1,smart&width=1200&dpr=2" alt />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    </>
}