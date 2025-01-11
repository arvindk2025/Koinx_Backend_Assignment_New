# KoinX Backend Assignment 
This project is a server-side application that allows users: 
1. To fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and storing it in a database. This job is running once every 2 hours.
2. To fetch the latest data about the requested cryptocurrency.
- Req Params:
  ```
   {
	   coin: `bitcoin`          // Could be one of the above 3 coins
   }
  ```
- Sample Response:
  ```
   {
	  price: 40000,
	  marketCap: 800000000,
	  "24hChange": 3.4
  }
  ```
3. Run an API, ``` /deviation ```, that will return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database. :-
- Req Params:
  ```
   {
	    coin: `bitcoin`          // Could be one of the above 3 coins
   }
  ```
- Sample Response:
  ```
  {
     deviation: 4082.48
  }
  ```

---

## Important Links:- 

| Project Hosted Link on Render |https://koinx-backend-assignment-new.onrender.com|
|---|---|

--- 

## Task 1: 
#### Implement a background job that will fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and store it in a database. This job should run once every 2 hours.
- Sample Data that are fetched from following coingecko API and strored in MongoDB database and updating every 2 hours.
  ```
   CoinGecko API  =   https://api.coingecko.com/api/v3/coins/markets
  ```
- **`bitcoin` data**
  
   ![Koinx_Backend_Assignment](./assets/task1.2.png?raw=true "Koinx_Backend_Assignment")

- **`matic-network` data**
  
   ![Koinx_Backend_Assignment](./assets/task1.3.png?raw=true "Koinx_Backend_Assignment")

- **`ethereum` data**
  
   ![Koinx_Backend_Assignment](./assets/task1.1.png?raw=true "Koinx_Backend_Assignment")

  ---

## Task 2: Get the latest stats for a specific cryptocurrency

#### Implement an API /stats, that will return the latest data about the requested cryptocurrency.
### API EndPoint 
```
https://koinx-backend-assignment-new.onrender.com/stats?coin=bitcoin
```
### PostMan Testing Response for Task-2
![Koinx_Backend_Assignment](./assets/task2.1.png?raw=true "Koinx_Backend_Assignment")

---

## Task 3: Calculate standard deviation for a specific cryptocurrency upto 100 data
#### Implement an API, /deviation, that will return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database.
### API EndPoint 
```
https://koinx-backend-assignment-new.onrender.com/deviation?coin=bitcoin
```
### PostMan Testing Response for Task-3
![Koinx_Backend_Assignment](./assets/task3.1.png?raw=true "Koinx_Backend_Assignment")

--- 

#  Testing: 
### For Testing this Server App in POSTMAN use following URL

- **Task-2** : GET request to fetch the latest stats for a specific cryptocurrency
  
```
http://localhost:8800/stats?coin=bitcoin
```

- **Task-3** : GET request to fetch the standard deviation for a specific cryptocurrency
  
```
http://localhost:8800/deviation?coin=bitcoin
```

# Or 

##  Testing: 
### For Testing this Server App using Deployed Link in POSTMAN use following URL
### Note: On Render, Because of inactivity, only the first response may sometimes take nearly up to 1 minute.

- **Task-2** : GET request to fetch the latest stats for a specific cryptocurrency
```
https://koinx-backend-assignment-new.onrender.com/stats?coin=bitcoin
```
- **Task-3** : GET request to fetch the standard deviation for a specific cryptocurrency
```
https://koinx-backend-assignment-new.onrender.com/deviation?coin=bitcoin
```
---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Coingecko API
- Render
- MongoDB Atlas
- POSTMAN
- Cors
- Axios
- node-cron ( for sheduling job every 2 hours ) 

--- 
# Installation & Steps to Run the Project Locally
1. Download or Clone the repository:
```
 git clone https://github.com/arvindk2025/Koinx_Backend_Assignment_New.git
```

2. Install all the required dependencies:
```
 npm install
```

3. Connect the MongoDB database by adding the Connection URL and PORT to the .env file (you can use MongoDB Atlas or Compass) : 
 ```
MONGODB_URL = paste your MONGODB connection string 
PORT = 8800
```
4. Finally, Run the project:
```
 npm run start
```
Or
```
npm run dev
```

