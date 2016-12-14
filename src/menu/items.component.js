(function () {
'use strict';

angular.module('MenuApp')
.component('items',{
  templateURL: 'src/menu/templates/items.template.html',
  bindings: {
    items: '<',
  }
});

})();
