from flask import Flask, redirect, url_for, request, jsonify, abort
import json

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/test/user-settings', methods=['POST'])
def hello():
    #abort(500, {"message": "Failed to get off the couch"})
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        delivered_json = request.json
        print(delivered_json)
        return delivered_json
    else:
        return 'Content-Type not supported!'


if __name__ == "__main__":
    app.run(port=7474)
