import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Img/Logo.png';



export default function Criar_Conta() {
  return (
    <div className='pai'>
        
    <div className='card_R'>
    <img src= { Logo}  className = 'img'/>
    <div className='textos'>
    <h1 >SA</h1>
    <h3 className='text1' >Sistema de agendamento</h3>
    <h2 >Recuperar Senha</h2>
    <h5 >Para Recuperar sua senha, preencha o<br></br>campo a baixo com seu e-mail cadastrado.</h5>
    </div>
    
    <input className='Email_R' type="email" placeholder="E-MAIL" ></input>
  
  <br></br>
    
  <button className='Button_R'>
        <Link to="/Codigo_Senha">
            <h2  >
              Enviar
            </h2>
        </Link>
        </button> 
        
    </div>
</div>
  )
}
