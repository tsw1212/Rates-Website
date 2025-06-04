
---

# 💱 Exchange Rates Website

An interactive web application for displaying live currency exchange rates — built with React (Vite) and ASP.NET 8 Web API.

This project was developed as part of a technical assignment and includes full implementation of all bonus tasks:  
✅ TanStack Table with column sorting  
✅ Real exchange rate data from a public API  
✅ Dockerized setup for frontend and backend  

---

## ✨ Features

- Select a base currency from a dropdown (USD, EUR, GBP, CNY, ILS)
- View a table of exchange rates from the selected base to the others
- Clean and responsive UI
- Sortable table columns (by currency name or value)
- Full frontend-backend integration over REST
- Docker support for cross-platform deployment

---

## 🧰 Tech Stack

### Frontend
- React + Vite
- TanStack Table v8
- Axios
- TypeScript
- CSS Modules / Tailwind (optional)

### Backend
- ASP.NET Core 8 (C#)
- RESTful API
- HttpClient for fetching data from ExchangeRate API
- CORS, Routing, Dependency Injection

### DevOps
- Git + GitHub
- Docker + Docker Compose
- Well-structured folder separation (frontend/backend)


## 🔌 API Documentation

### `GET /api/Currency/supported-currencies`

Returns the list of supported currencies:
```json
["USD", "EUR", "GBP", "CNY", "ILS"]
````

### `GET /api/Currency/exchange-rates?baseCurrency=USD`

Returns the exchange rates for the specified base currency:

```json
{
  "base": "USD",
  "rates": {
    "EUR": 0.91,
    "GBP": 0.78,
    "CNY": 7.24,
    "ILS": 3.61
  }
}
```

---

## 🗂 Project Structure

```
exchange-rates-app/
│
├── frontend/              # React frontend app
│   ├── src/
│   └── Dockerfile
│
├── backend/               # ASP.NET Core 8 Web API
│   ├── Controllers/
│   ├── Services/
│   └── Dockerfile
│
├── docker-compose.yml     # Combined frontend & backend setup
├── HOW_TO_RUN.md          # Full run instructions
└── README.md
```

---

## 📦 Docker Support

* Separate Dockerfiles for frontend and backend
* `docker-compose.yml` to run the entire system with networking
* Includes correct CORS, automatic build, and Nginx for frontend

---

## ▶️ Running the App

For full setup and usage instructions, please refer to the [HOW\_TO\_RUN.md](./HOW_TO_RUN.md) file.

---

## 📎 GitHub Repository

[https://github.com/TsipiW/exchange-rates-app](https://github.com/TsipiW/exchange-rates-app)

---

## 👩‍💻 Developed by

Tsipi Bolvin
[tsw32595@gmail.com](mailto:tsw32595@gmail.com) | +972-55-6728272

```


