app.controller("produtoController",produtoController)

function produtoController($scope,$location,produtoService){
        $scope.produto = {};
        $scope.item = {};
        $scope.listaDeItens= [];
        $scope.save =
        function save(produto){
            produtoService.manterProduto(produto);
            console.log("srrsrsdr");
            //$scope.produto = new produto;
            $location.path("#");
        };
        $scope.consultarProdutos =
        function consultarProdutos(){
            var produtos = produtoService.consultarProduto();
            console.log(produtos);
            $scope.listaDeItens = produtos;
        };
        $scope.remover =
        function remover(index){
          produtoService.remover(index);
        };
};
