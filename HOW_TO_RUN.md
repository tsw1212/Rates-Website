
# How to Run Currency Exchange App

## Option 1: Recommended - Running with Docker Compose

### Prerequisites
- Install [Docker and Docker Compose](https://www.docker.com/products/docker-desktop) (recommended for Docker setup).

### 1. Clone the Repository

```bash
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
```

### 2. Build and Run the Docker Containers

```bash
docker-compose up --build
```

### 3. Access the App

Open [http://localhost:5173](http://localhost:5173) to use the currency exchange app.

### 4. Stop the Services

```bash
docker-compose down
```

## Option 2: Running Locally (without Docker)

### Prerequisites
- Install [Node.js](https://nodejs.org/).
- Install [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet) (for backend if running locally).

### 1. Clone the Repository

```bash
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
```

### 2. Install Dependencies

```bash
cd frontend
npm install

cd ../backend
dotnet restore
```

### 3. Run the Application

```bash
cd backend
dotnet run

cd ../frontend
npm run dev
```

### 4. Access the App

Open [http://localhost:5173](http://localhost:5173) to use the currency exchange app.

## Troubleshooting

- If you encounter port conflicts, adjust the `docker-compose.yml` file.
- Use `npm install` or `dotnet restore` if there are dependency issues.
```


