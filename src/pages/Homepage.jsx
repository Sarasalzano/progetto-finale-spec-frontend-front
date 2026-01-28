import Header from "../components/Header";
import Hero from "../components/Hero";
import CityControls from "../components/CityControls";
import CardList from "../components/CardList";
import { useState, useEffect } from "react";
import CompareAlert from "../components/CompareAlert";

export default function Homepage() {
  //stato che racchiude title e category
  const [cities, setCities] = useState([]);
  //stato che racchiude le category
  const [categories, setCategories] = useState("");
  //stato che racchiude l'ordine alfabetico delle città
  const [order, setOrder] = useState("Name: A-Z");
  //stato che racchiude ricerca searchBar
  const [search, setSearch] = useState("");
  //stato che racchiude città selezionate per il comparatore
  const [selectedCities, setSelectedCities] = useState([]);

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

  //crea logica della barra di ricerca
  // filtra le città confrontando il titolo con il testo della search ignorando maiuscole e minuscole e spazi inutili
  const searchedCities = sortedCities.filter((city) =>
    city.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  //logica della selezione città per compare Alert
  const handleSelectCity = (city) => {
    //se la città cliccata è già selezionata, la rimuovi dallo stato e deselezioni
    if (selectedCities.some((c) => c.id === city.id)) {
      setSelectedCities(selectedCities.filter((c) => c.id !== city.id));
    } else {
      //seleziono massimo due città
      if (selectedCities.length < 2) {
        //copia array selectedCities e aggiungi city
        setSelectedCities([...selectedCities, city]);
      }
    }
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Hero />
      <CityControls
        setCategories={setCategories}
        order={order}
        setOrder={setOrder}
      />
      <CardList
        searchedCities={searchedCities}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        handleSelectCity={handleSelectCity}
      />
      <CompareAlert selectedCities={selectedCities} />
    </>
  );
}
