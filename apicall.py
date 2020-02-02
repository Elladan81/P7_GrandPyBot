import json
import requests
from config import GOO_API


def goo_geocode(query="openclassrooms", country='FR'):
    payload = {
        'key': GOO_API['KEY'],
        'address': query,
        'region': country,
        'country': country,
    }

    response = requests.get(GOO_API['URL_GEO'], payload)
    api_json = json.loads(response.text)
    api_status = response.status_code

    if api_status != 200 or api_json['status'] != 'OK':
        print('API response status : {}'.format(api_status))

    return api_json


if __name__ == "__main__":
    goo_geocode()
