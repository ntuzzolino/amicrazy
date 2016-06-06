(function(){
    angular.module('app').component('skillsComponent', {
        templateUrl: 'app/components/skills/skills.html',
        controller: SkillsController
    })
    function SkillsController(){
        var hc = this;
        hc.test = "hi from home"
    }
}())