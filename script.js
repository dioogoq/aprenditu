// Criação do menu
const menuHTML = `
 <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="menu-icon">&#9776; Menu</label>
    <nav class="menu">
        <ul>
            <li>
                <input type="checkbox" id="home-toggle" class="submenu-toggle">
                <label for="home-toggle" class="submenu-label"><a href="index.html">Home</a></label>
               
            </li>
            <li>
                <input type="checkbox" id="repertorios-toggle" class="submenu-toggle">
                <label for="repertorios-toggle" class="submenu-label">Repertórios</label>
                <ul class="submenu">
                    <li><a href="rep.html">O que é e os tipos</a></li>
                    <li><a href="reperh.html">Repertório histórico</a></li>
                    <li><a href="reperf.html">Repertório Filosófico</a></li>
                    <li><a href="reperl.html">Repertório Literário</a></li>
                    <li><a href="repercine.html">Repertório Cinematográfico</a></li>
                    <li><a href="reperm.html">Repertório Musical</a></li>
                </ul>
            </li>
            <li>
                <input type="checkbox" id="estruturas-toggle" class="submenu-toggle">
                <label for="estruturas-toggle" class="submenu-label">Estruturas</label>
                <ul class="submenu">
                    <li><a href="estrub.html">Estrutura Basica</a></li>
                    <li><a href="modelos.html">Modelos Prontos</a></li>
                    <li><a href="compet.html">Competências do Enem</a></li>
                    <li><a href="dicas.html">Dicas Extras</a></li>
                </ul>
            </li>
            <li>
                <input type="checkbox" id="conectivos-toggle" class="submenu-toggle">
                <label for="conectivos-toggle" class="submenu-label">Conectivos</label>
                <ul class="submenu">
                    <li><a href="conec.html">Tipos de Conectivos</a></li>
                </ul>
            </li>
            <li>
                <input type="checkbox" id="temas-toggle" class="submenu-toggle">
                <label for="temas-toggle" class="submenu-label">Temas</label>
                <ul class="submenu">
                    <li><a href="temas.html">Temas e redação</a></li>
                </ul>
            </li>
        </ul>
    </nav>
`;

// Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos <li> dentro do menu
    const listItems = document.querySelectorAll("nav.menu li");

    // Itera sobre cada <li> para adicionar eventos
    listItems.forEach(li => {
        li.addEventListener("click", function () {
            // Armazena o texto do <li> em uma variável
            const itemText = li.innerText.trim();

            // Caso haja um link dentro do <li>, captura o href
            const linkElement = li.querySelector("a");
            const itemHref = linkElement ? linkElement.getAttribute("href") : "Sem link";

            // Exibe os valores capturados
            console.log("Texto do <li> clicado:", itemText);
            console.log("Link do <li> clicado:", itemHref);

            // Exemplo de ações com base nos valores armazenados
            if (itemText === "Repertório Histórico") {
                console.log("Você escolheu acessar o Repertório Histórico!");
                // Você pode armazenar ou processar esse dado
            } else if (itemText === "Estruturas Básicas") {
                console.log("Você escolheu acessar Estruturas Básicas!");
            }
        });
    });
});



function typeWriter(textElement, cursorElement, text, callback) {
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            cursorElement.style.left = `${textElement.offsetWidth}px`
            setTimeout(type, 150);
        } else {
            cursorElement.style.display = 'none'; // Esconde o cursor no final da animação
            setTimeout(() => {
                textElement.parentElement.style.display = 'none'; // Esconde todo o contêiner no final da animação
                if (callback) callback();
            }, 2900); // Delay de 1 segundo antes de desaparecer
        }
    }

    type();
}

// Use esta função para iniciar a animação de escrita
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.text');
    const cursorElement = document.querySelector('.cursor');
    const text = "Aprenditu";

    typeWriter(textElement, cursorElement, text, () => {
        console.log("Animação concluída!");
    });
});


// Adicione um evento de clique para fechar o dropdown ao clicar fora dele
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});


// // Função para criar o cookie
// function setCookie(nome, valor) {
//     document.cookie = nome + "=" + valor + "; path=/";
//   }

//   // Função para ler o cookie
//   function getCookie(nome) {
//     let nomeCookie = nome + "=";
//     let cookiesArray = document.cookie.split(';');

//     for (let i = 0; i < cookiesArray.length; i++) {
//       let cookie = cookiesArray[i].trim();
//       if (cookie.indexOf(nomeCookie) === 0) {
//         return cookie.substring(nomeCookie.length);
//       }
//     }
//     return null;  // Se o cookie não for encontrado
//   }

//   // Verifica se já existe um cookie e exibe a saudação ao carregar a página
//   window.onload = function() {
//     let username = getCookie("username");
//     if (username) {
//       // Exibe um alerta com a saudação personalizada
//       alert("Bem-vindo de volta, " + username + "!");
//     } else {
//       // Se o cookie não existir, solicita o nome ao usuário
//       let nome = prompt("Digite seu nome:");

//       if (nome) {
//         // Salva o nome no cookie
//         setCookie("username", nome);
//         // Exibe o nome em um alerta
//         alert("Nome salvo: " + nome);
//       }
//     }
//   };
  
document.addEventListener('DOMContentLoaded', function () {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
});
