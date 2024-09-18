
# How to Run Currency Exchange App

## Option 1: Recommended - Running with Docker Compose

### Prerequisites
- Install [Docker and Docker Compose](https://www.docker.com/products/docker-desktop) (recommended for Docker setup).

### 1. Clone the Repository

```bash
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
```

### 2.2 Build and Run the Docker Containers

```bash
First time:

docker-compose up --build

Not first time:
docker-compose up


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
- Install [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet) 

### 1. Clone the Repository

```bash
git clone https://github.com/tsw1212/Rates-Website.git
cd Rates-Website
```

### 2. Install Dependencies
only if you don't have the prerequisites

```bash
cd frontend
npm install

cd ../backend
dotnet restore
```

### 3. Run the Application

```bash
If you have installed if the installations will do this line
cd backend
If you haven't installed the installations, do this line
cd backend/backend

And now do the following rows in any situation

Open a New Terminal  Window to run the backend application do: cd "your path"

dotnet run

In the old Terminal

cd ../../frontend
npm run dev




```

### 4. Access the App

Open [http://localhost:5173](http://localhost:5173) to use the currency exchange app.

## Troubleshooting

- If you encounter port conflicts, adjust the `docker-compose.yml` file.
- Use `npm install` or `dotnet restore` if there are dependency issues.
```


