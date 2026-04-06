import Books from './Books/Books';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <>
      <header className="containers">
        <Hero />
      </header>

      <main className="containers">
        <Books />
      </main>
    </>
  );
};

export default Home;
