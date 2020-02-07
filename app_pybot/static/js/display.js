function displayLoader()
// Display gif loader (used during AJAX request)
{
    var chatWindow = document.getElementById('chatwindow')
    var loaderZone = document.createElement('div');
    loaderZone.setAttribute('id', 'ajax-loader');
    var loader = document.createElement('img');
    loader.setAttribute('src', '../static/img/grand_py_bot_thinking-01.jpg');
    loader.setAttribute('alt', "Ajax loader");
    loaderZone.appendChild(loader);
    chatWindow.appendChild(loaderZone);
}

function removeLoader()
// Remove gif loader when AJAX request finished
{
    var loaderZone = document.getElementById('ajax-loader');
    loaderZone.remove();
}

function displayUser(speech)
// Display a chat bubble for User
{
    var chatWindow = document.getElementById('chatwindow');
    var speechZone = document.createElement('div');
    speechZone.classList.add('user');
    speechZone.textContent = speech;
    chatWindow.appendChild(speechZone);
}

function displayGrandPyBot(speech)
// Display a chat bubble in 'GrandPyBot' style
{
    var chatWindow = document.getElementById('chatwindow');
    var speechZone = document.createElement('div');
    speechZone.classList.add('GrandPyBot');
    speechZone.textContent = speech;
    chatWindow.appendChild(speechZone);
}

function initMap(coord)
// Display the Google Map and marker corresponding to coordinates
{
    var chatWindow = document.getElementById('chatwindow');
    var mapZone = document.createElement('div');
    mapZone.classList.add('map');
    mapZone.style.display = 'block';
    chatWindow.appendChild(mapZone);
    var map = new google.maps.Map(mapZone, {
        zoom: 16,
        center: coord,
        });
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
      }


function GrandPyBotRandomAnswer() { // GrandpyBot answer when the request is ok

    var possibleAnswer = [ //add new answer here
    "Qu'est ce que je peux te dire sur cet endroit... Humm... Ha oui ! ",
    "Je pense avoir trouvé ce que tu cherches... Tiens, tu savais ça ? ",
    "Je me rappelle d'une petite chose à propos de cet endroit... ",
    "Un jour je me suis perdu dans ce coin... Ho, j'ai une anecdote à ce propos. ",
    "C'est assez proche de l'université où je travaille. Tu ne l'as jamais vu ? C'est normal. Haha ! Par contre savais-tu ceci ? ",
    ];

    var grandPyBotAnswer = possibleAnswer[Math.floor(Math.random()*possibleAnswer.length)];
    console.log("Le serveur à choisi"+ grandPyBotAnswer ); // for Debug
    return grandPyBotAnswer;
}

function GrandPyBotRandomDontUnderstand() { //GrandPyBot answer when no result is found to the request

    var dontUnderstandRandomAnswer = [ //add new answer here
    "Je dois avoir la mémoire qui flanche, ça ne me dit rien... ",
    "Peux-tu m'en dire plus ? ",
    "Je n'ai rien compris... Tape plus fort sur ton clavier ! ",
    "Aucune idée... Je devrais reprendre des pilules de grenouilles séchées.",
    "Oook. Hmmmm ? Ho, pardon. Je te dis que... je n'ai rien compris.",
    ];

    var dontUnderstandAnswer = dontUnderstandRandomAnswer[Math.floor(Math.random()*dontUnderstandRandomAnswer.length)];
    console.log("Le serveur à choisi"+ dontUnderstandAnswer ); // for Debug
    return dontUnderstandAnswer;
}

function GrandPyBotRandomContinue () { //GrandPyBot random answer when a request is completed

    var possibleContinueAnswer = [ //add new answer here
    "Je peux faire autre chose pour toi ? ",
    "Je peux te parler de quelque chose d'autre ? ",
    "Tu as une autre question ? ",
    "Encore autre chose ? ",
    "Oui ? Il va pleuvoir demain... Autre chose ? ",
    ];

    var currentContinueAnswer = possibleContinueAnswer[Math.floor(Math.random()*possibleContinueAnswer.length)];
    console.log("Le serveur à choisi :" + currentContinueAnswer ); // For debug
    return currentContinueAnswer;
}