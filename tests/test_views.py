#! /usr/bin/env python3
# coding: utf-8


from flask import json
from app_pybot import app


# test with Gmaps JSON dev site example
class TestViews:

    def test_ajax_request(self):
        response = app.test_client().post(
            '/ajax',
            data=json.dumps({
                "results": [
                    {
                        "address_components": [
                            {
                                "long_name": "1600",
                                "short_name": "1600",
                                "types": ["street_number"]
                            },
                            {
                                "long_name": "Amphitheatre Pkwy",
                                "short_name": "Amphitheatre Pkwy",
                                "types": ["route"]
                            },
                            {
                                "long_name": "Mountain View",
                                "short_name": "Mountain View",
                                "types": ["locality", "political"]
                            },
                            {
                                "long_name": "Santa Clara County",
                                "short_name": "Santa Clara County",
                                "types": ["administrative_area_level_2",
                                          "political"]
                            },
                            {
                                "long_name": "California",
                                "short_name": "CA",
                                "types": ["administrative_area_level_1",
                                          "political"]
                            },
                            {
                                "long_name": "United States",
                                "short_name": "US",
                                "types": ["country", "political"]
                            },
                            {
                                "long_name": "94043",
                                "short_name": "94043",
                                "types": ["postal_code"]
                            }
                        ],
                        "formatted_address": "1600 Amphitheatre Parkway, "
                                             "Mountain View, CA 94043, USA",
                        "geometry": {
                            "location": {
                                "lat": 37.4224764,
                                "lng": -122.0842499
                            },
                            "location_type": "ROOFTOP",
                            "viewport": {
                                "northeast": {
                                    "lat": 37.4238253802915,
                                    "lng": -122.0829009197085
                                },
                                "southwest": {
                                    "lat": 37.4211274197085,
                                    "lng": -122.0855988802915
                                }
                            }
                        },
                        "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
                        "types": ["street_address"]
                    }
                ],
                "status": "OK"
            }),
            content_type='application/json',
        )

        data = json.loads(response.get_data(as_text=True))

        assert response.status_code == 200
        assert data["formatted_address"] == "Amphitheatre Pkwy, " \
                                            "Mountain View," \
                                            " CA 94043, USA"
        assert data["coord"] == {'lat': 37.4230749, 'lng': -122.0841176}
        assert data["extract"] == "Le Googleplex est le siège social de " \
                                  "Google, situé au 1600 Amphitheatre Parkway" \
                                  " à Mountain View, en Californie près de " \
                                  "San José. Googleplex est un mot-valise " \
                                  "formé à partir de Google et de complex " \
                                  "et est une référence au grand nombre " \
                                  "gogolplex valant 10gogol = 1010100. " \
                                  "Le Googleplex est l'un des 23 sites " \
                                  "nord-américains de la firme."
