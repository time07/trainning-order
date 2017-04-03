app.controller("produtoController",produtoController);

function produtoController(produtoService,$scope,$location){
  $scope.produto = {};

  function salvarProduto(produto){
    produtoService.salvarProduto(produto);
    $location.path('produto');
  }

  function excluirProduto(produto){
    produtoService.excluirProduto(produto);
  }

  function listarProdutos(){
    var produtos = produtoService.getProduto();
    $scope.produtos = produtos;
  }

  $scope.salvarProduto = salvarProduto;
  $scope.excluirProduto = excluirProduto;

  listarProdutos();
}
