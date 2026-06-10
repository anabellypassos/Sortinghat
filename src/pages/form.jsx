import colege from "../assets/img/colege.webp"
import hat from "../assets/img/hat.gif"
import "./form.css"
const form = () => {

    const A = ["Coragem e determinação", "Corro para ajudá-lo imediatamente.", "Defesa Contra as Artes das Trevas.",
        "Fazer a coisa certa.", "Pela coragem.", "A Floresta Proibida.", "O líder que incentiva todos.", "Leão.", "Superforça.",
        "A coragem supera o medo.", "A Espada de Grifinória.", "Corajoso."
    ]
    const B = ["Ambição e liderança", "Elaboro um plano para resolver a situação.", "Poções.", "Alcançar grandes objetivos",
        "Pelo sucesso.", "As masmorras.", "O estrategista.", "Serpente.", "Controle da mente.", "O sucesso é conquistado.", "A Varinha das Varinhas.",
        "Determinado."
    ]
    const C = ["Inteligência e criatividade", "Analiso as melhores opções antes de agir.", "Feitiços.", "Aprender coisas novas.",
        "Pela inteligência.", "A biblioteca.", "O pesquisador.", "Coruja.", "Teletransporte.", "Conhecimento é poder.", "Um livro com todo o conhecimento do mundo.",
        "Inteligente."
    ]
    const D = ["Lealdade e honestidade.", "Reúno outras pessoas para ajudar.", "Herbologia.", "Ajudar as pessoas.", "Pela bondade.",
        "As cozinhas.", "O que mantém a equipe unida.", "Texugo.", "Cura.", "A união faz a força.", "Um objeto que protegesse quem você ama.",
        "Confiável."]

        
    return (
        <div >
            <img src={colege} alt="College" className="form-container" />
            <div className="container-har-form">
                <div className="container-hat">
                    <img src={hat} alt="Hat" className="hat" />
                </div>
                <div className="container-Form">
                    <h1>Bem vindo ao chapeú seletor</h1>
                    <p>Marque as opções abaixo</p>

                    <h1>Qual qualidade você mais valoriza?</h1>
                    <form className="container-quiz">

                        <button className="btn-quiz">Coragem e determinação</button>
                        <button className="btn-quiz">Ambição e liderança</button>
                        <button className="btn-quiz">Inteligência e criatividade</button>
                        <button className="btn-quiz">Lealdade e honestidade</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default form
