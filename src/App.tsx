import './css/styles.css'
import logo from './assets/brand.png'
import cartIcon from './assets/shopping-cart.png'
import userIcon from './assets/user.png'

function App() {
  return (
    <>
      <section id="container">
        <header id="header">
          <a href="#" id="brand">
            <img src={logo} alt="Logo do Site" />
          </a>
          <nav id="navigation">
            <ul>
              <li>
                <a href="#">Recursos</a>
              </li>
              <li>
                <a href="#">Galeria</a>
              </li>
              <li>
                <a href="#">Informações</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
            </ul>
          </nav>
          <button id="btn-cart" className="button">Carrinho <img src={cartIcon} alt="Ícone carriho de compras" /></button>
          <button id="btn-login" className="button">Login<img src={userIcon} alt="Ícone carriho de compras" /></button>
        </header>
      </section>
    </>
  );
}

export default App;
