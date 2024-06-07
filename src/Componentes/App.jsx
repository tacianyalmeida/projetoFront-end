import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ControleLimpeza from "./ControleDeLimpeza";
import Header from "./Header";
import Footer from "./Footer";
import Contato from "./Contato";
import Login from "../Componentes/Login";
import Home from "../Componentes/Home";
import Planilha from "./Planilha";

const App = () => {
    const [autenticado, setAutenticado] = useState(false);
    const [list, setLista] = useState([]);

    function salvaDados(dado) {
        let novaLista = [...list];
        novaLista.push(dado);
        setLista(novaLista);
    }

  
    const PrivateRoute = ({ verifica}) => {
        return autenticado ? verifica : <Navigate to="/" />;
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={() => setAutenticado(true)} />} />
                <Route path="/home"element={<PrivateRoute><Home /></PrivateRoute>}/>
                <Route path="/controleLimpeza"element={<PrivateRoute><ControleLimpeza saveDados={salvaDados} /></PrivateRoute> }/>
                <Route path="/planilha"element={<PrivateRoute><Planilha list={list} /> </PrivateRoute>}/>
                <Route path="/contato" element={<PrivateRoute><Contato /></PrivateRoute>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;