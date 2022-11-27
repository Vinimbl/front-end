import React from 'react'
import logo1 from "../Main/Logo-1.jpeg"

const Rodape = props => {
    return(
        <footer class='rodapé' >
                <img class='rodapé__logo' src={logo1}/>
                <h2 className='rodapé__titulo'>&copy; Copyright SQuadConect - 2022</h2>
        </footer>
    )
}

export default Rodape