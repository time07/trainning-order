app.controller('pedidoController', pedidoController);

function pedidoController($scope, $location, pedidoService, produtoService) {
    $scope.pedido;
    $scope.gravarItem = gravarItem;
    $scope.novoProduto;
    $scope.getProduto = getProduto;
    $scope.getTotal = getTotal;
    $scope.calcularDesconto = calcularDesconto;
    var valorTotal;
        
    getListaDePedido();


    function getListaDePedido() {
        $scope.listaDePedido = pedidoService.getListaDePedido();
    }

    function gravarItem(produto) {
        pedidoService.gravarItem(produto);
    }

    function getProduto(codigoProduto) {
        var novo = produtoService.getByCode(codigoProduto);  
        console.log(novo);      
        if (novo !== null){
            $scope.novoProduto = novo;
        }else{
            $scope.novoProduto.descricao = "";
            $scope.novoProduto.preco = "";
        }        
    }

    function getTotal(quantidadeProduto){
        console.log($scope.novoProduto);
        valorTotal = $scope.novoProduto.total = $scope.novoProduto.quantidade * $scope.novoProduto.preco; 
    }

    function calcularDesconto(desconto){
        if (desconto > 0 && desconto <= 100){
            var valorDesconto = (desconto / 100) * $scope.novoProduto.total;
            $scope.novoProduto.total = $scope.novoProduto.total - valorDesconto;
        }else{
            $scope.novoProduto.total = valorTotal;
        }        
    }

}