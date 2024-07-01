import React, { useState, useEffect } from "react";

function FetchApi() {
  let [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className=" mb-5">API-PRACTICE</h1>
        {dogImage &&
          dogImage.map((dog) => (
            <img width={"200px"} height={"200px"} src={dog}></img>
          ))}
      </div>
    </>
  );
}

export default FetchApi;
