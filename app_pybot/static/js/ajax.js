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

    if (data !== "") {
        displayGrandPyBot("Je peux déjà te dire que c'est à cette adresse : " + data['formatted_address'])
        initMap(data['coord']);
        if (data['extract'] !== "") {
            displayGrandPyBot(GrandPyBotRandomAnswer() + data['extract']);
            displayGrandPyBot(GrandPyBotRandomContinue());
        }
    } else {
        displayGrandPyBot(GrandPyBotRandomDontUnderstand());
    }
}


function GrandPyBotRandomAnswer() { // GrandpyBot answer when the request is ok

    var possibleAnswer = [ //add new answer here
    "Qu'est ce que je peux te dire sur cet endroit... Humm... Ha oui ! Ici : ",
    "Je pense avoir trouvé ce que tu cherches... ",
    "Je me rappelle d'une petite chose à propos de cet endroit... ",
    "Un jour je me suis perdu dans ce coin... Ho, où suis je ? ",
    "C'est assez proche de l'université où je travaille. Tu ne l'as jamais vu ? Normal. Haha ",
    ];

    var grandPyBotAnswer = possibleAnswer[Math.floor(Math.random()*possibleAnswer.length)];
    console.log("Le serveur à choisi"+ grandPyBotAnswer ); // for Debug
    return grandPyBotAnswer;
}

function GrandPyBotRandomDontUnderstand() { //GrandPyBot answer when no result is found to the request

    var dontUnderstandRandomAnswer = [ //add new answer here
    "Je dois avoir la mémoire qui flanche, ça ne me dit rien...",
    "Peux-tu m'en dire plus ?",
    "Je n'ai rien compris... Tape plus fort sur ton clavier !",
    "Aucune idée... Je devrais reprendre des pilules de grenouilles séchées.",
    "Oook. Hmmmm ? Ho, pardon. Je te dis que... je n'ai rien compris.",
    ];

    var dontUnderstandAnswer = dontUnderstandRandomAnswer[Math.floor(Math.random()*dontUnderstandRandomAnswer.length)];
    console.log("Le serveur à choisi"+ dontUnderstandAnswer ); // for Debug
    return dontUnderstandAnswer;
}

function GrandPyBotRandomContinue () { //GrandPyBot random answer when a request is completed

    var possibleContinueAnswer = [ //add new answer here
    "Je peux faire autre chose pour toi ?",
    "Je peux te parler de quelque chose d'autre ?",
    "Tu as une autre question ?",
    "Encore autre chose ?",
    "Oui ? Il va pleuvoir demain... Autre chose ?",
    ];

    var currentContinueAnswer = possibleContinueAnswer[Math.floor(Math.random()*possibleContinueAnswer.length)];
    console.log("Le serveur à choisi :" + currentContinueAnswer ); // For debug
    return currentContinueAnswer;
}