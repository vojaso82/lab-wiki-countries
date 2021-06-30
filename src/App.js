import { Switch, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountrieList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (

    



    <main>
      <Navbar/>

      <Switch>

        <Route exact path='/' render={(props) => <CountrieList {...props} />} />

        <Route exact path='/country/:cca3' render={(props) => <CountryDetails {...props} />} />
        
      </Switch>



    </main>
  );
}

export default App;
