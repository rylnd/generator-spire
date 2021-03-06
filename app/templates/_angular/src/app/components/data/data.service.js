'use strict';

function DataService() {
  return {
    get: function(filename){
      return new Promise(function(resolve) {
        var data = require('../../../data/' + filename).data;
        resolve(data);
      });
    }
  };
}

export default [DataService];
