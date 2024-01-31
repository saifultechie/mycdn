(function (){
    let myLibrary = {
        greet : function(name){
            console.log("hello mr ", name)
        },
        // foo : function(){
        //     let myDiv = document.createElement("div")

        //     myDiv.style.width = "300px"
        //     myDiv.style.height = "300px"
        //     myDiv.style.backgroundColor = "red"
        
        //     let rootDiv = document.querySelector("#root")
        //     console.log(rootDiv, "root div")
        //     rootDiv.appendChild(myDiv)
        // }
    }

    window.myLibrary = myLibrary

})()