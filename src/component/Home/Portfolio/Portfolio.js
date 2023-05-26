import React from "react";
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useGet } from "../../../_Utils/Hooks";

const Portfolio = () => {
  const { data, error } = useGet("http://localhost:8080/users/projects")
  const base64prefix = "data:image/jpeg;base64,"
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
  };

  if (data) {

    return (
      <Grid>
        <Slider {...settings}>
          {data.map(item => {
            const randomIndex = getRandomIndex(item.images.length)
            const randomImage = item.images[randomIndex] ? item.images[randomIndex].image : null
            return (
              <section key={item.id} className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                <Grid className="portfolio-carousel-items owl-carousel">
                  <Grid className="single-portofolio bg-cover text-white" style={{ backgroundImage: `url(${base64prefix}${randomImage})`}}>
                    <Grid className="portfolio-content">
                      <h3>{item.title}</h3>
                      <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      <Grid className="portfolio-cat">
                        <span>{item.description}</span>
                      </Grid>
                      <Link to={`/project/${item.id}`} className="read-more-port">Scopri di più <i className="fas fa-arrow-right"></i></Link>
                    </Grid>
                  </Grid>
                </Grid>
              </section>
            )})}
        </Slider>
      </Grid>
    );
  };
}

export default Portfolio;
