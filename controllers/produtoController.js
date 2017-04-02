app.controller("produtoController", produtoController);

function produtoController($scope, $location, produtoService) {    
    $scope.produto = {};

    function salvar(produto) {
        produtoService.saveProduto(produto);
        $location.path('/produtos/listagem');
    }

    function listar() {
        var produtos = produtoService.getProdutos();
        console.log(produtos);
        $scope.produtos = produtos;
    }

    listar();

    $scope.salvar = salvar;

}