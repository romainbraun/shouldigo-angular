(function() {
  'use strict';

  angular
    .module('shouldIgo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
