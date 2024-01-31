(function (){
    let myLibrary = {
        foo : function(val){
            console.log("hello ",val)
            // let myDiv = document.createElement("div")

            // myDiv.style.width = "300px"
            // myDiv.style.height = "300px"
            // myDiv.style.backgroundColor = "red"
        
            // let rootDiv = document.querySelector("#root")
            // console.log(rootDiv, "root div")
            // rootDiv.appendChild(myDiv)
        }
    }

    window.myLibrary = myLibrary

})()