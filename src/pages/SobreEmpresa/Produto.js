import React from 'react';

const   Produto = props =>{
    return(
        <>
        <section class="banner">
        <h2 class="banner__titulo">A evolução digital tem que ser igualitária e constante.
            Venha fazer o novo conosco.</h2>
        <input type="search" class="banner__pesquisa" placeholder="Qual será sua próxima leitura?"/>
    </section>

   
    <section>
        <h2 class="carrossel__titulo">Nosso APP.</h2>
        <div class="carrossel__container">
            <div class="swiper">

                <div class="swiper-pagination"></div>                        
                      
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>          
            
                </div>

                    <div class="card1">

                        <div class="card__descrição1">
                            <h2 class="card__h2">Nosso Projeto</h2>
                            <p>O projeto consiste em um aplicativo para todas as plataformas, cuja função do mesmo serviria para ajudar pessoas com deficiência auditiva. O programa irá fazer uma tradução de vídeos do youtube, streams, para libras mostrando em simultâneo uma mãozinha no canto da tela. Um sério problema seria  que o aplicativo fosse pesado, travado nos PCs do usuário que, a solução desse problema, seria tentar fazer um aplicativo leve com poucos visuais, mas focado no rendimento, pois a pessoa que instalar esse programa vai querer a praticidade e o conforto de olhar as mãozinhas.</p>
                     
                        </div> 
                    </div>  
                        <div class="video">
                            <iframe class="video1"  width="100%" height="320" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>

                       
                    
                    
            
        </div>
</section> 
</>
    );
}

export default Produto;