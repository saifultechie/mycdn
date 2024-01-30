(function (){
    let myLibrary = {
        greet : function(name){
            console.log("hello mr ", name)
        }
    }
    window.myLibrary = myLibrary
})()