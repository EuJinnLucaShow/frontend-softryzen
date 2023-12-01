import Header from 'components/Header/Header';
import './App.css';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
