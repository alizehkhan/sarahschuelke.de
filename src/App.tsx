import { useTranslation } from "react-i18next";

import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Expertise } from "./sections/Expertise";
import { Formats } from "./sections/Formats";
import { Quote } from "./sections/Quote";
import { Testimonial } from "./sections/Testimonial";
import { Workshops } from "./sections/Workshops";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-200 max-h-screen bg-transparent bg-cover md:bg-[url('/images/sarah.jpg')]">
        <Navigation />
        <div className="container mt-0 pb-8 md:mt-20">
          <img
            src="/images/sarah.jpg"
            alt=""
            className="mb-4 block aspect-square rounded-md object-cover md:hidden"
          />
          <h1 className="max-w-140 font-serif text-4xl leading-[1.12] font-bold text-gray-700 md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-2 max-w-100 text-2xl text-gray-600">
            {t("hero.subtitle")}
          </p>
          <Button href="#contact">{t("get-in-touch")}</Button>
        </div>
      </div>
      <Formats />
      <Expertise />
      <img
        src="/images/workshop.jpg"
        alt=""
        className="aspect-video w-full object-cover object-top md:aspect-16/7"
      />
      <Workshops />
      <Quote />
      <About />
      <Testimonial />
    </>
  );
}

export default App;
