from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from app import models, database, calcul
from app.database import engine, get_db
from fastapi.responses import StreamingResponse
import io
import csv
from pydantic import BaseModel  

app = FastAPI()


origins = [
    "http://localhost:3000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


models.Base.metadata.create_all(bind=engine)

class ExpressionModel(BaseModel):
    expression: str

@app.post("/calculate/")
def calculate_npi(expression_model: ExpressionModel, db: Session = Depends(get_db)):
    expression = expression_model.expression  # Utilise le modèle Pydantic
    try:
        result = calcul.evaluate_npi(expression)
        operation = models.Operation(expression=expression, result=result)
        db.add(operation)
        db.commit()
        db.refresh(operation)
        return {"expression": expression, "result": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/export/")
def export_operations(db: Session = Depends(get_db)):
    operations = db.query(models.Operation).all()
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Expression", "Result"])

    for op in operations:
        writer.writerow([op.expression, op.result])

    output.seek(0)
    return StreamingResponse(output, media_type="text/csv", headers={"Content-Disposition": "attachment; filename=operations.csv"})
