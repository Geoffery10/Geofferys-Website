$(document).ready(function(){
    $.getJSON('../games.json', function(data) {
        console.log(data.Games);

        // Loop through the games in the json file and add them to the supported_games div
        for (var i = 0; i < data.Games.length; i++) {
            console.log(data.Games[i].Name);
            if (data.Games[i].Name === "Minecraft") {
                let img = document.createElement("img");
                img.src = "/images/game_covers/Minecraft.png";
                img.alt = data.Games[i].Name + " Cover";
                document.getElementById("supported_games").appendChild(img);
            } else if (data.Games[i].Name === "Bonelab") {
                let img = document.createElement("img");
                img.src = "/images/game_covers/Bonelab.png";
                img.alt = data.Games[i].Name + " Cover";
                document.getElementById("supported_games").appendChild(img);
            } else {
                let img = document.createElement("img");
                img.src = "/images/game_covers/No_Cover.png";
                img.alt = data.Games[i].Name + " Cover";
                document.getElementById("supported_games").appendChild(img);
            }
        }
    });

    // Get version of moddude
    /*
    $.getJSON('../mods.json', function(data_02) {
        console.log(data_02);
        $("#moddude_download").html("Download! v" + data_02['CURRENT_VERSION'] + " (Latest)");
    });
    */
});
