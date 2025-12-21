import { About } from "./About";
import { Navigation } from "./Navigation";
import { Expertise } from "./Expertise";
import { Testimonial } from "./Testimonial";
import { Workshops } from "./Workshops";
import { Services } from "./Services";
import { Quote } from "./Quote";

function App() {
  return (
    <>
      <div className="h-200 max-h-screen bg-[url('/sarah.jpg')] bg-cover bg-center">
        <Navigation />
        <div className="container mx-auto mt-20 pb-8">
          <h1 className="max-w-120 font-serif text-6xl leading-tight font-semibold text-gray-600 md:text-[70px] md:leading-[1.12]">
            Where structure meets empathy
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-500">
            Training, consultancy, and coaching for product teams and leaders in
            Germany.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-md bg-amber-700 px-3 py-1.5 font-semibold text-white hover:bg-amber-800 active:bg-amber-900"
          >
            Get in touch
          </a>
        </div>
      </div>
      <Services />
      <Workshops />
      <Quote />
      <About />
      <Expertise />
      <Testimonial />
    </>
  );
}

export default App;
