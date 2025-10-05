FeedBackAPP
---------------------------------------
A full-stack feedback application built with **Django REST Framework** (backend) and **React + Vite** (frontend).  
Users can submit feedback and view all submitted feedback in real-time.

## 🌐 Tech Stack

**Backend:**  
- Python 3.10+  
- Django 5+  
- Django REST Framework  

**Frontend:**  
- React 18+  
- Vite 5+  
- Node 20+  

**Database:**  
- SQLite (default for development; can switch to PostgreSQL in production)  

**Project Structure**
feedback_project/
│
├── backend/ (Django project)
│ ├── manage.py
│ ├── feedback_project/
│ ├── feedback_app/
│ └── ...
│
├── frontend/ (React Vite project)
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── src/
│
├── requirements.txt
└── README.md

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

Create a virtual environment:
--------------------------------
python -m venv venv
source env/bin/activate  # Linux/macOS
env\Scripts\activate     # Windows

Install dependencies:
-------------------------------
pip install -r requirements.txt

Apply migrations:
----------------------------
python manage.py migrate
Run the backend server:
python manage.py runserver
Backend runs on: http://127.0.0.1:8000/

API endpoint: http://127.0.0.1:8000/api/feedbacks/
Backend API available at /api/feedbacks/.


2️⃣ Frontend Setup (React + Vite)

Navigate to frontend folder:

cd frontend


Install Node dependencies:

npm install


Start development server:

npm run dev


Frontend runs on: http://localhost:5173

Uses proxy to connect to Django backend: /api/... automatically forwarded.

Build production files for deployment:

npm run build

Output goes to frontend/dist/

🔧 Features

Submit feedback with name and message.

View all feedback below the form.

Works locally and in production seamlessly.

Single Page Application (SPA) using React + Vite.

📌 Notes

For development, React dev server (npm run dev) proxies API calls to Django backend.

For production, Django serves the built React app from frontend/dist.

Can replace SQLite with PostgreSQL for production.




