import { useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo1.svg"; // Substitua pelo caminho correto da sua logo
import carrinho from "../../assets/carrinho.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      {/* Navbar Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo Digital Store" className="h-10 w-auto cursor-pointer" />
          </div>

          {/* Barra de Pesquisa (Desktop) */}
          <div className="hidden sm:block w-full max-w-lg relative mx-auto">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="w-full border:none rounded-md py-2 pl-4 pr-25 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <MagnifyingGlassIcon className="absolute top-1/2 right-3 h-5 w-5 transform fill-primary -translate-y-1/2 text-gray-500 " />
          </div>

          {/* Botões à Direita */}
          <div className="hidden sm:flex items-center space-x-6">
            <button className="bg-info text-quaternaryText py-2 px-7 rounded-lg hover:text-error shadow-lg font-medium">
              Cadastre-se
            </button>
            <button className="bg-primary text-quaternaryText py-2 px-9 rounded-lg shadow-lg font-medium">
              Entrar
            </button>
            <img src={carrinho} alt="Carrinho de Compras" className="h-10 w-10 hover:text-pink-600 cursor-pointer" />
          </div>

          {/* Menu Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Submenu (Desktop) */}
      <div className="hidden sm:flex">
        <div className="container mx-auto px-4 underline-offset-4 sm:px-6 lg:px-8">
          <div className="flex space-x-5 py-5">
            <a href="#" className="text-quinternaryBackground hover:text-primary hover:underline font-medium">
              Home
            </a>
            <a href="#" className="text-quinternaryBackground hover:text-primary hover:underline font-medium">
              Produtos
            </a>
            <a href="#" className="text-quinternaryBackground hover:text-primary hover:underline font-medium">
              Categorias
            </a>
            <a href="#" className="text-quinternaryBackground hover:text-primary hover:underline font-medium">
              Meus Pedidos
            </a>
          </div>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-100 py-4 px-4 space-y-2">
          <a href="#" className="block text-quinternaryBackground hover:text-pink-600">
            Home
          </a>
          <a href="#" className="block text-quinternaryBackground hover:text-pink-600">
            Produtos
          </a>
          <a href="#" className="block text-quinternaryBackground hover:text-pink-600">
            Categorias
          </a>
          <a href="#" className="block text-quinternaryBackground hover:text-pink-600">
            Meus Pedidos
          </a>
          <button className="block text-quinternaryBackground hover:text-pink-600">
            Cadastre-se
          </button>
          <button className="block bg-primary text-quaternaryText shadow-lg py-2 px-4 rounded-md font-medium">
            Entrar
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
