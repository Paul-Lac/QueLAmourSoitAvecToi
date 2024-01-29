import { useEffect } from "react";
import { useState } from "react";

import Char from "../components/Char.jsx";
import Date from "./Date.jsx";
import Heart from "../assets/heart.png";

import "../App.css";
import "./PartnerResult.css";

function PartnerResult({ char, partner }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, []);

  return (
    <>
      {active ? (
        <Date partner={partner} />
      ) : (
        <section id="partner-result">
          <h1>Match !</h1>
          <div id="match">
            <Char char={char} />
            <img id="heart" src={Heart} alt="" />
            <Char char={partner} />
          </div>
        </section>
      )}
    </>
  );
}

export default PartnerResult;
