'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {

    /**
     * before magic method
     * 禁止post,put,delete
     * @return {Promise} []
     */
    __before() {
        this.modelInstance.field(['name','url']);
        this.postAction = this.putAction = this.deleteAction = () => {
            this.error(405, 'Method Not Allowed');
        }
    }

    /**
     *
     * init
     * @param  {Object} http []
     * @return {}      []
     */
    init(http) {
        super.init(http);
    }
    /**
     *
     * 保存城市
     * @param  {json} data []
     * @return {array}success  []
     */
    async postAction(){
        let data = this.post();
        this.modelInstance.addMany(data.city);
        return this.success('post done');
    }
}