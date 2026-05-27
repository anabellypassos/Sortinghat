import  { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import harry from './assets/videoIntroharry/harry.mp4';

function App() {
  const mensagens = [
    "Bem-vindo a Hogwarts",
    "O Chapéu Seletor aguarda...",
    "Qual será sua casa?",
    "Coragem, Ambição, Inteligência ou Lealdade?"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mensagens.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [mensagens.length]);

  return (
    <div className="app-container">
      {/* Vídeo de Fundo */}
      <video className="video-intro" autoPlay loop muted playsInline>
        <source src={harry} type="video/mp4" />
      </video>

      {/* Título Harry Potter */}
      <h1 className="title-harry">
        <span>H</span><span>a</span><span>r</span><span>r</span><span>y</span>
        <span>&nbsp;</span>
        <span>P</span><span>o</span><span>t</span><span>t</span><span>e</span><span>r</span>
      </h1>


      {/* Mensagens Variáveis */}
      <div className="message-display">
        <p>{mensagens[index]}</p>
      </div>

      {/* Botão com SVG */}
      <div className="container">
        <div className="center">
          <button className="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Começar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;