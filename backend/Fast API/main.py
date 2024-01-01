from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from transformers import BertTokenizer
from sklearn.preprocessing import LabelEncoder
from xgboost import XGBClassifier

app = FastAPI()

# Load the best model
loaded_model = joblib.load('Xg_best_model.joblib')  # Update the file name if necessary

# Load label encoder for 'Case Type'
label_encoder = joblib.load('label_encoder.pkl')  # Adjust file name if needed

# Load BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Define request body structure
class InputData(BaseModel):
    Case_Type: str
    Case_Description: str
    Potential_Punishment: str
    Applicable_Acts: str

# Function to preprocess input data
def preprocess_data(data: InputData, tokenizer):
    tokens = tokenizer.encode_plus(data.Case_Description, add_special_tokens=True, truncation=True, max_length=128, return_tensors='tf')
    input_ids = tokens['input_ids']
    attention_mask = tokens['attention_mask']
    case_type_encoded = label_encoder.transform([data.Case_Type])[0]
    punishment = str(data.Potential_Punishment)
    applicable_acts = str(data.Applicable_Acts)
    features = {'input_ids': input_ids, 'attention_mask': attention_mask, 'case_type_encoded': case_type_encoded, 'punishment': punishment, 'applicable_acts': applicable_acts}
    return features

# Updated predict_severity endpoint
@app.post("/predict/")
async def predict_severity(data: InputData):
    processed_data = preprocess_data(data, tokenizer)
    prediction = loaded_model.predict(processed_data)
    return {"Severity_Score_Prediction": int(prediction[0])}

@app.get("/")
async def func():
    return {"hello": "world"}
