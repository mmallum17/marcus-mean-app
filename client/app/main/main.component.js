import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import MainService from './main.service';
import 'angular-chart.js';

export class MainController {

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, mainService) {
    this.$http = $http;
    this.mainService = mainService;
  }

  $onInit() {
/*    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });*/
    this.mainService.getThings()
      .then(response => {
        this.awesomeThings = response;
      });
    this.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.data = [300, 500, 100];
    this.newThing = 'TESTING';
    this.addThing();
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('meanFullStackApp.main', [uiRouter, 'chart.js'])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .service('mainService', MainService)
  .name;
