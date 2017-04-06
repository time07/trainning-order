var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })
    .when('/produto', {
        templateUrl:"templates/produto.html",
        controller:"produtoController"
    })
    .when('/produto/cadastro', {
        templateUrl:"templates/produto-form.html",
        controller:"produtoController"
    })
    .otherwise({
        redirectTo: "/"
    });

});

