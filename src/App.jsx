import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './App.css';
import './index.css';
import harry from './assets/videoIntroharry/harry.mp4';

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); 

 const mensagens = [
  t('intro.messages1'),
  t('intro.messages2'),
  t('intro.messages3'),
  t('intro.messages4'),
  t('intro.messages5')
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mensagens.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [mensagens.length]);

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app-container">
      <div className="language-switcher">
        <button 
          className={i18n.language === 'pt' ? 'active' : ''} 
          onClick={() => changeLanguage('pt')}
        >
          PT
        </button>
        <span>|</span>
        <button 
          className={i18n.language === 'en' ? 'active' : ''} 
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      </div>

      <audio src="/music/musicIntro.mp3" autoPlay loop />
      <video className="video-intro" autoPlay loop muted playsInline>
        <source src={harry} type="video/mp4" />
      </video>

      <h1 className="title-harry">
        <span>H</span><span>a</span><span>r</span><span>r</span><span>y</span>
        <span>&nbsp;</span>
        <span>P</span><span>o</span><span>t</span><span>t</span><span>e</span><span>r</span>
      </h1>

      <div className="message-display">
     
        <p > {mensagens[index]}</p>
      </div>

      <div className="container">
        <div className="center">
          <button className="btn" onClick={() => navigate('/form')}>
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>{t('intro.button')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;