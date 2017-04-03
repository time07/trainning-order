app.controller("produtoController", produtoController);

function produtoController(produtoService, $scope, $location){
    $scope.produto = {};

    function salvar(produto) {
        produtoService.saveProduto(produto);
        $location.path('produto');
    }

    function listar() {
        var produtos = produtoService.getProdutos();
        console.log(produtos);
        $scope.listaDeProdutos = produtos;
    }

    listar();

    $scope.salvar = salvar;

}