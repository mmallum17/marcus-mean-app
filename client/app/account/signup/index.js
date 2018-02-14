'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('meanFullStackApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
