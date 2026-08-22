# CINERUSH – Developer Setup Guide

This guide explains how to set up and run the **CINERUSH Online Movie Ticket Booking System** on a local Windows computer.

## 1. Prerequisites

Before running CINERUSH, make sure the following software is installed:

### Required Software

* **Node.js** – Required to run the backend server and install dependencies.
* **npm** – Comes automatically with Node.js.
* **MySQL Server** – Required for the CINERUSH database.
* **MySQL Workbench** – Used to create and manage the database.
* **Git** – Recommended for downloading/cloning the project.
* **Web Browser** – Chrome, Edge, Firefox, etc.
* **Visual Studio Code** – Recommended for development.

> **Important:** You do NOT need to install JavaScript separately. JavaScript runs in the browser, while Node.js is used to run the CINERUSH backend.

---

# 2. Download the Project

Clone the CINERUSH repository using Git:

```bash
git clone https://github.com/BGARMY/CINERUSH.git
```

Then open the project folder:

```bash
cd CINERUSH
```

You can also download the project as a ZIP file from GitHub and extract it.

---

# 3. Project Structure

The project should contain folders similar to:

```text
CINERUSH/
│
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── pages/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── ...
│
├── database/
│   └── ...
│
└── README.md
```

---

# 4. Install Node.js

Download and install Node.js on your computer.

After installation, open **Command Prompt** or **PowerShell** and verify:

```bash
node -v
```

Then:

```bash
npm -v
```

If both commands display version numbers, Node.js and npm are installed correctly.

---

# 5. Set Up MySQL

Make sure the following are installed and running:

* MySQL Server
* MySQL Workbench

Open **MySQL Workbench** and connect to your local MySQL server.

Create the CINERUSH database:

```sql
CREATE DATABASE cinerush;
```

Select the database:

```sql
USE cinerush;
```

---

# 6. Import the CINERUSH Database

If the project contains an SQL database file, for example:

```text
database/cinerush.sql
```

open it in MySQL Workbench and execute the complete SQL script.

The script should create the required CINERUSH tables such as:

```text
users
movies
showtimes
seats
bookings
```

and any other tables required by the application.

After importing the database, verify:

```sql
SHOW DATABASES;
```

Then:

```sql
USE cinerush;
SHOW TABLES;
```

Make sure the required tables are displayed.

---

# 7. Configure Backend Environment Variables

Go to the backend folder:

```bash
cd backend
```

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=cinerush
DB_PORT=3306

JWT_SECRET=YOUR_SECRET_KEY
```

Replace:

```text
YOUR_MYSQL_PASSWORD
```

with your actual MySQL password.

Do not upload the `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
node_modules/
```

---

# 8. Install Backend Dependencies

Open a terminal inside the `backend` folder:

```bash
cd backend
```

Run:

```bash
npm install
```

This installs all packages specified in `package.json`.

Wait until the installation completes successfully.

---

# 9. Start the Backend Server

After installing the dependencies, start the backend:

```bash
npm start
```

If the project uses a different start script, check `package.json`:

```json
"scripts": {
    "start": "node server.js"
}
```

A successful startup should display something similar to:

```text
Server running on port 5000
Database connected successfully
```

Keep this terminal running.

> **Important:** Do not close the backend terminal while using CINERUSH.

---

# 10. Open CINERUSH

Once the backend server is running, open your browser.

Use:

```text
https://localhost:5000/cinerush/pages/splash.html
```

If your local server is configured for HTTP instead of HTTPS, use:

```text
http://localhost:5000/cinerush/pages/splash.html
```

The CINERUSH splash page should load.

---

# 11. Test the Database Connection

After opening CINERUSH, test the application by:

1. Registering a new user.
2. Logging in.
3. Checking the movie list.
4. Opening a movie.
5. Selecting a date.
6. Selecting a showtime.
7. Selecting seats.
8. Completing the test booking.
9. Checking the generated ticket.
10. Checking the booking history.

If movies are not displayed, verify that the backend is connected to the correct database.

Run:

```sql
USE cinerush;
SELECT * FROM movies;
```

Make sure the movie records exist.

---

# 12. Common Problems

## Problem 1 – `npm is not recognized`

Install Node.js and restart your terminal.

Verify:

```bash
node -v
npm -v
```

---

## Problem 2 – MySQL Connection Error

Check your `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=cinerush
DB_PORT=3306
```

Also make sure MySQL Server is running.

---

## Problem 3 – Database Not Found

If you see an error similar to:

```text
Unknown database 'cinerush'
```

create the database:

```sql
CREATE DATABASE cinerush;
```

Then import the CINERUSH SQL file.

---

## Problem 4 – Movies Are Not Showing

Check the database:

```sql
USE cinerush;

SELECT * FROM movies;
```

If there are no records, insert/import the movie data required by the project.

Also verify that the backend is using:

```env
DB_NAME=cinerush
```

and not another database such as:

```env
DB_NAME=defaultdb
```

---

## Problem 5 – Port 5000 Already in Use

If port 5000 is already being used by another application, stop that application or change the backend port.

For example:

```env
PORT=5001
```

Then use:

```text
http://localhost:5001/cinerush/pages/splash.html
```

---

## Problem 6 – `localhost:5000` Does Not Open

Make sure the backend is running:

```bash
npm start
```

Do not close the terminal.

Then try:

```text
http://localhost:5000/cinerush/pages/splash.html
```

---

# 13. Recommended Development Workflow

Every time you want to work on CINERUSH:

### Terminal 1 – Backend

```bash
cd CINERUSH/backend
npm install
npm start
```

### Browser

Open:

```text
http://localhost:5000/cinerush/pages/splash.html
```

You normally only need to run `npm install` the first time, or whenever `package.json` changes.

---

# 14. Important Security Instructions

Never upload the following to GitHub:

```text
.env
database passwords
JWT secrets
API keys
private certificates
```

Use `.gitignore`:

```gitignore
node_modules/
.env
*.log
```

For development, use your own local database credentials.

---

# 15. Quick Setup

For developers who already have Node.js and MySQL installed:

```bash
git clone https://github.com/BGARMY/CINERUSH.git
cd CINERUSH/backend
npm install
```

Configure:

```text
backend/.env
```

Create/import the:

```text
cinerush
```

database in MySQL.

Then start the backend:

```bash
npm start
```

Finally open:

```text
http://localhost:5000/cinerush/pages/splash.html
```

---

# 16. CINERUSH Setup Checklist

* [ ] Install Node.js
* [ ] Verify `node -v`
* [ ] Verify `npm -v`
* [ ] Install MySQL Server
* [ ] Install MySQL Workbench
* [ ] Clone/download CINERUSH
* [ ] Create the `cinerush` database
* [ ] Import the CINERUSH SQL database
* [ ] Configure `backend/.env`
* [ ] Open terminal in `backend`
* [ ] Run `npm install`
* [ ] Run `npm start`
* [ ] Open the CINERUSH URL
* [ ] Test registration/login
* [ ] Test movie listings
* [ ] Test seat selection
* [ ] Test booking
* [ ] Test ticket generation

---

## Final Requirement

The CINERUSH application requires **both the backend server and MySQL database** to be available.

```text
Browser
   │
   ▼
CINERUSH Frontend
   │
   ▼
Node.js + Express Backend
   │
   ▼
MySQL Database
```

If the backend is not running or the database is not configured correctly, CINERUSH will not function properly.
