import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Expertise } from "./sections/Expertise";
import { Formats } from "./sections/Formats";
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
          <h1 className="max-w-140 font-serif text-6xl leading-tight font-bold text-gray-600 md:text-7xl md:leading-[1.12]">
            Where structure meets empathy
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-500">
            Trainings, coaching and consultancy for empowered teams and leaders.
          </p>
          <Button href="#contact">Get in touch</Button>
        </div>
      </div>
      <Formats />
      <Expertise />
      <img
        src="/workshop.jpg"
        alt=""
        className="h-[400px] w-full object-cover object-top"
      />
      <Workshops />
      <Quote />
      <About />
      <Testimonial />
    </>
  );
}

export default App;
