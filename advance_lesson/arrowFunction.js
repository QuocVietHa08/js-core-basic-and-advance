var a={
    name:'viet',
    speak:function(){
       //  cach 1:var that=this;
       
        /*setTimeout(()=>{
            console.log(that.name);
            */
        //   cach 2:
        setTimeout(function(){
            console.log(this.name);
        
        }.bind(this),2000);
    }
};
a.speak();