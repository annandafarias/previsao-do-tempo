const key = "9eb9575f5fa088d9fffc5f4bdb4873f8"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector('.cidade').innerHTML = "Tempo em "  + dados.name
    document.querySelector('.temp').innerHTML = + Math.floor(dados.main.temp) + 'ºC'
    document.querySelector('.temp-min').innerHTML ="Temp. Min " + Math.floor(dados.main.temp_min) + 'ºC'
    document.querySelector('.temp-max').innerHTML = "Temp. Max " + Math.floor(dados.main.temp_max) + 'ºC'
    document.querySelector('.sensacao').innerHTML = "Sensação " + Math.floor(dados.main.feels_like) + 'ºC'
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

   colocarDadosNaTela(dados)
}


function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}

