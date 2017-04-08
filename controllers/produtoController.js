app.controller("produtoController", produtoController);

function produtoController($scope, $location, produtoService, $routeParams) {    
    $scope.produto = {};
    var id = $routeParams.id;

    function save(produto) {
        produtoService.saveProduto(produto);
        $location.path('/produtos/listagem');
    }

    function list() {
        var produtos = produtoService.getProdutos();
        console.log(produtos);
        $scope.produtos = produtos;
    }

    function edit(idProduto) {
        $scope.produto = produtoService.getProduto(idProduto);  
        console.log($scope.produto);      
        //produtoService.saveProduto($scope.produto);        
    }

    function remove(idProduto) {
        produtoService.remove(idProduto);
    }

    list();
    //edit(id);
    

    $scope.save = save;
    $scope.edit = edit;
    $scope.remove = remove;

}