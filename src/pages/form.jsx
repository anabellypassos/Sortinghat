import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import colege from "../assets/img/colege.webp";
import hat from "../assets/img/hat.gif";
import "./form.css";

// --- IMPORTS DE IMAGENS ---
import imgSalazar from "../assets/founders/salazar.jpg";
import imgGodric from "../assets/founders/godric.jpg";
import imgHelga from "../assets/founders/helga.jpg";
import imgRowena from "../assets/founders/rowena.jpg";

import elemAgua from "../assets/elements/water.jpg";
import elemFogo from "../assets/elements/fire.jpg";
import elemTerra from "../assets/elements/earth.jpg";
import elemAr from "../assets/elements/air.jpg";

import charDraco from "../assets/chars/draco.jpg";
import charSnape from "../assets/chars/snape.jpg";
import charVoldemort from "../assets/chars/voldemort.jpg";
import charHarry from "../assets/chars/harry.jpg";
import charHermione from "../assets/chars/hermione.jpg";
import charRon from "../assets/chars/ron.jpg";
import charLuna from "../assets/chars/luna.jpg";
import charCho from "../assets/chars/cho.jpg";
import charCedric from "../assets/chars/cedric.jpg";
import charTonks from "../assets/chars/tonks.jpg";
import charNewt from "../assets/chars/newt.jpg";

const Form = () => {
    const { t, i18n } = useTranslation();
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [quizFinalizado, setQuizFinalizado] = useState(false);
    const [pontos, setPontos] = useState({
        Grifinoria: 0, Sonserina: 0, Corvinal: 0, LufaLufa: 0
    });

    const houseAssets = {
        Sonserina: { founderImg: imgSalazar, elementImg: elemAgua, primary: "#2eff7e", secondary: "#aaaaaa", chars: [charDraco, charSnape, charVoldemort] },
        Grifinoria: { founderImg: imgGodric, elementImg: elemFogo, primary: "#ff2a2a", secondary: "#ffca28", chars: [charHarry, charHermione, charRon] },
        Corvinal: { founderImg: imgRowena, elementImg: elemAr, primary: "#3d85ff", secondary: "#946b2d", chars: [charLuna, charCho] },
        LufaLufa: { founderImg: imgHelga, elementImg: elemTerra, primary: "#ffdb3d", secondary: "#372e29", chars: [charCedric, charTonks, charNewt] }
    };

    const perguntas = t('form.quiz', { returnObjects: true }) || [];
    const perguntaAtual = perguntas[indicePergunta];

    const lidarComResposta = (casaEscolhida) => {
        setPontos(prev => ({ ...prev, [casaEscolhida]: prev[casaEscolhida] + 1 }));
        if (indicePergunta + 1 < perguntas.length) {
            setIndicePergunta(indicePergunta + 1);
        } else {
            setQuizFinalizado(true);
        }
    };

    const chaveGanhadora = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);
    const info = t(`house_details.${chaveGanhadora}`, { returnObjects: true });
    const assets = houseAssets[chaveGanhadora];

    // Variantes para animação em cascata (um por um)
    const listVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="main-wrapper">
            <img src={colege} alt="Hogwarts" className="bg-fixed" />

            <div className="container-har-form">
                <div className="language-switcher">
                    <button onClick={() => i18n.changeLanguage('pt')} className={i18n.language.startsWith('pt') ? 'active' : ''}>PT</button>
                    <span className="separator">|</span>
                    <button onClick={() => i18n.changeLanguage('en')} className={i18n.language.startsWith('en') ? 'active' : ''}>EN</button>
                </div>

                <AnimatePresence mode="wait">
                    {!quizFinalizado ? (
                        <motion.div key="quiz" className="quiz-full-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <div className="container-hat">
                                <img src={hat} alt="Chapéu Seletor" className="hat-large" />
                            </div>
                            
                            <div className="container-Form">
                                <h1 className="main-title">{t('form.title')}</h1>
                                <p className="step-text">{t('form.step', { current: indicePergunta + 1, total: perguntas.length })}</p>
                                <h2 className="question-text">{perguntaAtual?.pergunta}</h2>
                                
                                <div className="container-quiz">
                                    {perguntaAtual && Object.keys(perguntaAtual.respostas).map((casa) => (
                                        <button key={casa} className="btn-quiz" onClick={() => lidarComResposta(casa)}>
                                            {perguntaAtual.respostas[casa]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="result" 
                            className="result-mega-layout" 
                            variants={listVariants} initial="hidden" animate="visible"
                        >
                            <div className="magic-glow-bg" style={{ background: assets.primary }}></div>
                            
                            <motion.h1 variants={itemVariants} className="result-title-main">{t('form.result_title')}</motion.h1>
                            <motion.h2 variants={itemVariants} className={`house-name-display ${chaveGanhadora}`} style={{ color: assets.primary }}>
                                {t(`form.houses.${chaveGanhadora}`)}!
                            </motion.h2>

                            {/* Detalhes Principais */}
                            <motion.div variants={itemVariants} className="mega-details-grid">
                                <div className="large-info-card">
                                    <div className="img-frame" style={{ borderColor: assets.primary }}>
                                        <img src={assets.founderImg} alt="Founder" />
                                    </div>
                                    <div className="card-inner-text">
                                        <label>{t('labels.founder')}:</label>
                                        <p>{info.founder}</p>
                                    </div>
                                </div>
                                <div className="large-info-card">
                                    <div className="img-frame" style={{ borderColor: assets.primary }}>
                                        <img src={assets.elementImg} alt="Element" />
                                    </div>
                                    <div className="card-inner-text">
                                        <label>{t('labels.element')}:</label>
                                        <p>{info.element}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Cores e Características */}
                            <motion.div variants={itemVariants} className="traits-display-box">
                                <div className="colors-section">
                                    <div className="color-palette">
                                        <label>{t('labels.colors')}:</label>
                                        <div className="swatch" style={{ backgroundColor: assets.primary }}></div>
                                        <div className="swatch" style={{ backgroundColor: assets.secondary }}></div>
                                        <span>{info.colors}</span>
                                    </div>
                                </div>

                                <h3 className="section-label-title">{t('labels.traits')}:</h3>
                                <div className="traits-pills-container">
                                    {info.traits?.map((trait, i) => (
                                        <span key={i} className="trait-pill-large" style={{ borderColor: assets.primary }}>{trait}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Personagens */}
                            <motion.div variants={itemVariants} className="famous-section-large">
                                <h3 className="section-label-title">{t('labels.famous')}:</h3>
                                <div className="mega-char-grid">
                                    {info.famous?.map((name, i) => (
                                        <div key={i} className="mega-char-card">
                                            <div className="char-img-container" style={{ borderColor: assets.primary }}>
                                                <img src={assets.chars[i]} alt={name} />
                                            </div>
                                            <span className="char-name-label">{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.button 
                                variants={itemVariants}
                                className="restart-btn-large" 
                                style={{ borderColor: assets.primary, color: assets.primary }}
                                onClick={() => window.location.reload()}
                            >
                                {t('form.btn_restart')}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Form;