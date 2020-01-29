#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Author : Mickael Lalevée
version 0.1
"""
from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello world !"


if __name__ == "__main__":
    app.run()
