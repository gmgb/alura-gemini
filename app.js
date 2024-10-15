let campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona o evento de escuta para a tecla Enter
campoPesquisa.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    pesquisar();
  }
});

function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p class='nenhum-resultado'>É preciso exigir de cada um o que cada um pode dar.</p>";
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";
  let titulo = "";
  let sinopse = "";
  let tags = "";

  // Itera sobre cada livro na lista de livros
  for (let dado of livros) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    tags = dado.tags.toLowerCase()

    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento div para cada livro, formatando os dados
      resultado += `
      <div class="item-resultado">
        <img data-src="${dado.capa} alt="Capa de ${dado.titulo} class="lazyload">
        <h2>
         <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.sinopse}</p>
        <p class="autor">${dado.autor}</p>
        <p class="ano">${dado.ano}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
  }

  if (!resultado) {
    resultado = "<p class='nenhum-resultado'>Só se vê bem com o coração, o essencial é invisível aos olhos.</p>";
  }

  // Atualiza o conteúdo da seção com os resultados formatados
  section.innerHTML = resultado;
}
