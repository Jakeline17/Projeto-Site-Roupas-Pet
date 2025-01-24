import React from 'react'
import './styles.css'

export const Footer = () => {
  return (
    <div className='Footer-container'>
     
        <p><span className="footer-span">Endereço : </span> Rua XV de Novembro, 1001</p>
        <p><span className="footer-span">WhatsApp : </span> 41 99999-9999</p>
        <p><span className="footer-span">Email : </span> Loja@gmail.com</p>

        <div className="aviso">
        <p> "Este é um projeto fictício criado para fins educacionais.
           Nenhum produto está disponível para compra."
        </p>   
        </div>
    </div>
  )
}

export default Footer
