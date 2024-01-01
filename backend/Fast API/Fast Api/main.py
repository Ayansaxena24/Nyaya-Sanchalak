import pickle
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np

app = FastAPI()

with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('le_charges.pkl', 'rb') as le_charges_file:
    le_charges = pickle.load(le_charges_file)

with open('le_acts.pkl', 'rb') as le_acts_file:
    le_acts = pickle.load(le_acts_file)

with open('le_punis.pkl', 'rb') as le_punis_file:
    le_punis = pickle.load(le_punis_file)

with open('le_evid.pkl', 'rb') as le_evid_file:
    le_evid = pickle.load(le_evid_file)

with open('le_fact.pkl', 'rb') as le_fact_file:
    le_fact = pickle.load(le_fact_file)


class InputData(BaseModel):
    Charges: str
    Applicable_Acts: str
    Potential_Punishment: str
    Evidence: str
    Facts: str

@app.post("/predict")
async def predict_severity_score(data: InputData):
    try:
        # Use loaded label encoders
        charges = le_charges.transform([data.Charges])[0]
        acts = le_acts.transform([data.Applicable_Acts])[0]
        punishment = le_punis.transform([data.Potential_Punishment])[0]
        evidence = le_evid.transform([data.Evidence])[0]
        facts = le_fact.transform([data.Facts])[0]

        input_data = np.array([[charges, acts, punishment, evidence, facts]])

        predicted_severity_score = model.predict(input_data)[0]

        return {"Predicted_Severity_Score": predicted_severity_score}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
