/**
 * Created by Administrator on 2017-01-06.
 */

class cal{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}
class add extends cal{
    constructor(a,b){
        super(a,b);
    }
    result(){
        return this.a+this.b;
    }
}
class sub extends cal{
    constructor(a,b){
        super(a,b);
    }
    result(){
        return this.a-this.b;
    }
}

function test() {
    let c = new add(1,2);
    console.log(c.result());
}
export default test;



