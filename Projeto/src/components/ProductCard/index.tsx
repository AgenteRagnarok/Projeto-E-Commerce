import Notebook from "../../assets/notebook-acer-nitro-v15-anv155158ql-8gb-ram-rtx2050-512gb-ssd-borda-3.png";
import Gabinet from "../../assets/gabinete_gamer.webp"
import Process from "../../assets/processador_I9.png"

const cards = [
  {
    tag: "30% OFF",
    title: "Novo Acer Nitro V15 ANV155158QL",
    buttonText: "Comprar",
    image: Notebook,

  },
  {
    tag: "30% OFF",
    title: "Gabinete Gamer Neologic Guardian",
    buttonText: "Comprar",
    image: Gabinet,
  },
  {
    tag: "30% OFF",
    title: "Processador Intel Core i9-12900K",
    buttonText: "Comprar",
    image: Process,
  },
];

const ProductCard = () => {
  return (
    <section className="py-5 px-4 bg-gray-50">
      <h2 className="text-lg font-semibold border-x-sixternaryText mb-6">
        Coleções em destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-4 flex flex-col justify-between"
          >
            <div className="text-sm bg-lime-200 text-lime-800 px-2 py-1 rounded-full inline-block font-semibold mb-4">
              {card.tag}
            </div>
            <img
              src={card.image}
              alt={card.title}
              className="rounded-md w-full mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
