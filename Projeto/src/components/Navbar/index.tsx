import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo1.svg";
import carrinho from "../../assets/carrinho.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Produtos", href: "#", current: false },
  { name: "Categorias", href: "#", current: false },
  { name: "Meus Pedidos", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = function () {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo e Botão de Menu Mobile */}
              <div className="flex items-center space-x-4">
                {/* Botão de menu mobile */}
                <Disclosure.Button className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
                  <span className="sr-only">Abrir menu principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                {/* Logo */}
                <div className="flex items-center justify-center w-full sm:w-auto">
                  <img
                    src={logo}
                    alt="Digital Store Logo"
                    className="h-8 sm:h-10"
                  />
                  <span className="ml-2 text-2xl font-semibold text-pink-600">
                    
                  </span>
                </div>
              </div>

              {/* Links de Navegação (somente desktop) */}
              <div className="hidden sm:flex sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-pink-600 font-semibold"
                        : "text-gray-600 hover:text-pink-600",
                      "text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Barra de pesquisa e botões de ação */}
              <div className="flex items-center space-x-4">
                {/* Barra de pesquisa (esconde no mobile) */}
                <div className="relative hidden w-full max-w-xs sm:block">
                  <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    className="w-full py-2 pl-24 pr-14 bg-[#f8f3f3] border-none rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-[#e5dddd] focus:border-gray-400"
                  />
                  <MagnifyingGlassIcon className="absolute top-1/2 right-3 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                </div>

                {/* Botões de Cadastro, Entrar e Carrinho */}
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-600 text-sm font-medium hidden sm:block"
                >
                  Cadastre-se
                </a>
                <button className="px-9 py-2 bg-primary rounded-s-md rounded-e-md text-quaternaryText text-sm shadow-lg font-medium hidden sm:block">
                  Entrar
                </button>
                <button className="p-5 text-gray-600 hover:text-pink-600">
                  <img
                    src={carrinho}
                    alt="Carrinho de compras"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Carrinho</span>
                </button>
              </div>
            </div>
          </div>

          {/* Menu Mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-pink-600 text-white"
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* Adicionando opções para Cadastro e Entrar no mobile */}
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              >
                Cadastre-se
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-600 bg-pink-50 hover:bg-pink-100"
              >
                Entrar
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
