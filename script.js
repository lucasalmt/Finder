// Adiciona um listener para o botão de busca
document.getElementById('botao-buscar').addEventListener('click', function() {
    const produtoBuscado = document.getElementById('campo-busca').value;
    buscarProdutos(produtoBuscado);
});

// Adiciona listeners para os botões de categoria
const botoesCategoria = document.querySelectorAll('.botao-categoria');
botoesCategoria.forEach(botao => {
    botao.addEventListener('click', function() {
        const categoria = botao.getAttribute('data-categoria');
        buscarProdutos(categoria);
    });
});

// Função para buscar produtos
function buscarProdutos(categoria) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;

    fetch(url)
        .then(response => response.json())
        .then(data => exibirResultados(data.results))
        .catch(error => console.error('Erro ao buscar produtos:', error));
}

// Função para exibir resultados dos produtos
function exibirResultados(produtos) {
    const gridProdutos = document.getElementById('grid-produtos');
    gridProdutos.innerHTML = ''; // Limpa os resultados anteriores

    if (produtos.length === 0) {
        gridProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.className = 'produto';
        divProduto.innerHTML = `
            <img src="${produto.thumbnail}" alt="${produto.title}" class="imagem-produto">
            <h3>${produto.title}</h3>
            <p>Preço: R$ ${produto.price.toFixed(2)}</p>
            <p><a href="${produto.permalink}" target="_blank">Comprar</a></p>
        `;
        gridProdutos.appendChild(divProduto);
    });
}


