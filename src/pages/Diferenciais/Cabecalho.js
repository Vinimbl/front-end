import React from 'react'
import logo1 from "../Main/Logo-1.jpeg"
import usuario from "../Main/Usuário.svg"

const Cabecalho = props => {
    return(
        
        <nav class='cabeçalho'>
                <div class='container'>
                    <input type='checkbox' id='menu' class='container__botao'/>
                        <label for='menu' class='container__rotulo'>
                            <span class='cabeçalho__menu-hamburguer container__imagem'></span>
                        </label>
                        <ul class='lista-menu'>
                            <li class='lista-menu__titulo'>Categorias</li>
                            <li class='lista-menu__item'>
                                <a href='index.html' class='lista-menu__link'>Home</a></li>
                            <li class='lista-menu__item'>
                                <a href='contato' class='lista-menu__link'>Contato</a></li>
                            <li class='lista-menu__item'>
                                <a href='usuario.html' class='lista-menu__link'>Usuário</a></li>
                            <li class='lista-menu__item'>
                                <a href='produto' class='lista-menu__link'>Produto</a></li>
                            <li class='lista-menu__item'>
                                <a href='diferenciais.html' class='lista-menu__link'>Diferenciais</a></li>

                        </ul>
                        <img src={logo1} width='100%' height='80' alt='SQuadConect' class='container__imagem'/>

                        </div>

                        <ul class='opções'>
                            <input type='checkbox' id='opções-menu' class='opções__botão'></input>
                            <label for='opções-menu' class='opções__rotulo'>
                                <li class='opções__item'>Categorias</li>
                            </label>

                            <ul class='lista-menu'>
                                <li class='lista-menu__item'>
                                    <a href='index.html' class='lista-menu__link'>Home</a></li>
                                <li class='lista-menu__item'>
                                    <a href='contato' class='lista-menu__link'>Contato</a></li>
                                <li class='lista-menu__item'>
                                    <a href='usuario.html' class='lista-menu__link'>Usuário</a></li>
                                <li class='lista-menu__item'>
                                    <a href='produto' class='lista-menu__link'>Produto</a></li>
                                <li class='lista-menu__item'>
                                    <a href='diferenciais.html' class='lista-menu__link'>Diferenciais</a></li>
                            </ul>

                        </ul>
                        <div class='container'>
                            <a href='usuario.html' class='container__link'>
                                <img src={usuario} alt='Meu Perfil' class='container__imagemm'/></a>
                            <p class='container__texto'>Meu perfil</p>
                        </div>
                    </nav>
                    
    )
}

export default Cabecalho