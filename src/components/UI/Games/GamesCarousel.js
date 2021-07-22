import React from "react";
import "./GamesCarousel.css";

function GamesCarousel(props) {
  const { listImg } = props;

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

  return (
    <div className="carouselPanel">
      <div className="carousel">
        {listImg.map((item) => (
          <div className="carouselCell">
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
