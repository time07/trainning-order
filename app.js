var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
  /*  .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })*/
    .when('/produto',{
      templateUrl:"templates/produto.html",
      controller:"produtoController"
    })
    .when('/produto/produtoForm',{
      templateUrl:"templates/produto-form.html",
      controller:"produtoController"
    })
    .when('/produto/:codigo/editar',{
      templateUrl:"templates/produto-form.html",
      controller:"produtoEditarCtrl"
    })
    .when('/pedido',{
      templateUrl:"templates/pedido.html",
      controller:"pedidoController"
    })
    .when('/pedido/pedidoForm',{
      templateUrl:"templates/pedido-form.html",
      controller:"pedidoController"
    })
    .otherwise({
        redirectTo: "/"
    });
});


app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
