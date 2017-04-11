var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html"
    })
    .when('/produtos/cadastro', {
        templateUrl:"templates/produto-cadastro.html",
        controller:"produtoController"
    })
    .when('/produtos/:code/edicao', {
        templateUrl:"templates/produto-edicao.html",
        controller:"produtoController"
    })
    .when('/produtos/listagem', {
        templateUrl:"templates/produto-listagem.html",
        controller:"produtoController"
    })
    .when('/pedidos/cadastro', {
        templateUrl:"templates/pedido-cadastro.html",
        controller:"pedidoController"
    })
    .when('/pedidos/listagem', {
        templateUrl:"templates/pedido-listagem.html",
        controller:"pedidoController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

