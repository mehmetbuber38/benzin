import React, { useState } from "react";
import axios from "axios";
import "./index.scss";
import { SearchProps } from "./type";

const Search = ({ title }: SearchProps) => {
  const [searchText, setSearchText] = useState(""); 
  const [fuelData, setFuelData] = useState(null); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); 
  };

  const handleButtonClick = async () => {
    try {
      const apiUrl = `https://api.collectapi.com/gasPrice/fromCity?city=${searchText}`;
      const apiKey = "your_token";
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setFuelData(data);
      } else {
      
        console.error("API isteğinde hata oluştu. Durum Kodu: " + response.status);
      }
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    }
  };

  return (
    <div className="search">
      <div className="search__body">
        <div className="search__body-title">{title}</div>
        <div className="search__body-input">
          <input type="text" value={searchText} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Veriyi Getir</button>
        </div>
      </div>
      {fuelData && (
        <div className="fuel-data">
          <h2>Sonuçlar</h2>
          <pre>{JSON.stringify(fuelData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Search;
