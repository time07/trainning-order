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
    .when('/produto/editar',{
      templateUrl:"templates/produtoEditar.html",
      controller:"produtoController"
    })
    .when('/pedido',{
      templateUrl:"templates/pedido.html",
      controller:"pedidoController"
    })
    .otherwise({
        redirectTo: "/"
    });
});


app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
