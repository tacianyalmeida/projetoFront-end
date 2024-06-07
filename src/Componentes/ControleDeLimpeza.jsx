import { Button, DivCardMaior, DivImg, DivPrincipal, H1, Img, Input, InputComentario, Label } from "../Style/ControleDeLimpeza"
import Img1 from '../../Image/carrinho-limpeza.png'
import React from "react"

const App1 = ({saveDados}) => {

    const[nome, setNome] = React.useState('')
    const[hora, setHora] = React.useState('')
    const[sala, setSala] = React.useState('')
    const[data, setData] = React.useState('')

    function handleSaveInfo () {
        const dados = {
           nome,
           hora, 
           sala, 
           data 
        }
        console.log(dados)
        saveDados(dados)
    }

    return(
        <DivPrincipal>
            <DivCardMaior>
                <H1>Controle de Limpeza</H1>
                <Input type="text" placeholder="Nome" value={nome}
                onChange={event => setNome(event.target.value)}/>
                <Input type="text" placeholder="Horário da limpeza"
                 value={hora}
                 onChange={event => setHora(event.target.value)}/>
                <Input type="text" placeholder="Número da sala"
                 value={sala}
                 onChange={event => setSala(event.target.value)}/>
                <Input type="text" placeholder="Data"
                 value={data}
                 onChange={event => setData(event.target.value)}/>
                <Label>Deixe aqui seu comentário</Label>
                <InputComentario type="text"/>
                <Button onClick={handleSaveInfo}>Enviar</Button>
            </DivCardMaior>
            <DivImg>
                <Img src={Img1}/>
            </DivImg>
        </DivPrincipal>
    )
}

export default App1;