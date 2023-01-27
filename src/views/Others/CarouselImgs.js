import Carousel from 'react-bootstrap/Carousel';
import "./CarouselImgs.scss";
import img1 from "../../assets/img/carrusel/carrusel1.png";
import img2 from "../../assets/img/carrusel/carrusel2.png";
import img3 from "../../assets/img/carrusel/carrusel3.png";
import img4 from "../../assets/img/carrusel/carrusel4.png";

function CarouselImgs() {
  return (
    <section className="section">
    <div className="row">
				  <div className="col-md-12 ">
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className=" slide-title " >Nos preocupamos por tu salud</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1  className=" slide-title "> Trato digno y accesible para todos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1  className=" slide-title ">Profesionalismo y dedicacion nos caracterizan</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1  className=" slide-title ">Obten la dentadura mas hermosa</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
    </div>
    </section>      
   
  );
}

export default CarouselImgs;