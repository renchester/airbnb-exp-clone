import './sass/main.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card__container">
        <Card />
      </section>
    </div>
  );
}

export default App;
