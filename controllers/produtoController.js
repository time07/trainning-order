app.controller("produtoController",produtoController)

function produtoController($scope,produtoService){
        $scope.produto = {};
        $scope.save =
        function save(produto){
            produtoService.manterProduto(produto);
        };
        $scope.consultarProdutos = 
        function consultarProdutos(){
            console.log("consulta Produtos");
            var produtos = produtoService.consultarProduto();;
            $scope.itens = produtos;   
            console.log(produtos)
        };

        
        
}