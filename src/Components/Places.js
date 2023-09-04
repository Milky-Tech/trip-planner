import React from "react";
import NavigationBut from "./Sliders/NavigationBut";

const Places = ({ places, country, setSelectedplace, p, setP }) => {
  //   const pElement = [];
  //   for (let i = 0; i < Plist.length; i++) {
  //     pElement.push(
  //       <div className="" key={i}>
  //         <p>{Plist[i]}</p>
  //       </div>
  //     );
  //   }
  const place = places.filter((p) => p.country === country && p.place);
  const Plist = place.map((ar) => ar.place)[0];
  const locationValue = () => setSelectedplace(Plist[p]);

  const prev = () => {
    return p === 0 ? setP(0) : setP(p - 1);
  };
  const fi = Plist.length - 1;
  const next = () => {
    return p === Plist.length - 1 ? setP(fi) : setP(p + 1);
  };
  return (
    <>
      <h2>Which City will you like to visit?</h2>
      <p>{Plist[p]}</p>
      <NavigationBut
        click={prev}
        name={p === 0 ? "inactivebut" : "but"}
        text="Previous"
      />

      <NavigationBut
        click={next}
        name={p === Plist.length - 1 ? "inactivebut" : "but"}
        text="Next"
      />

      <NavigationBut click={locationValue} text="Choose Location" />
    </>
  );
};

export default Places;
