(function (){
    let myLibrary = {
        greet : function(name){
            console.log("hello mr ", name)
        }
    }
    window.myLibrary = myLibrary

    let myDiv = document.createElement("div")

    myDiv.style.width = "300px"
    myDiv.style.height = "300px"
    myDiv.style.backgroundColor = "red"

    let rootDiv = document.querySelector("#root")
    rootDiv.appendChild(myDiv)

})()