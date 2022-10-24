import React from "react";

const isCloseToSpeedOfLight = (speed) => {
  const speedOfLight = 299792.458; // km/s
  return (speed * 100) / speedOfLight;
};

const mathRound = (value, digits) => {
  return Math.round((parseFloat(value) + Number.EPSILON) * digits) / digits;
};

const farFromMoon = (distance) => {
  const fromEarthToMoon = 384400; //km
  return Math.round(distance / fromEarthToMoon);
};

function Neo() {
  const [neo, setNeo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.fern.fun/asto/neo/today")
      .then((res) => res.json())
      .then((data) => {
        setNeo(data);
      });
  }, []);

  return (
    <>
      {neo.length > 0 ? (
        neo.map((item) => (
          <div key={item.name} className="astro-menu astro-neo-menu">
            <div>
              <a href={item.nasa_jpl_url} target="_blank">
                🔭{item.name}
              </a>
            </div>
            <div>
              Speed: {mathRound(item.velocity.kilometers_per_second, 100)}
              km/s
            </div>
            <div>
              {mathRound(
                isCloseToSpeedOfLight(item.velocity.kilometers_per_second),
                1000000
              )}
              % of the speed of light
            </div>
            <div>
              Earth Distance:{" "}
              {mathRound(item.distance_to_earth.astronomical, 100)}
              au
            </div>
            <div>
              {farFromMoon(item.distance_to_earth.kilometers)} Distance From
              Earth to Moon
            </div>
            <div></div>
          </div>
        ))
      ) : (
        <div className="loading">
          <img src="/img/loading.svg" />
        </div>
      )}
    </>
  );
}

export default Neo;
