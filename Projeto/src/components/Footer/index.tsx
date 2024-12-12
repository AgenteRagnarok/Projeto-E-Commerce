import LogoFooter from "../../assets/Vector.svg";
import LogoFacebook from "../../assets/ícone_facebook.svg";
import LogoInstagram from "../../assets/icone_instagram.png";
import LogoX from "../../assets/icone_twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-quinternaryText text-quaternaryText py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-semibold text-white"><img src={LogoFooter} alt="Logo Digital Store" />Digital Store</h2>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/digitalcollegebr?locale=pt_BR" className="#">
              <img src={LogoFacebook} alt="Logo Facebook" />
            </a>
            <a href="#" className="#">
            <img src={LogoInstagram} alt="Logo Instagram" />
            </a>
            <a href="#" className="#">
            <img src={LogoX} alt="Logo X" />
            </a>
          </div>
        </div>

        {/* Informações */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Informação</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://digitalcollege.com.br/" className="hover:underline">
                Sobre Drip Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Segurança
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="https://digitalcollege.com.br/" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="https://digitalcollege.com.br/" className="hover:underline">
                Trabalhe conosco
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </div>

        {/* Categorias */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categorias</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Teclados
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mouses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Monitores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gabinetes
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <address className="not-italic">
            Av. Santos Dumont, 1510 - 1 andar <br />
            Aldeota, Fortaleza - CE, 60150-161 <br />
            <a href="tel:+558530513411" className="hover:underline">
              (85) 3051-3411
            </a>
          </address>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm">&copy; 2024 Digital College <br /> Desenvolvido por: Vinicius <br />Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
