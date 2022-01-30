import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner' 
import Nav from './Nav'
import './App.css';

 
function App() {
  return (
    <div className="app">

      {/* Nav bar */}
      <Nav />

      {/* Banner */}
      <Banner/> 
      
      {/* Row */} 
      <Row head = "Popular" fetchUrl={requests.fetchPopular} id = "1" isLargeRow = {true}/>
      <Row head = "Top Rated" fetchUrl={requests.fetchTopRated} id = "2"/>
      <Row head = "Trending Now" fetchUrl={requests.fetchTrending} id = "3"/>
      <Row head = "Comedy" fetchUrl={requests.fetchComedyMovies} id = "4"/>
      <Row head = "Horror" fetchUrl={requests.fetchHorrorMovies} id = "5"/>
      <Row head = "Romance" fetchUrl={requests.fetchRomanceMovies} id = "6"/>
      <Row head = "Animation" fetchUrl={requests.fetchAnimationMovies} id = "7"/>
      <Row head = "Adventure" fetchUrl={requests.fetchAdventureMovies} id = "8"/>
      <Row head = "Drama" fetchUrl={requests.fetchDramaMovies} id = "9"/>
      <Row head = "Crime" fetchUrl={requests.fetchCrimeMovies} id = "10"/>
      <Row head = "Mystery" fetchUrl={requests.fetchMysteryMovies} id = "11"/>
      <Row head = "Action" fetchUrl={requests.fetchActionMovies} id = "12"/>
      <Row head = "Documentaries" fetchUrl={requests.fetchDocumentariesovies} id = "13"/>
      </div>
  );
}

export default App; 