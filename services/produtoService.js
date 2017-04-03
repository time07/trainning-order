app.factory("produtoService",produtoService);

function produtoService(){
  var produtos = [];

  function salvarProduto(produto){
    produtos.push(produto);
  }

  function excluirProduto(produto){
    var index = produtos.indexOf(produto);
    produtos.splice(index,1);
  }

  function getProduto(){
      return produtos;
  }

  function editarProduto(produto){

  }

  return{
    salvarProduto:salvarProduto,
    excluirProduto:excluirProduto,
    getProduto:getProduto,
    editarProduto:editarProduto
  }

}
