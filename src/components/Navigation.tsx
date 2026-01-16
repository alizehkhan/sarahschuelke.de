const LINKS = [
  { name: "Offers", to: "offers" },
  { name: "Workshops", to: "workshops" },
  { name: "About", to: "about" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

export const Navigation = () => {
  return (
    <header>
      <nav className="container flex justify-between py-12 text-gray-800">
        <a href="/" className="font-serif text-3xl hover:no-underline">
          Sarah Schülke
        </a>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                className="text-lg underline-offset-2 hover:underline"
                href={`/#${link.to}`}
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
