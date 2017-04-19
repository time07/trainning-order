app.controller("produtoEditController",produtoEditController)

function produtoEditController($scope,$routeParams,$location,produtoService){
        var codigo = $routeParams.code;

        $scope.produto = produtoService.consultarProdutoPorId(codigo);
        $scope.save =
        function save(produto){
            produtoService.alterarProduto(produto);
            $location.path("#/consultaProduto");
        };
};
