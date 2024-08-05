import React from "react";
import "./Companies.css";

const Companies: React.FC = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="Prologis" />
        <img src="./realty.png" alt="Realty" />
        <img src="./equinix.png" alt="Equinix" />
        <img src="./tower.png" alt="Tower" />
      </div>
    </section>
  );
};

export default Companies;
