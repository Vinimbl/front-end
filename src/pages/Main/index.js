import React from 'react';
import fundo2 from "../Main/fundo2.jpg"



function Main() {
    return (
        <div>            

                    <section class='banner'>
                        <h2 class='banner__titulo'>A evolução digital tem que ser igualitária e constante.
                            Venha fazer o novo conosco.</h2>
                        <input type='search' class='banner__pesquisa' placeholder='Qual será sua próxima leitura?'/>
                    </section>


                    <div class='card__background'>
                        <div class='card__descrição'>
                            <h2>Transforme o seu digital. Agora.</h2>
                            <p>A SQuadConect é campeã no conceito de evolução digital.</p>
                            <p>Combinamos design, desenvolvimento, novas tecnologias e tudo isso com a sua cara. Entregamos soluções rápidas que impulsionam o negócio dos nossos clientes, com grandes resultados e sem demora.</p>
                            <p>Temos um time totalmente eficiente, e o principal pensamos sempre na igualdade para formarmos nossas equipes.</p>
                            <img src={fundo2} alt='Transformação digital' class='descrição__imagem'/>
                        </div>

                    </div>                      

                
                
        </div>
    );

}

export default Main;