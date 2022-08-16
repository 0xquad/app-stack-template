import json
from flask import Flask, Response, request, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hi from api!'
