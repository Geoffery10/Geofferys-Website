// This checks if the minecraft server is online or not
// If its online show online on the website
// If its offline show offline on the website
$(document).ready(function(){
    $.getJSON('https://api.mcsrvstat.us/2/play.geoffery10.com', function(data) {
        if (data.online == true) {
            // Log to console
            console.log("Minecraft server is online");
            $("#minecraft_online").html("Server is Online 🟢");
        } else {
            // Log to console
            console.log("Minecraft server is offline");
            $("#minecraft_online").html("Server is Offline 🔴");
        }
    });
});