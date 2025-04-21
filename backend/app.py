from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True, allow_headers=["Content-Type", "Authorization"])

@app.route('/')
def index():
    return jsonify({"Choo Choo": "Welcome to your Flask app 🚅"})

@app.route('/ping')
def ping():
    return jsonify({"message": "pong-dev", "status": "ok"}), 200


if __name__ == '__main__':
    app.run(debug=True, port=8080, default=5000, host="0.0.0.0")
