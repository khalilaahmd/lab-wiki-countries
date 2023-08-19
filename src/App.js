import Navbar from './components/Navbar';
import countriesData from "./countries.json";
import { Routes, Route, } from "react-router-dom";
// import HomePage from './pages/HomePage';
import CountriesList from './components/CountriesList'
import CountriesDetails from './components/CountriesDetails';


function App() {
  return (
    <div className="App">
    <h2>Wiki Countries</h2>
    <Navbar />
    <Routes>
    <Route path='/' element={<CountriesList countries={countriesData}/>} />
    <Route path='/:countryId' element={<CountriesDetails />} />
    </Routes>
    </div>
  );
}

export default App;
