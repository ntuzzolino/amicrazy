(function(){
    angular.module('app').component('homeComponent', {
        templateUrl: 'app/components/home/home.html',
        controller: HomeController
    })
    function HomeController(){
        var hc = this;
        hc.test = "hi from home"
    }
}())