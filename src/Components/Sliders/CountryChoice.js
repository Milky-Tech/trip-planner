//import React, { useState } from "react";
import NavigationBut from "./NavigationBut";

const Choices = ({ country, setCountry, countries }) => {
  const prev = () => {
    return country === 0 ? setCountry(0) : setCountry(country - 1);
  };
  const fi = countries.length - 1;
  const next = () => {
    return country === countries.length - 1
      ? setCountry(fi)
      : setCountry(country + 1);
  };

  return (
    <div className="Country-slides">
      <h2> Select Country You Will like to visit</h2>
      <p>{countries[country]}</p>
      <img src="" alt={countries[country]} />

      <div>
        <NavigationBut
          click={prev}
          name={country === 0 ? "inactivebut" : ""}
          text="Previous"
        />
        {/* <input
          type="button"
          value={value}
          onChange={getVal}
          placeholder="Submit"
        /> */}

        <NavigationBut
          click={next}
          name={country === countries.length - 1 ? "inactivebut" : "but"}
          text="Next"
        />
      </div>
    </div>
  );
};

export default Choices;
