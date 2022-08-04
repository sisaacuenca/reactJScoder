
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/Navbar';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'





function App() {



  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>

          <ItemListContainer />

        </Row>
      </Container>
      <Footer />

    </div>
  );
}

export default App;