function test() {
    
    let word = document.querySelector("#searchbar").value
    if (word!=""){
        window.open("https://www.youtube.com/results?search_query="+word, "_blank")
    }
    else{
        window.open("https://www.youtube.com", "_blank")
    }
}
document.querySelector("#text").addEventListener("click",test);