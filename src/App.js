import Header from 'components/Header/Header';
import './App.css';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import Values from 'components/Values/Values';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Hero />
      <About />
      <Values />
    </div>
  );
}

export default App;
