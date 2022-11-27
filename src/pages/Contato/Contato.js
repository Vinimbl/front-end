import React from 'react'
import logo1 from "../Main/Logo-1.jpeg"

const Contato = props => {
    return(
        <div class='contato'>
    <form name="fale conosco"/>
        <h2>Entre em contato</h2>
    
        <label for="nomeid">Nome e sobrenome</label>
        <input type="text" id="nomeid" class="input-padrao" required placeholder="Nome e sobrenome" name="nome"/>
    
        <label for="foneid">Telefone</label>
        <input type="tel" id="foneid" class="input-padrao" required placeholder="(XX) XXXXX-XXXX" name="fone"/>
    
        <label for="emailid">Email</label>
        <input type="email" id="emailid" class="input-padrao" required placeholder="seuemail@domínio.com" name="email"/>
    
        <label for="mensagem">Mensagem</label>
        <textarea cols="30" rows="10" id="mensagem" class="input-padrao" required placeholder="Deixe sua opnião"></textarea>
    
        

    <fieldset>
        <legend>Como prefere o nosso contato?</legend>  
        <label for="radio-email"><input type="radio" name="contato" value="email" id="radio-email"/>Email</label>
        

        <label for="radio-telefone"><input type="radio" name="contato" value="telefone" id="radio-telefone"/>Telefone</label>
        

        <label for="radio-whatsapp"><input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" checked/>Whatsapp</label>
    </fieldset>

    <fieldset>
        <legend>Qual horário prefere ser atendido?</legend>
        <select>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Noite</option>
        </select>
    </fieldset>

    <label class="checkbox"><input type="checkbox" checked/>Gostaria de receber nossas novidades</label>

    <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" required/>

    <table >
        <thead>
            <tr>                        
                <td>Dia</td>
                <td>Horário</td>
            </tr> 
        </thead> 
        <tbody>
            <tr>
                <td>Segunda</td>
                <td>8h ~ 20h</td>
            </tr>                
            <tr>
                <td>Quarta</td>
                <td>8h ~ 20h</td>
            </tr>
            <tr>
                <td>Sexta</td>
                <td>8h ~ 20h</td>
            </tr>                      
        </tbody>  
    </table>
</div>
    )
}

export default Contato