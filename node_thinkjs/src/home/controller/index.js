'use strict';

import Base from './base.js';
import test from './test'
export default class extends Base {

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let model = this.model('city');
        let data = await model.select();
        console.log(data);
        this.assign({test: data});
        return this.display();
    }
    async testAction(){
        test();
       // console.log('hello world!');
        this.assign({test:'123'});
        return this.display();
    }

}