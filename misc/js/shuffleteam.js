function shuffleList() 
{ 
    var list = document.getElementById("randomizedList");
    var header = document.getElementById("header"); 
    var shuffleButton = document.getElementById("shuffleButton"); 
    var currentDate = new Date().toDateString(); 
    var seed = 0; 
    
    for (var i = 0; i < currentDate.length; i++) 
    { 
        seed += currentDate.charCodeAt(i); 
    } 
    
    for (var i = list.children.length; i >= 0; i--) 
    { 
        seed = (seed * 9301 + 49297) % 233280; 
        var randomIndex = Math.floor(seed / 233280 * i); 
        list.appendChild(list.children[randomIndex]); 
        header.textContent = "Shuffled List"; 
    }
    
    console.log("Shuffled List")
}