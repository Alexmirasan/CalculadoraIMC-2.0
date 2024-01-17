const form = document.querySelector('#form')
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;


    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.querySelector('#valor');
    const resultado = document.querySelector('.resultado');

    let descricao = '';
    let classificacao = '';
    resultado.classList.add('grave');
    
    const classificacoes = {
        Desnutrido: imc < 18.5,
        Ideal: imc >= 18.5 && imc < 25,
        Sobrepeso: imc >= 25 && imc < 30,
        Obeso: imc >= 30 && imc < 40,
        ObesidadeMorbida: imc >= 40
    }
    for (const categoria in classificacoes) {
        if (classificacoes[categoria]) {
            classificacao = categoria;
        }
    }

    if (imc < 18.5) {
        descricao = ' cuidado! Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        descricao = ' você está em um bom peso.';
        resultado.classList.remove('grave');
        resultado.classList.add('normal');
    } else if (imc >= 25 && imc < 30) {
        descricao = ' você está com sobrepeso.';
    } else if (imc >= 30 && imc < 40) {
        descricao = ' você está obeso.';
    } else if (imc >= 40) {
        descricao = ' cuidado! Procure orientação médica breve.';
    }


    document.querySelector('#valor').textContent = imc;
    document.querySelector('#descricao').textContent = nome + descricao;
    document.querySelector('#classificacao').textContent = classificacao;
    
    


});








