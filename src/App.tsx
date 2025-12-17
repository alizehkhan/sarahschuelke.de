import { About } from "./About";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { Testimonial } from "./Testimonial";

function App() {
  return (
    <>
      <head>
        <title>Sarah Schülke - Project Management Trainer</title>
      </head>
      <div className="h-[800px] max-h-screen bg-[url('./sarah.jpg')] bg-cover bg-center">
        <Navigation />
        <div className="container mx-auto mt-20 pb-8">
          <h1 className="max-w-120 font-serif text-5xl leading-tight font-semibold text-gray-700 md:text-6xl md:leading-[1.12]">
            Where structure meets empathy — and teams move forward.
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-500">
            Training, facilitation, and coaching for product teams and leaders.
          </p>
        </div>
      </div>
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
