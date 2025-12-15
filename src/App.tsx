import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Testimonial } from "./Testimonial";

function App() {
  return (
    <>
      <head>
        <title>Sarah Schülke - Project Management Trainer</title>
      </head>
      <div className="h-screen bg-[url(sarah.jpg)] bg-cover"></div>
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
