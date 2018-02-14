export default class MainService {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }
  getThings() {
    this.$log.log('MADE IT TO SERVICE');
    return this.$http.get('/api/things')
      .then(response => {
        // this.$log.log(response);
        return response.data;
      });
  }
}
