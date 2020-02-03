#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Author : Mickael Lalevée
version 0.1
"""
import pprint
from flask import Flask, request, render_template
from apicall import goo_geocode, goo_static

app = Flask(__name__)
app.config.from_object('config')


@app.route('/', methods=['POST', 'GET'])
def index():
    """ Index View"""

    # catch posted data from form
    if "submit" in request.form:
        address = str(request.form['query'])
        api_response = pprint.pformat(goo_geocode(address))
    else:
        # default response
        api_response = "... empty response... "
        # render views with var
    return render_template(
        "index.html",
        name=app.config['APP']['NAME'],
        url=app.config['APP']['SRC'],
        raw_response=api_response,
        map_url=goo_static(),
    )


if __name__ == "__main__":
    app.run()
