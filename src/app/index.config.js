(function() {
  'use strict';

  angular
    .module('shouldIgo')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
