import { React, useState } from "react";
import "./GamesCarousel.css";
import { isMobile } from "react-device-detect";

function GamesCarousel(props) {
  let scrollPower;
  if (isMobile) {
    scrollPower = 395 * 2;
  } else {
    scrollPower = 395 * 2;
  }

  const { listImg, title, itemAmount } = props;
  const [carouselGo, setCarouselGo] = useState({});
  const [carouselGoAmount, setCarouselGoAmount] = useState(0);
  const [leftArrowVisable, setLeftArrowVisable] = useState("hidden");

  const metascoreColor = (metascore) => {
    if (metascore < 50 && metascore > 0) {
      return (
        <h2
          className="carouselScore"
          style={{
            backgroundColor: "red",
          }}
        >
          {metascore}
        </h2>
      );
    } else if (metascore > 50 && metascore < 75) {
      return (
        <h2
          className="carouselScore"
          style={{
            backgroundColor: "#fc3",
          }}
        >
          {metascore}
        </h2>
      );
    } else if (metascore > 75) {
      return (
        <h2
          className="carouselScore"
          style={{
            backgroundColor: "#6c3",
          }}
        >
          {metascore}
        </h2>
      );
    } else if (metascore !== undefined) {
      return (
        <h2
          className="carouselScore"
          style={{
            backgroundColor: "rgba(0,0,0, 0.4)",
          }}
        >
          {metascore}
        </h2>
      );
    }
  };

  const carouselRightHandler = () => {
    if (-(395 * itemAmount) < carouselGoAmount) {
      setLeftArrowVisable("visible");
      setCarouselGoAmount(carouselGoAmount - scrollPower);
      const right =
        "translateX(" + (carouselGoAmount - scrollPower).toString() + "px)";
      setCarouselGo({ transform: right });
      console.log(carouselGo);
    }
  };

  const carouselLeftHandler = () => {
    if (carouselGoAmount !== 0) {
      setCarouselGoAmount(carouselGoAmount + scrollPower);
      const left =
        "translateX(" + (carouselGoAmount + scrollPower).toString() + "px)";
      setCarouselGo({ transform: left });
      console.log(carouselGo);
    }
  };
  return (
    <div className="carouselPanel">
      <h1 className="title">{title}</h1>
      <span
        onClick={carouselLeftHandler}
        style={{ visibility: leftArrowVisable }}
        class="material-icons leftArrow"
      >
        navigate_before
      </span>

      <span onClick={carouselRightHandler} class="material-icons rightArrow">
        keyboard_arrow_right
      </span>

      <div className="carousel">
        {listImg.map((item) => (
          <div className="carouselCell" style={carouselGo}>
            <a
              target="_blank"
              rel="noreferrer"
              href={item.url}
              style={{ transform: "transplateX(0px)", width: "200px" }}
            >
              <img
                className="carouselImage"
                src={item.image}
                alt={item.title}
                key={item.title}
              />
              <div className="carouselItem">
                <h1 className="carouselTitle">{item.title}</h1>
                {metascoreColor(
                  item.metascore ? item.metascore : item.releaseDate
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesCarousel;
