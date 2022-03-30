import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";

const ListSlider = (props) => {
  const { listName, moviesList } = props;


  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  return (
    <div className="text-white container my-4">
      <h2 className="text-capitalize"> {listName} </h2>
      <Slider {...settings}>
        {moviesList ? (
          moviesList.map((item, i) => (
            <MovieCard key={item._id} index={i} item={item} />
          ))
        ) : (
          <div className="d-flex justify-content-center p-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ListSlider;
