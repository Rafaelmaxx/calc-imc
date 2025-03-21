
const form = document.querySelector(' #formulario');

form.addEventListener('submit', function (evento) {  // aqui vai exibir todos os eventos apos clicar no botao
    evento.preventDefault(); // impede que a pagina carregue
    const inputPeso = evento.target.querySelector('#peso') //aqui chama o peso
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value);  // aqui define que ele tem que ser um numero e atribui o valor 
    const altura = Number(inputAltura.value);      //                      que o usuario colocoar nele

    // se o usuario digitar uma letra inves de um numero, vai retornar 'false', para nao acontecer isso:
    if (!peso) {
        setResultado('Peso inválido', false);
        return; //return adicionado porque o codigo para de ler quando chega nele
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return; 
    }

    const imc = getImc(peso, altura);      //getImc é onde vamos criar o calculo do imc para exibir na const imc
    const nivelImc = getNivelImc (imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];  // nao precisa de else if pq o return ja para a execução quando chega acha um verdadeiro                                         
    if (imc >= 34.9) return nivel[4];        
    if (imc >= 29.9) return nivel[3];  // não precisa usar as chaves nem pular a linha se o if for muito curto, como nesse caso
    if (imc >= 24.9) return nivel[2];               
    if (imc >= 18.5) return nivel[1];         
    if (imc < 18.5) return nivel[0];
    
}

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}
    
    
    























// function imc () {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado')

//     const pessoas = []        
//     function recebeEventoForm (evento){
//         evento.preventDefault();
//         const nome = form.querySelector('.nome');
//         const sobrenome = form.querySelector('.sobrenome');
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         pessoas.push({
//             nome: nome.value, 
//             sobrenome: sobrenome.value,
//             peso: peso.value, 
//             altura: altura.value
//         });
//         console.log(pessoas);

//         resultado.innerHTML += `<p><br>${nome.value} ${sobrenome.value}</br> <br>${peso.value}</br> <br>${altura.value}</br></p>`;
//     }

//     form.addEventListener('submit', recebeEventoForm);

// }

// imc()