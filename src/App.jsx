import "./App.css";
import {
  Hero,
  Navbar,
  Footer,
  Services,
  PopularProducts,
  Subsecribe,
  SpecialOffre,
  Costumer
} from "../src/sections/index";
function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
      <section className="padding">Popular products</section>
      <section className="padding">Super quality</section>
      <section className="padding-x py10">Services </section>
      <section className="padding">Special offers</section>
      <section className="padding bg-pale-blue ">Costumer Review</section>
      <section className="padding-x sm:py32 py-16 w-full">Subcribe</section>
      <section className="padding bg-black padding-x padding-y pb-8">
        Footer
      </section>
    </main>
  );
}

export default App;
