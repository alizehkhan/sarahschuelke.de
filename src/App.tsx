import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Quote } from "./sections/Quote";
import { Testimonial } from "./sections/Testimonial";
import { Workshops } from "./sections/Workshops";

function App() {
  return (
    <>
      <div className="h-200 max-h-screen bg-transparent bg-cover md:bg-[url('/sarah.jpg')]">
        <Navigation />
        <div className="container mt-0 pb-8 md:mt-20">
          <img
            src="/sarah.jpg"
            alt=""
            className="mb-4 block rounded-md md:hidden"
          />
          <h1 className="max-w-124 font-serif text-6xl leading-tight font-semibold text-gray-600 md:text-[70px] md:leading-[1.12]">
            Where Structure Meets Empathy
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-500">
            Trainings, coaching and consultancy for empowered teams and leaders.
          </p>
          <Button href="#contact">Get in touch</Button>
        </div>
      </div>
      <Workshops />
      <Quote />
      <About />
      <Testimonial />
    </>
  );
}

export default App;
