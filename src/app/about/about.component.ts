import { Component } from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  template: require('./about.html')
})
export class About {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
    // http.get('assets/mock-data/mock-data.json')
    // this.http.get('/assets/mock-data/mock-data.json')
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  // private extractData(res: Response) {
  //   console.log(res);
  //   let body = res.json();
  //   return body.data || {};
  // }
  // private handleError (error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }

  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    setTimeout(() => {
      let asyncDataPromise = asyncMockDataPromiseFactory();
      asyncDataPromise.then(json => {
        console.log('async mockData', json);
      });
    });
  }

}
