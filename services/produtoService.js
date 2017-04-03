app.factory("produtoService",produtoService);

function produtoService($scope){
  $scope.produtos = [];

  function salvarProduto(produto){
    produtos.push(produto);
    location.path('produto');
  }

  function excluirProduto(produto){
    var index = $scope.produto.indexOf();
    produtos.splice(index,1);
  }

  function getProduto(){
      return produtos;
  }

  return{
    salvarProduto:salvarProduto,
    excluirProduto:excluirProduto,
    getProduto:getProduto
  }

}
