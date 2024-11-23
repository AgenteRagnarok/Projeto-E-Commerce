import { useState } from "react";
import keyboard  from "../../assets/teclado.svg";

const slides = [
  {
    title: "Queima de Estoque Gamer🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    image: "", // Substitua pela URL correta
  },
  {
    title: "Promoção Especial 🤑",
    description:
      "Descontos incríveis nos melhores produtos! Aproveite antes que acabe.",
    buttonText: "Aproveitar",
    image: "https://via.placeholder.com/300x200", // Substitua pela URL correta
  },
  {
    title: "Novidades Tecnológicas 🚀",
    description:
      "Fique por dentro das últimas tendências em tecnologia com preços imbatíveis.",
    buttonText: "Confira",
    image: "https://via.placeholder.com/300x200", // Substitua pela URL correta
  },
  {
    title: "Promoção Imperdível 🎉",
    description:
      "Ofertas exclusivas para você! Descontos imperdíveis nos melhores produtos.",
    buttonText: "Aproveitar",
    image: "https://via.placeholder.com/300x200", // Substitua pela URL correta
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full bg-gray-50 py-10">
      {/* Slides */}
      <div className="flex transition-transform duration-500 ease-in-out transform"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col md:flex-row items-center justify-center space-x-6 px-6"
          >
            {/* Texto */}
            <div className="max-w-md text-center md:text-left">
              <p className="text-sm text-orange-400 font-medium">
                Melhores ofertas personalizadas
              </p>
              <h2 className="text-4xl font-bold text-gray-900">{slide.title}</h2>
              <p className="text-gray-600 mt-4">{slide.description}</p>
              <button className="bg-primary mt-6 px-6 py-2 text-quaternaryText rounded-full shadow-lg">
                {slide.buttonText}
              </button>
            </div>

            {/* Imagem */}
            <div className="mt-6 md:mt-0">
              <img
                src={keyboard}
                alt="Slide Image"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 bg-primary rounded-full ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
