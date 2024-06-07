import { DivLink, H1, Nav } from "../Style/Header";
import {Link }from "react-router-dom"
import React from "react";


const Header = ()=>{
    return(
        <Nav style={{backgroundColor: '#152473'}}>
           <H1>CONTROL-CLEAN</H1>
            <DivLink>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/ControleLimpeza'>Controle/Limpeza</Link>
            <Link className='link' to='/Planilha'>Planilha</Link>
            <Link className='link' to='/FaleCononsco'>Contato</Link>
            </DivLink>
        </Nav>
        )
    }
    export default Header; 