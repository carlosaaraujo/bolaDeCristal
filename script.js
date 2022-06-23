const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");

const respostas = [
	"Certeza!",
	"Não tenho tanta certeza.",
	"É decididamente assim.",
	"Não conte com isso.",
	"Sem dúvidas!",
	"Pergunte novamente mais tarde.",
	"Sim, definitivamente!",
	"Minha resposta é não.",
	"Você pode contar com isso.",
	"Melhor não te dizer agora.",
	"A meu ver, sim.",
	"Minhas fontes dizem não.",
	"Provavelmente.",
	"Não é possível prever agora.",
	"Perspectiva boa.",
	"As perspectivas não são tão boas.",
	"Sim.",
	"Concentre-se e pergunte novamente.",
	"Sinais apontam que sim.",
];

const fazerPergunta = () => {
	// Checar se o input está vazio.
	if (inputPergunta.value == "") {
		alert("Digite a sua pergunta");
		return;
	}
	// Adiciono o atributo disabled a tag button do HTML (evita varias respostas para uma mesma pergunta).
	buttonPerguntar.setAttribute("disabled", true);
	// Guarda na variavel um elemento HTML que contem div com a pergunta feita.
	const pergunta = "<div>" + inputPergunta.value + "</div>";

	// Pega o comprimento do array e usa o floor e random para gerar o indice do array a cada clique no button.
	const totalRespostas = respostas.length;
	const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
	// Adiciona ao HTML a pergunta feita e a resposta recebida.
	elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
	elementoResposta.style.opacity = 1;
	// Após 3 segundos retira a opacidade colocada nos textos e remove o atributo disabled do HTML.
	setTimeout(() => {
		elementoResposta.style.opacity = 0;
		buttonPerguntar.removeAttribute("disabled");
	}, 3000);
};
