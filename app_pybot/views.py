from flask import jsonify, render_template, request

from app_pybot import app
from app_pybot.forms import ChatForm
from .request_tools.apikey import GOO_API_KEY
from .request_tools.google_request import GMapsRequest
from .request_tools.parser import Parser
from .request_tools.wiki_request import WikiRequest


@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    """Initiates the /index page
    """
    form = ChatForm()
    return render_template('index.html', form=form, key=GOO_API_KEY)


@app.route('/ajax', methods=['POST'])
def ajax_request():
    """Receives user request for parsing
    Then asks Google Maps for coordinates
    Then asks Media Wiki for a Wikipedia extract
    Returns coordinates and extract as a JSON object
    """
    user_query = request.data.decode('utf-8')
    print("Contenu de la requête =", user_query)  # FOR DEBUG

    parser = Parser()
    cleaned_query = parser.clean(user_query)
    print("Requête nettoyée =", cleaned_query)  # FOR DEBUG

    gmaps_request = GMapsRequest(cleaned_query)
    coord = gmaps_request.get_coord()
    print("Coordonnées GMaps =", coord)  # FOR DEBUG
    formatted_address = gmaps_request.get_address()
    print("Formatted address =", formatted_address)

    if coord:
        # to refactor
        wiki_request = WikiRequest(coord['lat'], coord['lng'])
        extract = wiki_request.get_extract()
        if extract:
            response = {'coord': {'lat': coord['lat'], 'lng': coord['lng']},
                        'extract': extract,
                        }
        else:
            response = {'coord': {'lat': coord['lat'], 'lng': coord['lng']},
                        'extract': ""
                        }
        print(" >>>", extract)  # FOR DEBUG
    else:
        response = ""

    if formatted_address:
        response['formatted_address'] = formatted_address
    else:
        pass

    print("RESPONSE >>>", response)  # FOR DEBUG

    return jsonify(response)

