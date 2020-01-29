#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Author : Mickael Lalevée
version 0.1
"""
from flask import Flask, request

app = Flask(__name__)
app.config.from_object('config')


@app.route('/', methods=['POST', 'GET'])
def index():

    response = request.form['text']

    return """ 
    {name}<br/>
    basic Flask Application
    <form method = "post" >
    <input type = "text" name = "text" maxlength = 25>
    <input type = "submit" name = "submit" value = "Send">
    </form>
    Posted data: {response} """.format(name=app.config['APP']['NAME'],
                                       response=response)


if __name__ == "__main__":
    app.run()
