import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Footer from "../components/footer/footer";
import Categories from "../components/categories/categories";
import Cards from "../components/cards/cards";
import CardsWomen from "../components/CardsWomen/CardsWomen";
import Countdown from "../components/countdown/countdown";
import Search from "../components/search/search";
import Partners from "../components/partners/partners";

export default function Home() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Intro />
      <Categories />
      <Cards />
      <CardsWomen />
      <Countdown />
      <Search />
      <Partners />
      <Footer />
    </main>
  );
}
