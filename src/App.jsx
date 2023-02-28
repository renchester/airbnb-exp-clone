import './sass/main.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data';

function App() {
  const cards = data.map((entry) => <Card key={entry.id} entry={entry} />);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card__container">{cards}</section>
    </div>
  );
}

export default App;
