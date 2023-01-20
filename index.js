function openYouTube() {
    
    let word = document.querySelector("#searchbar").value
    if (word!=""){
        window.open("https://www.youtube.com/results?search_query="+word, "_blank")
    }
    else{
        window.open("https://www.youtube.com", "_blank")
    }
}

document.querySelector("#text").addEventListener("click",openYouTube);
document.querySelector("#searchbar").addEventListener("keypress",function(event) {
    if (event.key=="Enter"){
        event.preventDefault();
        document.querySelector("#text").click();
}});