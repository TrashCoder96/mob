'use strict';
angular.module('nast', [
    // load your modules here
    'main', // starting with the main module
]).run(run);
run.$inject = ['stateHandler'];

function run(stateHandler) {
    stateHandler.initialize();
}
