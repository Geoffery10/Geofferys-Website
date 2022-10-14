$(document).ready(function(){
    $.getJSON('games.json', function(data) {
        console.log(data.Games);
        // Loop through the games in the json file and add them to a string (add "and" to the end)
        var games = "";
        for (var i = 0; i < data.Games.length; i++) {
            if (data.Games.length > 2) {
                if (i == data.Games.length - 1) {
                    games += "and " + data.Games[i].Name;
                } else {
                    games += data.Games[i].Name + ", ";
                }
            } else {
                if (i == data.Games.length - 1) {
                    games += "and " + data.Games[i].Name;
                } else {
                    games += data.Games[i].Name + " ";
                }
            }

        }

        // Add the games to the html
        $("#supported_games").html(games);

        if (data.Games.length > 0) {
            var game = data.Games[0];
            var url = game['Mod URL'];
            // Get version of moddude
            $.getJSON(url, function(data_02) {
                console.log(data_02);
                $("#moddude_download").html("Download! v" + data_02['CURRENT_VERSION']);
            });
        }
    });
    
});