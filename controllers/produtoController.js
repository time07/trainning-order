app.controller("produtoController",produtoController);

function produtoController(produtoService,$scope,$location){
  $scope.produto = {};

  function salvarProduto(produto){
    produtoService.salvarProduto(produto);
  }

  function excluirProduto(produto){
    produtoService.excluirProduto(produto);
  }

  function listarProdutos(){
    produtoService.getProduto();
  }

  $scope.salvarProduto = salvarProduto;
  $scope.excluirProduto = excluirProduto;

  listarProdutos();
}
