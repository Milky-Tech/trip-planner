import Header from "./Header";
import Choices from "./Sliders/CountryChoice";
import NavigationBut from "./Sliders/NavigationBut";
import { useState } from "react";
import Places from "./Places";
import ItemsList from "./ItemsList/ItemsList";

function App() {
  // const countries = [
  //   "United State",
  //   "France",
  //   "Nigeria",
  //   "United Kingdom",
  //   "India",
  //   "South Africa",
  //   "Canada",
  // ];
  const places = [
    {
      country: "United State",
      place: ["Miami beach", "Florida"],
    },
    {
      country: "Nigeria",
      place: [
        "Badagry",
        "VI",
        "Banana Island",
        "Lekki resort",
        "Ife grand resort",
      ],
    },
    {
      country: "India",
      place: ["Mumbai", "New Delhi", "Chakra", "Krishna"],
    },
    {
      country: "UnitedKingdom",
      place: ["Museum", "Manchester"],
    },
  ];
  const DtravelItem = [
    { id: 1, description: "Box", quantity: 2, packed: false },
    { id: 2, description: "Bagpack", quantity: 5, packed: false },
    { id: 3, description: "Lunch box", quantity: 4, packed: false },
    { id: 4, description: "Wears", quantity: 10, packed: false },
  ];
  const countries = places.map((c) => c.country);
  //const place = places.map((p) => p.place);
  //for Country choice
  const [country, setCountry] = useState(0);
  const [c, sC] = useState("");
  const countryValue = () => sC(countries[country]);

  // for Places
  const [plc, setPlc] = useState(0);
  const [selectedPlace, setSelectedplace] = useState("");

  // for Items
  // const itemsList = DtravelItem.map((it) => it);

  return (
    <>
      <Header />
      <div className="banner">
        <div className="bannerCover">
          {" "}
          <Choices
            countries={countries}
            country={country}
            setCountry={setCountry}
          />
          <NavigationBut click={countryValue} text="Select Country" />
        </div>
      </div>
      {c ? (
        <>
          <Places
            places={places}
            p={plc}
            setP={setPlc}
            countries={countries}
            country={c}
            setSelectedplace={setSelectedplace}
          />
          <ItemsList selectedPlace={selectedPlace} initialItems={DtravelItem} />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
