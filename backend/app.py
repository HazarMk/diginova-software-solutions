from flask import Flask, request, jsonify
from flasgger import Swagger
import numpy as np
import pickle

# Charger ton modèle
try:
    with open("rul_model.pkl", "rb") as f:
        model = pickle.load(f)
except FileNotFoundError:
    print(" ERREUR : le fichier 'rul_model.pkl' est introuvable dans le dossier actuel.")
    exit()

# Liste des colonnes dans le bon ordre
feature_order = [
    "Equipment_ID",
    "Temperature",
    "Pressure",
    "Vibration",
    "Voltage",
    "Current",
    "Humidity",
    "Load",
    "Speed",
    "Days_Since_Maintenance"
]

# Initialiser l'application Flask + Swagger
app = Flask(__name__)
swagger = Swagger(app)

@app.route("/predict", methods=["POST"])
def predict():
    """
    Predict Remaining Useful Life (RUL)
    ---
    tags:
      - Prediction
    description: Send equipment data to predict its Remaining Useful Life (RUL)
    parameters:
      - name: input
        in: body
        required: true
        description: JSON object containing the feature values
        schema:
          type: object
          properties:
            Equipment_ID:
              type: integer
              example: 100
            Temperature:
              type: number
              example: 5.0
            Pressure:
              type: number
              example: 12.0
            Vibration:
              type: number
              example: 0.5
            Voltage:
              type: number
              example: 0.1
            Current:
              type: number
              example: 75.0
            Humidity:
              type: number
              example: 40.0
            Load:
              type: number
              example: 3.0
            Speed:
              type: number
              example: 8.2
            Days_Since_Maintenance:
              type: number
              example: 70.0
    responses:
      200:
        description: Predicted RUL
        schema:
          type: object
          properties:
            predicted_RUL:
              type: number
              example: 138.7
    """
    data = request.get_json(force=True)
    missing = [feat for feat in feature_order if feat not in data]
    if missing:
        return jsonify({"error": f"Missing features: {', '.join(missing)}"}), 400

    features = np.array([data[feat] for feat in feature_order]).reshape(1, -1)
    prediction = model.predict(features)[0]

    return jsonify({"predicted_RUL": float(prediction)})

if __name__ == "__main__":
    print(" Flask server with Swagger running at: http://127.0.0.1:5000/apidocs/")
    app.run(debug=True)
