
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate para navegação programática
import '../../src/index.css';
import { DivCadastro, InputSenha, Titulo, Divtexto, P, TxtLogin, Label, InputCPF, Button, PrimeiraDiv, TerceiraDiv, DivEngloba } from '../Style/Login';

const Login = ({ onLoginSuccess }) => { // Recebe a função de sucesso de login como prop
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (cpf === '123456789' && senha === 'password') {
            onLoginSuccess(); // Atualiza o estado de autenticação no App
            navigate('/home'); // Redireciona para /home após o login bem-sucedido
        } else {
            alert('CPF ou Senha incorretos');
        }
    };

    return (
        <>
            <PrimeiraDiv></PrimeiraDiv>
            <Divtexto>
                <Titulo>Control-Clean</Titulo>
                <DivEngloba>
                    <P>Plataforma de apoio aos colaboradores na efetuação de suas tarefas.</P>
                </DivEngloba>
            </Divtexto>

            <DivCadastro>
                <TxtLogin>Login</TxtLogin>
                <Label htmlFor="cpf">CPF</Label>
                <InputCPF
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Label htmlFor="senha">SENHA</Label>
                <InputSenha
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Button onClick={handleLogin}>ENTRAR</Button>
            </DivCadastro>
            <TerceiraDiv></TerceiraDiv>
        </>
    );
};

export default Login;