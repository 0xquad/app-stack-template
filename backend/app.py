import json
from flask import Flask, Response, request, abort

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hi from backend!'
