app.controller("produtoEditarCtrl",produtoEditarCtrl);

function produtoEditarCtrl(produtoService,$scope,$location,$routeParams){
  //$routeParams vai pegar o produto/{{x.codigo}}/editar e mandar pra outra rota(página)
  var codigoProduto = $routeParams.codigo;
  $scope.produto = {};

  function salvarProduto(produto){
      var result = produtoService.editarProduto(produto);
      console.log(result);
      $location.path('produto');
  }

  function getProduto(codigoProduto){

    $scope.produto = produtoService.getByCode(codigoProduto);

  }

  getProduto(codigoProduto);
  $scope.salvarProduto = salvarProduto;
}
