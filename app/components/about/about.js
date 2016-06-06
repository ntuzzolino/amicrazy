(function(){
    angular.module('app').component('aboutComponent', {
        templateUrl: 'app/components/about/about.html',
        controller: aboutController
    })
    function aboutController(){
        var cc = this;
        cc.test = "hi from about"
        
    }
}())
