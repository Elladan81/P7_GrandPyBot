#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from os import environ

PORT = 5000
HOST = 'localhost'
APP = {
    'NAME': 'GrandPyBot',
    'SRC': 'https://github.com/Elladan81/P7_GrandPyBot',
    'DEBUG': True,
}

GOO_API = {
    'URL_GEO': 'https://maps.googleapis.com/maps/api/geocode/json?',
    'URL_MAP': 'https://maps.googleapis.com/maps/api/staticmap?',
    'KEY': environ('GOO_API_KEY'),
}