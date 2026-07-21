# ❤️ Heart Disease Prediction

A machine learning web application that predicts the likelihood of heart disease based on clinical parameters. Built with a **Random Forest Classifier** trained on the UCI Heart Disease dataset, and served via a **Flask** web interface.

---

## 🚀 Demo

Enter patient health metrics into the web form and get an instant prediction with a probability score indicating the risk of heart disease.

---

## 📁 Project Structure

```
Heart_Disease_Prediction/
│
├── app.py                        # Flask web server & prediction API
├── heart_disease_prediction.py   # Model training script
├── heart_final.csv               # Merged & cleaned dataset
├── random_forest_model.pkl       # Trained Random Forest model
├── scaler.pkl                    # StandardScaler for feature normalization
│
├── processed.cleveland.data      # UCI Cleveland dataset
├── processed.switzerland.data    # UCI Switzerland dataset
├── processed.va.data             # UCI VA dataset
├── reprocessed.hungarian.data    # UCI Hungarian dataset
│
├── templates/
│   └── index.html                # Frontend HTML page
├── static/
│   ├── css/style.css             # Styling
│   └── js/script.js              # Frontend logic
│
├── Heart_Disease_Prediction_Report.docx  # Project report
└── requirements.txt              # Python dependencies
```

---

## 🧠 Machine Learning

| Detail | Info |
|---|---|
| **Algorithm** | Random Forest Classifier |
| **Oversampling** | SMOTE (to handle class imbalance) |
| **Scaling** | StandardScaler |
| **Train/Test Split** | 80% / 20% |
| **Datasets** | Cleveland, Switzerland, VA, Hungarian (UCI) |

### Input Features

| Feature | Description |
|---|---|
| `age` | Age of the patient |
| `sex` | Sex (1 = male, 0 = female) |
| `cp` | Chest pain type (0–3) |
| `trestbps` | Resting blood pressure (mm Hg) |
| `chol` | Serum cholesterol (mg/dl) |
| `fbs` | Fasting blood sugar > 120 mg/dl (1 = true) |
| `restecg` | Resting ECG results (0–2) |
| `thalach` | Maximum heart rate achieved |
| `exang` | Exercise-induced angina (1 = yes) |
| `oldpeak` | ST depression induced by exercise |
| `slope` | Slope of peak exercise ST segment |
| `ca` | Number of major vessels colored by fluoroscopy (0–3) |
| `thal` | Thalassemia type (1–3) |

### Output

- **0** — No Heart Disease
- **1** — Heart Disease Detected
- **Probability Score** — Risk percentage

---

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+
- pip

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek02-ks/Heart_Disease_Prediction.git
   cd Heart_Disease_Prediction
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate        # Windows
   # source venv/bin/activate   # macOS/Linux
   ```

3. **Install dependencies**
   ```bash
   pip install flask numpy pandas scikit-learn imbalanced-learn joblib
   ```

4. **Run the app**
   ```bash
   python app.py
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

---

## 📊 API Endpoint

**POST** `/predict`

Send a JSON body with all 13 features:

```json
{
  "age": 52,
  "sex": 1,
  "cp": 0,
  "trestbps": 125,
  "chol": 212,
  "fbs": 0,
  "restecg": 1,
  "thalach": 168,
  "exang": 0,
  "oldpeak": 1.0,
  "slope": 2,
  "ca": 2,
  "thal": 3
}
```

**Response:**
```json
{
  "prediction": 1,
  "probability": 87.5
}
```

---

## 📦 Tech Stack

- **Backend:** Python, Flask
- **ML:** Scikit-learn, imbalanced-learn (SMOTE), Joblib
- **Frontend:** HTML, CSS, JavaScript
- **Dataset:** [UCI Heart Disease Dataset](https://archive.ics.uci.edu/ml/datasets/heart+Disease)

---

## 👤 Author

**Abhishek KS**  
GitHub: [@Abhishek02-ks](https://github.com/Abhishek02-ks)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
