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
// prepare and send ajax 'POST' request
{
    displayLoader();
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
// Get AJAX response and display GrandPyBot random answer + google map
{
    var data = JSON.parse(data);
    console.log("Le serveur Python a renvoyé :", data); // FOR DEBUG
    removeLoader();

    if (data !== "") {
        displayGrandPyBot(GrandPyBotEureka() + data['formatted_address'])
        initMap(data['coord']);
        if (data['extract'] !== "") {
            displayGrandPyBot(GrandPyBotRandomAnswer() + data['extract']);
            displayGrandPyBot(GrandPyBotRandomContinue());
        }
    } else {
        displayGrandPyBot(GrandPyBotRandomDontUnderstand());
    }
}

