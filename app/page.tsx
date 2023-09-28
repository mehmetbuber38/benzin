'use client';
import { Search, Header, Cards } from "./components";
import "./main.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Search title="Ülke İsmini Giriniz:" />
      <div className="main-cards">
        <Cards title="Ülke" country="Türkiye" price="TL" flag={true} />
        <Cards title="Ülke" country="Türkiye" price="TL" flag={true} />
        <Cards title="Ülke" country="Türkiye" price="TL" flag={true} />
      </div>
    </>
  );
}
