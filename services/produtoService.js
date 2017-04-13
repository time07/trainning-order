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

  function getByCode(codigoProduto){
    var data;
    for (var p in produtos) {
      if (codigoProduto === produtos[p].codigo) {
        data = produtos[p];
      }
    }
    return data;
  }

  function editarProduto(produto){
    for (var p in produtos) {
      if (produto.codigo === produtos[p].codigo) {
          produtos[p] = angular.copy(produto);
      }
    }
    return true;
  }

  return{
    salvarProduto:salvarProduto,
    excluirProduto:excluirProduto,
    getProduto:getProduto,
    editarProduto:editarProduto,
    getByCode:getByCode
  }

}
