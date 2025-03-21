 function gerarDiadaSemana(){
    const diaSemana = new Date().toLocaleDateString("pt-BR", 
    {weekday:"long" }); // pega o dia da semana

    const data = new Date().toLocaleDateString("pt-BR") // aqui eu pego a data no padrao brasileiro
    const Horario = new Date().toLocaleTimeString("pt-BR", {hour:"numeric", minute:"numeric"}); // aqui eu pego a hora e minuto no padrao brasileiro

    const dataCompleta = `${diaSemana} (${data}) às ${Horario} `; // aqui eu junto o dia da semana com a data e a hora
    return dataCompleta;
}

export default gerarDiadaSemana; // exporta a funcao gerarDiadaSemana
