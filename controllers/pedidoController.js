app.controller('pedidoController', pedidoController);

function pedidoController($scope, $location, pedidoService, produtoService) {
    $scope.pedido = {};
    $scope.pedido.itens = [];
    $scope.gravarItem = gravarItem;
    $scope.novoProduto;
    $scope.getProduto = getProduto;
    $scope.getTotal = getTotal;
    $scope.calcularDesconto = calcularDesconto;
    $scope.gravarPedido = gravarPedido;

    var valorTotal;

    getListaDePedido();

    function getListaDePedido() {
        $scope.listaDePedido = pedidoService.getListaDePedido();
    }

    function gravarItem(produto) {
        $scope.pedido.itens.push(produto);
        $scope.novoProduto = {};
        updateTotal();
    }

    function getProduto(codigoProduto) {
        var novo = produtoService.getByCode(codigoProduto);
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
        $scope.novoProduto.total = valorTotal;
        if (desconto > 0 && desconto <= 100){
            var valorDesconto = (desconto / 100) * $scope.novoProduto.total;
            $scope.novoProduto.total = $scope.novoProduto.total - valorDesconto;
        }
    }

    function updateTotal(){
      var total = 0;
      for (var x in $scope.pedido.itens) {
        total += $scope.pedido.itens[x].total;
      }
      $scope.pedido.total = total;
    }

    function gravarPedido(){
        pedidoService.gravarPedido($scope.pedido);
        $location.path("pedido");
    }

}
