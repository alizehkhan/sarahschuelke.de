const approaches = [
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
      <ul className="my-12 flex flex-wrap gap-4">
        {approaches.map((approach) => (
          <li
            key={approach}
            className="inline-block rounded-lg border-2 border-white bg-gray-50 p-2 text-lg text-gray-500 drop-shadow-sm md:text-xl"
          >
            {approach}
          </li>
        ))}
      </ul>
    </div>
  );
};
