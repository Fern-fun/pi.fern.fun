import React from "react";
import "./GamesCarousel.css";

function GamesCarousel(props) {
  const { listImg } = props;

  const metascoreColor = (metascore) => {
    if (metascore < 50 && metascore > 0) {
      return "red";
    } else if (metascore > 50 && metascore < 75) {
      return "#fc3";
    } else if (metascore > 75) {
      return "#6c3";
    }
  };

  return (
    <div className="carouselPanel">
      <div className="carousel">
        {listImg.map((item) => (
          <div className="carouselCell">
            <a
              target="_blank"
              href={item.url}
              style={{ transform: "transplateX(0px)", width: "200px" }}
            >
              <img
                className="carouselImage"
                src={item.image}
                alt={item.title}
                key={item.title}
              />
              <h1 className="carouselTitle">{item.title}</h1>
              <h2
                className="carouselScore"
                style={{
                  backgroundColor: metascoreColor(item.metascore),
                }}
              >
                {item.metascore ? item.metascore : item.releaseDate}
              </h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesCarousel;
