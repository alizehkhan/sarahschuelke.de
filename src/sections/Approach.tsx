const approachs = [
  "🤝 Interactive",
  "🛠️ Practical, Hands-On",
  "⚡ Easy to Apply, Pragmatic",
  "🧠 Non-Dogmatic",
  "🪞 Reflective & Inspiring",
  "♥️ Empathetic",
  "🦁 Empowering",
];

export const Approach = () => {
  return (
    <div id="approach">
      <section className="container">
        <ul className="flex flex-wrap gap-4">
          {approachs.map((approach) => (
            <li
              key={approach}
              className="inline-block rounded-lg border-2 border-white bg-gray-50 p-2 font-serif text-lg font-semibold text-gray-500 drop-shadow-sm md:text-xl"
            >
              {approach}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
