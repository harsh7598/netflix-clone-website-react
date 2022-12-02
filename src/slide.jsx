import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1501182.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Money Heist</h3>
          <p>2017 ‧ Thriller ‧ 5 seasons</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://flxt.tmsimg.com/assets/p18484250_b_h8_aa.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dark Desire</h3>
          <p>2020 ‧ Thriller ‧ 2 seasons</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2021/05/Lucifer-5B-poster-1200.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lucifer</h3>
          <p>2016 ‧ Mystery ‧ 6 seasons</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;