import React from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function FreeStory() {
  const [story, setStory] = useState([]);

  const getStory = async () => {
    try {
      const data = await axios.get("https://s59-grannies-tales.onrender.com/api");
      console.log(data.data);
      setStory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2"> Free Offered Stories</h1>
          <p>You can also register your own stories.</p>
        </div>

        <div>
          <Slider {...settings}>
            {story && story.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default FreeStory;
