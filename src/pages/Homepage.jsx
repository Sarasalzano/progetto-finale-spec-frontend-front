import Header from "../components/Header";
import Hero from "../components/Hero";
import CityControls from "../components/CityControls";
import CardList from "../components/CardList";
import { useState, useEffect } from "react";

export default function Homepage() {
  //stato che racchiude title e category
  const [cities, setCities] = useState([]);
  //stato che racchiude le category
  const [categories, setCategories] = useState("");
  //stato che racchiude l'ordine alfabetico delle città
  const [order, setOrder] = useState("Name: A-Z");

  //fetch per ottenere titolo e categoria città
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3001/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

  //crea array filtered cities che filtra le città per categoria altrimenti mostra tutte
  const filteredCities = categories
    ? cities.filter((city) => city.category === categories)
    : cities;

  //ordina nome delle città dalla A alla A o dalla Z alla A copiando primo livello dell'array filtered citie
  const sortedCities = [...filteredCities].sort((a, b) => {
    if (order === "Name: A-Z") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <>
      <Header />
      <Hero />
      <CityControls
        setCategories={setCategories}
        order={order}
        setOrder={setOrder}
      />
      <CardList sortedCities={sortedCities} />
    </>
  );
}
