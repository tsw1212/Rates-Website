How to Run Currency Exchange App
Option 1: Recommended - Running with Docker Compose
Prerequisites
Install Docker and Docker Compose.
Steps:
Clone the Repository

bash
Copy code
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
Build and Run the Docker Containers

bash
Copy code
docker-compose up --build
Access the App

Open your browser and visit: http://localhost:5173 to use the currency exchange app.
Stop the Services

bash
Copy code
docker-compose down
Option 2: Running Locally (Without Docker)
Prerequisites
Install Node.js.
Install .NET SDK.
Steps:
Clone the Repository

bash
Copy code
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
Install Dependencies

Frontend (React)

bash
Copy code
cd frontend
npm install
Backend (ASP.NET Core API)

bash
Copy code
cd ../backend
dotnet restore
Run the Application

Run the Backend

bash
Copy code
cd backend
dotnet run
Run the Frontend Open a new terminal and run:

bash
Copy code
cd frontend
npm run dev
Access the App

Open your browser and visit: http://localhost:5173 to use the currency exchange app.
Troubleshooting
Port conflicts: If you encounter port conflicts, adjust the docker-compose.yml file.
Dependency issues: Use npm install or dotnet restore to resolve any dependency-related issues
