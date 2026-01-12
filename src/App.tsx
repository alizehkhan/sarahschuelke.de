import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Approach } from "./sections/Approach";
import { Expertise } from "./sections/Expertise";
import { Quote } from "./sections/Quote";
import { Services } from "./sections/Services";
import { Testimonial } from "./sections/Testimonial";
import { Workshops } from "./sections/Workshops";

function App() {
  return (
    <>
      <div className="h-200 max-h-screen bg-[url('/sarah.jpg')] bg-cover">
        <Navigation />
        <div className="container mt-20 pb-8">
          <h1 className="max-w-124 font-serif text-6xl leading-tight font-semibold text-gray-600 md:text-[70px] md:leading-[1.12]">
            Where Structure Meets Empathy
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-500">
            Trainings, coaching & consultancy for empowered teams and leaders.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-md bg-amber-700 px-3 py-1.5 text-lg font-semibold text-white hover:bg-amber-800 active:bg-amber-900 md:text-xl"
          >
            Get in touch
          </a>
        </div>
      </div>
      <Workshops />
      <Quote />
      <About />
      <Approach />
      <Expertise />
      <Testimonial />
      <Services />
    </>
  );
}

export default App;
