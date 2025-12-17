import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { Testimonial } from "./Testimonial";

function App() {
  return (
    <>
      <head>
        <title>Sarah Schülke - Project Management Trainer</title>
      </head>
      <div className="h-screen bg-[url(sarah.jpg)] bg-cover bg-center">
        <Navigation />
      </div>
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
