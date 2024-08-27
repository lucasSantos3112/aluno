let produtos = [];

function adicionarProduto(nome, preco, quantidade) {
  if (!nome || !preco || !quantidade) {
    return "Erro: Todos os campos devem ser preenchidos.";
  }
  if (preco <= 0) {
    return "Erro: O preço deve ser maior que 0.";
  }
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    return "Erro: A quantidade deve ser um número inteiro positivo.";
  }
  produtos.push({ nome, preco, quantidade });
  return `Produto adicionado com sucesso: ${nome} - R$ ${preco} - Quantidade: ${quantidade}`;
}

function removerProduto(nome) {
  const index = produtos.findIndex((produto) => produto.nome === nome);
  if (index === -1) {
    return `Erro: Produto não encontrado - ${nome}`;
  }
  produtos.splice(index, 1);
  return `Produto removido com sucesso: ${nome}`;
}

function listarProdutos() {
  console.log("Produtos Cadastrados:");
  produtos.forEach((produto) => {
    console.log(`Nome: ${produto.nome} - Preço: R$ ${produto.preco} - Quantidade: ${produto.quantidade}`);
  });
}
function pegarProduto(nome) {
  const produto = produtos.find((produto) => produto.nome === nome);
  if (!produto) {
    return `Erro: Produto não encontrado - ${nome}`;
  }
  console.log(`Produto encontrado: ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade}`);
  return produto;
}

adicionarProduto("Produto 1", 10.99, 5);
adicionarProduto("Produto 2", 20.99, 10);
listarProdutos();
removerProduto("Produto 1");
listarProdutos();
pegarProduto("Produto 2");