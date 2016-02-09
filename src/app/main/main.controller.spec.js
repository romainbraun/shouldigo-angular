(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('shouldIgo'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
      
    }));

  });
})();
