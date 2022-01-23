// _______INÍCIO/INTERVALOS
    var timer;
    var setInterval__iniciar = document.getElementById('iniciar__setInterval');
    var clearInterval__parar = document.getElementById('parar__clearInterval');
    var setTimeout__rodar = document.getElementById('rodar__setTimeout');
    var clearTimeout__parar = document.getElementById('clear__clearTimeout');

    setInterval__iniciar.addEventListener('click', iniciar__setinterval);
    clearInterval__parar.addEventListener('click', parar__clearinterval);
    setTimeout__rodar.addEventListener('click', rodar__settimeout);
    clearTimeout__parar.addEventListener('click', parar__settimeout);

    function iniciar__setinterval() {
        timer = setInterval(show__time, 1000);
    }

    function parar__clearinterval() {
        clearInterval(timer);
    }

    function show__time() {
        let date = new Date();
        let hora = date.getHours();
        let minuto = date.getMinutes();
        let segundo = date.getSeconds();
        let milissegundo = date.getMilliseconds();
        let text = hora+':'+minuto+':'+segundo;

        document.getElementById('timer').innerHTML = text;
    }

    function rodar__settimeout() {
        timer = setTimeout(function() {
            alert('Esperou 2 segundos e ai rodou o alert!');
        }, 2000);
    }

    function parar__settimeout() {
        clearTimeout(timer);
    }
// _______FIM/INTERVALOS


// _______INÍCIO/DESCONSTRUÇÃO OBJETO
    let pessoa = {
        nome: 'Fulano',
        sobrenome: 'de Tal',
        idade: '90',
        social: {
            twitter: '@fu',
            instagram: {
                url: '@fulano',
                seguidores: 100
            }
        }
    }

    // Desconstrução é pegar insformações especificas de um objeto e salvar em variavel.

    let nomeAntigo = pessoa.nome; // Forma "antiga"

    // Forma nova (ECMAScript 6)
    let { 
        nome, // Desconstrução.
        sobrenome : pessoa_sobrenoe, // Desconstrução alterando nome da variável.
        idade : pessoa_idade = 'Não existe ou não informada.', // Desconstrução atribuindo valor padrão caso não exista a variável.
        social : { // Desconstrução de objeto dentro de objeto
            instagram : {
                url : instagram,
                seguidores
            }
        }
    } = pessoa;

    console.log(`Desconstruindo objeto: Nome: ${nome}, Sobrenome: ${pessoa_sobrenoe}, Idade: ${pessoa_idade}, Instagram: ${instagram} com ${seguidores} seguidores`);

    // Desconstruindo com função.
    function pega_nome_completo({ nome, sobrenome = 'Silva' }) {

        return `${nome} ${sobrenome}`;
    }

    console.log(pega_nome_completo(pessoa));
// _______FIM/DESCONSTRUÇÃO OBJETO


// _______INÍCIO/DESCONSTRUÇÃO ARRAY
    let info = [
        'Fulano Beltrano',
        'Fulano',
        'Beltrano',
        '@Fulano123'
    ];

    // Desconstrução de array é dada na ordem que o array é criado.
    // Não tem como por exemplo informar um item só e querer que ele não seja o primeiro item.
    // Para pular um item, é só deixar o espaço dele em branco.
    let [ array_nomecompleto, , , array_instagram ] = info;

    console.log(array_nomecompleto, array_instagram);

    // Tem como desconstruir um array enquanto cria o próprio array.
    // Tem como definir valor padrão (maisitem = 90).
    let [ item, sobreitem, maisitem = 90 ] = ['Item 01', 'Item 02'];
    console.log(item, sobreitem, maisitem);

    // Desconstruir  array com função
    function cria__array() {
        let array2 = [1, 2, 3, 4, 5];
        return array2;
    }

    let [a, b , c, d, e] = cria__array();
    console.log(a, b , c, d, e); 
// _______FIM/DESCONSTRUÇÃO ARRAY


