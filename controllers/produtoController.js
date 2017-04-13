app.controller("produtoController",produtoController)

function produtoController($scope,$location,produtoService){
        $scope.produto = {};
        $scope.item = {};
        $scope.save =
        function save(produto){
            produtoService.manterProduto(produto);
            console.log("srrsrsdr");
            $location.path("cadastroProduto");
        };
        $scope.consultarProdutos = 
        function consultarProdutos(){
            console.log("consulta Produtos");
            var produtos = produtoService.consultarProduto();
            console.log(produtos);
            $scope.listaDeItens = produtos;
        }   
}; 