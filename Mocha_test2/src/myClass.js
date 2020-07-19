class myClass{

    constructor(){
        console.log("Initiated");
    }

    add(arg1,arg2){
        var result;
        result=arg1+arg2;
        return result;
    }
}
module.exports=myClass;