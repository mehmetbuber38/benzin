import React from "react";
import { CardsProps } from "./type";
import "./index.scss";

const Cards = ({ country, price, flag, title }: CardsProps) => {
  return (
    <>
      <div className="cards">
        <div className="cards__body">
          <div className="cards__body-title">{title}</div>
          <div className="cards__body-country">{country}</div>
          <div className="cards__body-price">{price}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
