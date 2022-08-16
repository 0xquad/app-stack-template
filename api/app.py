import os
import json
from flask import Flask, Response, request, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BACKEND_URL = os.environ.get('BACKEND_URL', 'http://backend')


@app.route('/')
def home():
    return 'Hi from api!'
