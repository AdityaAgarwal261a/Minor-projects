from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

app = FastAPI()



df = pd.read_csv("dataset.csv")
X = df.drop(columns=['date', 'weather'])
y = df['weather']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

model = LogisticRegression()
model.fit(X_train, y_train)

print("ML Model loaded and ready!")


class WeatherInput(BaseModel):
    precipitation: float
    temp_max: float
    temp_min: float
    wind: float



@app.post("/predict")
def predict(data: WeatherInput):

    input_df = pd.DataFrame([{
        "precipitation": data.precipitation,
        "temp_max": data.temp_max,
        "temp_min": data.temp_min,
        "wind": data.wind
    }])

    prediction = model.predict(input_df)[0]

    return {"prediction": prediction}
