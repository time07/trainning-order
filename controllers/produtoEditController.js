app.controller("produtoEditController",produtoEditController)

function produtoEditController($scope,$location,produtoService){
        var codigo = $routeParams.code;

        $scope.produto = produtoService.consultarProdutoPorId(codigo);
        $scope.save =
        function save(produto){
            produtoService.manterProduto(produto);
            $location.path("#/consultaProduto");
        };
};
