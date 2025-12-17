const LINKS = [
  { name: "About", to: "about" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Offerings", to: "offerings" },
  { name: "Contact", to: "contact" },
];
export const Navigation = () => {
  return (
    <header>
      <nav className="container mx-auto flex justify-between py-12 text-gray-800">
        <a href="/" className="font-serif text-3xl hover:no-underline">
          Sarah Schülke
        </a>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                className="text-lg hover:underline"
                href={`#${link.to}`}
                // onClick={(event) => {
                //   event?.preventDefault();
                //   refs[link.to].current?.scrollIntoView({
                //     block: "start",
                //     behavior: "smooth",
                //   });
                // }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
