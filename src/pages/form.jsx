import colege from "../assets/img/colege.webp"
import hat from "../assets/img/hat.gif"
import "./form.css"
const form = () => {
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
                    
                </div>
            </div>

        </div>
    )
}

export default form
