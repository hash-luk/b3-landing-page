import $ from "jquery";

import "./css/styles.css";
import logo from "./assets/brand.png";
import cartIcon from "./assets/shopping-cart.png";
import userIcon from "./assets/user.png";
import headsetImage from "./assets/phone.png";
import mailIcon from "./assets/o-email.png";
import messageIcon from "./assets/envelope.png";
import sendIcon from "./assets/send.png";
import shape1 from "./assets/shape1.png";
import shape2 from "./assets/shape2.png";
import menuicon from "./assets/hamburger.png";

function App() {
  function toggleMenu() {
      $('nav').toggleClass("active");
  }

  function closeModal() {
    $('#openModal').css('display', 'none');  
  }

  function openModal() {
    $('#openModal').css('display', 'block');
  }

  return (
    <>
      <section id="container">
        <object id="shapes">
          <img className="shape1" src={shape1} />
          <img className="shape2" src={shape2} />
        </object>

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
              <li>
                <a href="#" className="item-menu-responsive">Carrinho</a>
              </li>
              <li>
                <a href="#" className="item-menu-responsive">Login</a>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <img src={menuicon} alt="Ícone de menu" />
          </div>
          <button id="btn-cart" className="button">
            Carrinho <img src={cartIcon} alt="Ícone carriho de compras" />
          </button>
          <button id="btn-login" className="button">
            Login
            <img src={userIcon} alt="Ícone carriho de compras" />
          </button>
        </header>
        <article id="article">
          <span>B3</span>
          <h1>SUPER FONE COM EXTREMA QUALIDADE DE AUDIO</h1>
          <h2>
            Você irá se surpreender com a qualidade de áudio desse fone. Viaje
            em suas músicas com ótimas definiçõesde grave e agudos
          </h2>

          <div className="sendmessage">
            <div id="mail">
              <i>
                <img src={mailIcon} alt="Icone de uma carta de mensagem" />
              </i>
              <input type="email" placeholder="Digite seu email" />
            </div>
            <div id="message">
              <i>
                <img src={messageIcon} alt="Icone de uma carta de mensagem" />
              </i>
              <input type="text" placeholder="Digite sua mensagem" />
            </div>
            <button className="btn-send" onClick={openModal}>
              ENVIAR
              <i>
                <img src={sendIcon} alt="Icone de envio" />
              </i>
            </button>
          </div>
        </article>
        <picture id="headset-image">
          <img src={headsetImage} alt="Imagem do headset" />
        </picture>
        <footer id="footer">
          <small>
            &copy; Desenvolvido com ❤ por{" "}
            <a href="https://www.github.com/hash-luk">Lucas P.</a>
          </small>
        </footer>
      </section>

      <div id="openModal" className="modalDialog">
        <div className="body-modal">
          <a href="#close" title="Fechar" className="closeModal"></a>
          <div className="side-left">
            <img src={headsetImage} className="fone-msg" alt="" />
            <img src={sendIcon} alt="Icone de cara" />
            <h1>Mensagem enviada</h1>
          </div>
          <div className="side-right">
            <p>Obrigado por enviar sua mensagem! Em breve retornaremos o contato!</p>
            <button className="close" onClick={closeModal}>FECHAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
