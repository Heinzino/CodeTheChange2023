from flask import Flask, request, jsonify

app = Flask(__name__)

# This will store our integer value
current_value = 0

@app.route('/set_value', methods=['POST'])
def set_value():
    global current_value
    value = request.json.get('value')
    
    if isinstance(value, int):
        current_value = value
        return jsonify({"message": "Value set successfully"}), 200
    else:
        return jsonify({"error": "Invalid input, please send an integer"}), 400

@app.route('/get_value', methods=['GET'])
def get_value():
    return jsonify({"value": current_value})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
