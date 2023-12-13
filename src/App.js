import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      {/* <h1 style={{color: "red"}}>Netflix</h1> */}
      <Banner fetchurl = {request.fetchNetflixOriginals} />
      <Row title="Netflix Originals" fetchurl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchurl={request.fetchTrending} />
      <Row title="TopRated" fetchurl={request.fetchTopRated} />
      <Row title="Action" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentary" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
