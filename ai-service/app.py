from fastapi import FastAPI
app=FastAPI()

@app.get("/")
def home():
    return {"message":"Ai Service Running"}

@app.post("/predict")
def predict(data:dict):
    text=data.get("text","").lower()
    urgency="normal"
    critical_words=[
        "accident",
        "icu",
        "emergency",
        "critical"
    ]
    urgent_words=[
        "surgery",
        "urgent"
    ]
    if any(
        word in text
        for word in critical_words
    ):
        urgency="critical"
    elif any(
        word in text
        for word in urgent_words
    ):
        urgency="urgent"
    return {
        "urgency":urgency
    }
    