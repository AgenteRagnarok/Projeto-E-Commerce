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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo e Navegação */}
              <div className="flex flex-col items-center sm:flex-row">
                <div className="flex items-center">
                  <img
                    src={logo}
                    alt="Digital Store Logo"
                    className="h-8 w-auto"
                  />
                  <span className="ml-2 text-2xl font-semibold text-pink-600"></span>
                </div>
                <div className="hidden sm:flex sm:ml-6 sm:space-x-4 mt-2 sm:mt-0">
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
              </div>

              {/* Barra de pesquisa e Botoes */}
              <div className="flex flex-1 items-center justify-center sm:justify-end sm:space-x-4">
                {/* Barra de pesquisa */}
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    className="w-full py-2 pl-4 pr-10 bg-[#f4ebeb] border border-gray-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-[#f4ebeb] focus:border-gray-400"
                  />
                  <MagnifyingGlassIcon className="absolute top-1/2 right-3 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                </div>

                {/* Buttons para Cadastre-se, Entrar, and Cart Icon */}
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-600 text-sm font-medium"
                  >
                    Cadastre-se
                  </a>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 text-sm font-medium">
                    Entrar
                  </button>
                  <button className="relative text-gray-600 hover:text-pink-600">
                    <img
                      src={carrinho}
                      alt="Carrinho de compras"
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="sr-only"></span>
                  </button>
                </div>
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
