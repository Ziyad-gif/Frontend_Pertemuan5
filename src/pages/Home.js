
// Import Navbar, Hero, Movies, Footer Component
import AddmovieForm from "../components/AddmovieForm/AddmovieForm.js";
import Navbar from "../components/Navbar/navbar.js";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  return (
    <main>
      <Hero />
      <Movies />
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <AddmovieForm/>
      <Footer />
    </>
  );
}

export default Home;
