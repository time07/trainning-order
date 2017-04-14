app.controller("produtoController",produtoController)

function produtoEditController($scope,$location,produtoService){
        var codigo = $routeParams.code;        
        $scope.save =
        function save(produto){
            produtoService.manterProduto(produto);
            console.log("srrsrsdr");            
            $location.path("#");
        };
        $scope.consultarProdutos = 
        function consultarProdutoByID(){
            console.log("consulta Produtos");
            var produto = produtoService.consultarProdutoByID();            
            $scope.item = produto;
        }   
}; 