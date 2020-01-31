#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Author : Mickael Lalevée
version 0.1
"""
from flask import Flask, request, render_template

app = Flask(__name__)
app.config.from_object('config')


@app.route('/', methods=['POST', 'GET'])
def index():
    response = "[{}]".format(app.config['GOO_API']['KEY'])

    if "submit" in request.form:
        response = request.form['text']

    return render_template(
        "index.html",
        name=app.config['APP']['NAME'],
        url=app.config['APP']['SRC'],
        response=response,
    )


if __name__ == "__main__":
    app.run()
