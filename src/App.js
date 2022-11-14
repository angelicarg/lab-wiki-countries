import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Inicio</h1>
        <CountriesList />
      </div>
    </div>
  );
}

export default App;
