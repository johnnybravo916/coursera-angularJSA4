(function () {
'use strict';

angular.module('MenuApp')
.component('categories',{
  templateURL: 'src/menu/templates/categories.template.html',
  bindings: {
    items: '<',
  }
});

})();
