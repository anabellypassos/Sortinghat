import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import Form from '../pages/form.jsx'; 

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    );
}

export default Rotas;