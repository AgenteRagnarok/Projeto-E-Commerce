import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo1.svg'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Produtos', href: '#', current: false },
  { name: 'Categorias', href: '#', current: false },
  { name: 'Meus Pedidos', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
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

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center">
                  <img src={logo} alt="Digital Store Logo" className="h-8 w-auto" />
                  <span className="ml-2 text-2xl font-semibold text-pink-600"></span>
                </div>
              </div>

              {/* Search bar */}
              <div className="hidden sm:flex sm:mx-auto sm:w-1/2">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500"
                  />
                  <MagnifyingGlassIcon className="absolute top-1/2 right-3 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Buttons and cart icon */}
              <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2">
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-pink-600">
                  Cadastre-se
                </a>
                <a
                  href="#"
                  className="bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Entrar
                </a>
                <button
                  type="button"
                  className="p-1 text-gray-400 rounded-full hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <span className="sr-only">View cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-pink-600 text-white' : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;
