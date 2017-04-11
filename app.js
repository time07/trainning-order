var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })
    .when('/cadastroProduto', {
        templateUrl:"templates/cadastroProduto.html",
        controller:"produtoController"
    })
    .when('/efetuarPedido', {
        templateUrl:"templates/efetuarPedido.html",
        controller:"pedidoController"
    })
    .when('/consultaProduto', {
        templateUrl:"templates/consultaProduto.html",
        controller:"produtoController"
    })
    .when('/consultaPedido', {
        templateUrl:"templates/consultaPedido.html",
        controller:"pedidoController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

