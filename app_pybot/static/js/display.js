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