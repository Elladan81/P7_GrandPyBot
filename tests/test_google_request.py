#! /usr/bin/env python3
# coding: utf-8

import requests_mock

from app_pybot.request_tools.google_request import GMapsRequest


# TESTS MAKING FAKE REQUESTS (Mocks) :

class TestGMapsRequest:

    def test_empty(self):
        """Test an empty GMapsRequest with a mocked API response
        """
        with requests_mock.Mocker() as m:
            empty = GMapsRequest("")
            m.get(empty.url, text="{}")
            assert empty.get_coord() == ""

    def test_eiffel_coord(self):
        """Test a basic GMapsRequest with a mocked API response
        containing Eiffel Tower coordinates
        """
        with requests_mock.Mocker() as m:
            eiffel = GMapsRequest("GrandPyBot trouve tour eiffel")
            result = '{"results" : [{"geometry": {"location": \
                {"lat": 48.85837009999999, "lng": 2.2944813}}}]}'
            m.get(eiffel.url, text=result)
            assert eiffel.get_coord() == {
                'lat': 48.85837009999999,
                'lng': 2.2944813
            }

    def test_eiffel_address(self):
        """Test a basic GMapsRequest with a mocked API response
            containing Eiffel Tower coordinates
            """
        with requests_mock.Mocker() as m:
            eiffel = GMapsRequest("GrandPyBot trouve tour eiffel")
            result = '{"results" : [{"formatted_address": "Champ de Mars,' \
                     ' 5 Avenue Anatole France, 75007 Paris, France"}]}'
            m.get(eiffel.url, text=result)
            assert eiffel.get_address() == "Champ de Mars, 5 Avenue Anatole " \
                                           "France, 75007 Paris, France"


'''
# TESTS MAKING REAL REQUESTS :

class TestGMapsRequest:
    def setup(self):
        self.empty = GMapsRequest("")
        self.non_sense = GMapsRequest("wyz iopww")
        self.eiffel = GMapsRequest("GrangPyBot trouve tour eiffel")

    def test_get_coord(self):
        assert self.empty.get_coord() == ""
        assert self.non_sense.get_coord() == ""
        assert self.eiffel.get_coord() == {
            'lat': 48.85837009999999, 
            'lng': 2.2944813
            } # Eiffel Tower coordinates
'''

if __name__ == "__main__":
    pass
