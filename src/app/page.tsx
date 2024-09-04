import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Footer from "../components/footer/footer"
import Categories from '../components/categories/categories'
export default function Home() {
  return (
    <main>
       <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      <Header/>
      <Intro />
      <Categories />
      <Footer />
    </main>
  );
}
