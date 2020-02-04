$('#submit').on('click', function()
// Handles user submission with 'Valider' button
{
    var user_query = document.getElementById('user_query').value;
    if (user_query !== "") {
        userValidated(user_query);
    }
});

$(document).on('keydown', function(event)
// Handles user submission with 'RETURN' key
{
    var userQuery = document.getElementById('user_query').value;
    var key = event.keyCode;
    if (key === 13 && userQuery !== "") {
        userValidated(userQuery);
    }
});

function userValidated(userQuery)
// Display user query in chat window, clear form and init ajax request
{
    console.log("vous avez saisi : " + userQuery); // FOR DEBUG
    displayUser(userQuery);
    var userZone = document.getElementById("user_query");
    userZone.value = "";
    ajaxPost('/ajax', userQuery, responseTreatment);
}

function ajaxPost(url, data, callback)
// Display gif loader, prepare and send ajax 'POST' request
{
    var req = new XMLHttpRequest();
    req.open('POST', url);
    req.addEventListener('load', function() {
        if ((req.status >= 200 && req.status < 400)) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener('error', function() {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}

function responseTreatment(data)
// Get AJAX response, remove gif loader and display GrandPyBot answer
{
    var data = JSON.parse(data);
    console.log("Le serveur Python a renvoyé :", data); // FOR DEBUG

    if (data !== "") {
        displayGrandPyBot("Ho, voici ce que j'ai trouvé pour toi :")
        initMap(data['coord']);
        if (data['extract'] !== "") {
            displayRobby(data['extract']);
        }
    } else {
        displayPapyBot("Désolé mon p'tit gars, je n'ai rien trouvé...")
    }
}