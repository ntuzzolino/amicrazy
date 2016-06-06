(function(){
    angular.module('app').component('coverComponent', {
        templateUrl: 'app/components/cover/cover.html',
        controller: CoverController
    })
    function CoverController(){
        var cc = this;
        cc.test = "hi from cover"
        
    }
}())

