# School Management API

A REST API built using Node.js, Express.js, and MySQL for managing school data.

## Features

- Add schools
- Store school location using latitude & longitude
- Fetch all schools
- Sort schools based on distance
- Clean MVC folder structure

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Postman

---

# Folder Structure

```bash
schoolproject/
│
├── config/
│   ├── db.js
│   └── init.js
│
├── controllers/
│   └── schoolcontrol.js
│
├── Routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distanceCalc.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

---

# Installation

## Clone Repository

```bash
git clone <your-github-link>
```

## Install Dependencies

```bash
npm install
```

## Run Server

```bash
npm start
```

or

```bash
node index.js
```

---

# Environment Variables

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schooldb
PORT=3000
```

---

# Database Setup

```sql
CREATE DATABASE schooldb;

USE schooldb;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);
```

---

# API Endpoints

## Add School

### POST

```http
/schoolapi/schooladd
```

### Request Body

```json
{
  "name": "Green Valley Public School",
  "address": "Lucknow",
  "latitude": 26.8467,
  "longitude": 80.9462
}
```

---

## Get School List

### GET

```http
/schoolapi/schoollist?latitude=26.8467&longitude=80.9462
```

Returns schools sorted by nearest distance.

---

# Example Response

```json
{
  "schools": [
    {
      "id": 1,
      "name": "Green Valley Public School",
      "address": "Lucknow",
      "latitude": 26.8467,
      "longitude": 80.9462,
      "distance": 0
    }
  ]
}
```

---

# Testing

API tested using Postman.

---

# Author

Talha Malik  
B.Tech Electronics Engineering Student  
KNIT Sultanpur
