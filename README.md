# TradeFlow — Full-Stack Equity Trading & Portfolio Platform

TradeFlow is an end-to-end investment and trading ecosystem inspired by Zerodha Kite. Built as a multi-client monorepo, it features a marketing & landing application, an interactive trading dashboard with real-time portfolio analytics, and a RESTful backend handling positions, holdings, and order executions.

---

## 📌 Architecture & Modules

The repository is structured into three core micro-applications:

- **`frontend/`**: Public-facing marketing portal including product showcases, pricing breakdowns, authentication entry points, and automated unit testing suites.
- **`dashboard/`**: The investor console featuring real-time market watchlists, portfolio holdings visualization (Doughnut charts), order history, and position tracking.
- **`backend/`**: Node.js/Express REST API powering stock quotes, order settlement, portfolio calculations, and database persistence.

---

## 🛠️ Tech Stack

- **Client Architectures:** React.js, React Router, Context API / Redux, Material-UI, Bootstrap
- **Data Visualization:** Chart.js, React-ChartJS-2
- **Testing & Quality Assurance:** Jest, React Testing Library
- **Server & Persistence:** Node.js, Express.js, MongoDB / Mongoose
- **Tooling & Environments:** Git, npm, VS Code

---

## 🚀 Key Features

- **Dynamic Watchlist & Market Insights:** Track live equities, view pricing spreads, and inspect instrument details.
- **Interactive Portfolio Analytics:** Visual asset allocations rendered via dynamic doughnut and performance charts.
- **Order Placement & Management:** Execute buy/sell market orders with instantaneous balance and positions updates.
- **Component Unit Testing:** Frontend components verified with Jest and React Testing Library (`@testing-library/react`).

---

## 💻 Local Setup & Installation

### 1. Clone the repository
```bash
git clone [https://github.com/saumil100504/KiteNest-Trading-Platform.git](https://github.com/saumil100504/KiteNest-Trading-Platform.git)
cd KiteNest-Trading-Platform




# KiteNest — Full-Stack Equity Trading & Portfolio Platform

> 🚀 **Live Deployments:**
> - **Landing Portal:** [https://kitenest-frontend.onrender.com](https://kitenest-frontend.onrender.com)
> - **Trading Dashboard:** [https://kitenest-dashboard.onrender.com](https://kitenest-dashboard.onrender.com)
> - **Backend API:** [https://kitenest-backend.onrender.com](https://kitenest-backend.onrender.com)