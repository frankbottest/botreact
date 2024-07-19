from flask import Flask, request, jsonify
import json

app = Flask(__name__)

with open('database.json', 'r') as f:
    database = json.load(f)

@app.route('/verify-payment', methods=['POST'])
def verify_payment():
    data = request.json
    txid = data.get('txid')

    if not txid:
        return jsonify({"success": False, "error": "No transaction ID provided"}), 400

    if txid in database["allowed_hashes"]:
        return jsonify({"success": True, "message": "Payment confirmed"})
    else:
        return jsonify({"success": False, "message": "Payment not found or not confirmed"}), 404

if __name__ == '__main__':
    app.run(port=5000)
