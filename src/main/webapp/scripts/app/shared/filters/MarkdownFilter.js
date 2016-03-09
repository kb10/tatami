angular.module('tatamiJHipsterApp')
.filter('markdown', ['$sce', function($sce) {
    return function(content) {
        return content ? $sce.trustAsHtml(marked(content)) : '';
    };
}]);
