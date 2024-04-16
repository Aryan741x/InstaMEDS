from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from services.ML import predict_disease

app = Flask(__name__)
CORS(app)

global_prediction = None

@app.route("/api/data")
def get_data():
    # Load data from JSON file or database
    with open("symptom.json") as file:
        data = json.load(file)
    return jsonify(data)

@app.route("/store_symptoms", methods=["POST"])
def store_symptoms():
    global global_prediction  # Declare global_prediction as global
    selected_symptoms = request.json.get("symptoms", [])
    
    # Call ML script here
    global_prediction = run_ml_script(selected_symptoms)

    # Here you can add code to store the selected symptoms and prediction
    return jsonify({"selected_symptoms": selected_symptoms, "prediction": global_prediction})

@app.route("/desc_disease",methods=["POST"])
def send_desc():
    global global_prediction  # Declare global_prediction as global
    prediction = global_prediction
    with open("disease.json") as file:
        data = json.load(file)
    for disease in data:
        if disease["name"] == prediction:
            print(disease)
            return jsonify(disease)
        


def run_ml_script(selected_symptoms):
    # Call the predict_disease function from ML.py
    prediction = predict_disease(selected_symptoms)
    return prediction

if __name__ == "__main__":
    app.run(debug=True)
