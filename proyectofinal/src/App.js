
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/Navbar';
import Footer from './components/Footer/Footer';








function App() {



  return (
    <div className="App">
      <NavBar />


      <ItemListContainer />


      <Footer />

    </div>
  );
}

export default App;