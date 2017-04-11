app.controller("produtoController", produtoController);

function produtoController($scope, $location, produtoService, $routeParams) {    
    var codigo = $routeParams.code;
    //$scope.title = "Editar";
    $scope.produto = {};

    function save(produto) {
        if(!produto.codigo || !produto.desc || !produto.preco) {
            alert("Todos os campos devem ser preenchidos.")
            
        } else {
            produtoService.saveProduto(produto);
            $location.path('/produtos/listagem');
        }
        
    }

    function list() {
        var produtos = produtoService.getProdutos();
        console.log(produtos);
        $scope.produtos = produtos;
    }

    function getByCode(codigo) {
        $scope.produto = produtoService.getByCode(codigo);                
    }

    function edit(produto) {
        produtoService.edit(produto);
        $location.path('/produtos/listagem');
    }

    function remove(index) {
        produtoService.remove(index);
    }

    list();
    getByCode(codigo);
    

    $scope.save = save;
    $scope.edit = edit;
    $scope.remove = remove;

}