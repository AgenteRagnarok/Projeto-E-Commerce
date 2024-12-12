import { useState } from "react";
import keyboard from "../../assets/K606-R (2).webp";
import headphone from "../../assets/JBL_QUANTUM_910_Wireless_Product Image_Angle.webp";
import mouse from "../../assets/HTML Gamer Ninja Shark 3.webp";
import monitor from "../../assets/monitor-alienware-aw3423dw-gallery-1.avif";

const slides = [
  {
    title: "Queima de Estoque Gamer🔥",
    description:
      "Os melhores Teclados em promocão! Aproveite antes que as ofertas acabem.",
    buttonText: "Ver Ofertas",
    image: keyboard, 
  },
  {
    title: "Promoção Especial 🤑",
    description:
      "Descontos incríveis nos  Headphones! Aproveite!!",
    buttonText: "Aproveitar",
    image: headphone, 
  },
  {
    title: "Novidades Tecnológicas 🚀",
    description:
      "Fique por dentro das últimas tendências em tecnologia em nossos mouses com preços imbatíveis.",
    buttonText: "Confira",
    image: mouse , 
  },
  {
    title: "Promoção Imperdível 🎉",
    description:
      "Ofertas exclusivas para você em monitores! Descontos imperdíveis o aguardam.",
    buttonText: "Aproveitar",
    image: monitor, 
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
    <div className="relative w-full overflow-hidden bg-gray-50 py-10">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
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
              <button className="bg-primary mt-6 px-6 py-2 text-quaternaryText font-semibold rounded-full shadow-lg">
                {slide.buttonText}
              </button>
            </div>

            {/* Imagem */}
            <div className="mt-6 md:mt-0">
              <img
                src={slide.image}
                alt="Slide Image"
                className="w-full max-w-md object-cover border-0"
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
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-primary"
                : "bg-white border border-pink-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
