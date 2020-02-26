function displayLoader()
// Display gif loader (used during AJAX request)
{
    var chatWindow = document.getElementById('chatwindow')
    var loaderZone = document.createElement('div');
    loaderZone.setAttribute('id', 'ajax-loader');
    var loader = document.createElement('img');
    loader.setAttribute('src', '../static/img/straight-loader.gif');
    loader.setAttribute('alt', "ajax-loader");
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
    var userImg = document.createElement('img');
    userImg.setAttribute('src', '../static/img/user-img-01.jpg');
    userImg.classList.add('user-img');
    speechZone.textContent = speech;
    chatWindow.appendChild(speechZone);
    speechZone.insertAdjacentElement('afterbegin', userImg);
}

function displayGrandPyBot(speech)
// Display a chat bubble in 'GrandPyBot' style
{
    var chatWindow = document.getElementById('chatwindow');
    var speechZone = document.createElement('div');
    speechZone.classList.add('GrandPyBot');
    var grandPyBotImg = document.createElement('img');
    grandPyBotImg.setAttribute('src', '../static/img/grandpybot_storytelling-01.jpg');
    grandPyBotImg.classList.add('GrandPyBot-img');
    speechZone.textContent = speech;
    chatWindow.appendChild(speechZone);
    speechZone.insertAdjacentElement('afterbegin', grandPyBotImg);
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

function scrollTo(hash) {
    location.hash = "#chatform";
}

function GrandPyBotRandomAnswer() { // GrandpyBot answer when the request is ok

    var possibleAnswer = [ //add new answer here
    "Qu'est ce que je peux te dire sur cet endroit... Humm... Ha oui ! ",
    "Maintenant que j'ai trouvé ce que tu cherchais, ça me rappelle quelque chose. Ha oui, écoute : ",
    "Je me rappelle d'une petite chose à propos de cet endroit... ",
    "Un jour je me suis perdu dans ce coin... Ho, j'ai une anecdote à ce propos. ",
    "C'est assez proche de l'université où je travaille. Tu ne l'as jamais vu ? C'est normal. Haha ! Par contre savais-tu ceci ? ",
    ];

    var grandPyBotAnswer = possibleAnswer[Math.floor(Math.random()*possibleAnswer.length)];
    console.log("Le serveur à choisi : "+ grandPyBotAnswer ); // for Debug
    return grandPyBotAnswer;
}

function GrandPyBotRandomDontUnderstand() { //GrandPyBot answer when no result is found to the request

    var dontUnderstandRandomAnswer = [ //add new answer here
    "Je dois avoir la mémoire qui flanche, ça ne me dit rien... ",
    "Peux-tu m'en dire plus ? ",
    "Je n'ai rien compris... Tape plus fort sur ton clavier ! ",
    "Aucune idée... Je devrais reprendre des pilules de grenouilles séchées.",
    "Oook. Hmmmm ? Ho, pardon. Je te dis que... je n'ai rien compris.",
    "Qui me parle ? Hmmmmmm.... Rrrrrrr...zzzzzzz. Hmmm ? Oui ? Quoi ? ",
    ];

    var dontUnderstandAnswer = dontUnderstandRandomAnswer[Math.floor(Math.random()*dontUnderstandRandomAnswer.length)];
    console.log("Le serveur à choisi : "+ dontUnderstandAnswer ); // for Debug
    return dontUnderstandAnswer;
}

function GrandPyBotRandomContinue () { //GrandPyBot random answer when a request is completed

    var possibleContinueAnswer = [ //add new answer here
    "Je peux faire autre chose pour toi ? ",
    "Je peux te parler d'autre chose ? ",
    "Tu as une autre question ? ",
    "Autre chose ? Allez, dis moi ! ",
    "Oui ? Il va pleuvoir demain... Autre chose ? ",
    ];

    var currentContinueAnswer = possibleContinueAnswer[Math.floor(Math.random()*possibleContinueAnswer.length)];
    console.log("Le serveur à choisi : " + currentContinueAnswer ); // For debug
    return currentContinueAnswer;
}

function GrandPyBotEureka () {

    var possibleEureka = [
    "Je peux déjà te dire que c'est à cette adresse : ",
    "Je pense avoir trouvé ce que tu cherches, regarde : ",
    "Je dirais que c'est à cet endroit : ",
    "Hmmmmmm... Ha oui ! Je me souviens maintenant ! ",
    "Cela me rappelle quelque chose... Ha oui, voilà : ",
    ];
    var currentEureka = possibleEureka[Math.floor(Math.random()*possibleEureka.length)];
    console.log("Le serveur à choisi : " + currentEureka ); // For debug
    return currentEureka;
}