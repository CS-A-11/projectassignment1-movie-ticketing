 ## PROJECT TITLE: A Movie Ticketing Management System ##

### GROUP MEMBERS:
1. Sarah  Tahir Bokhari		15L-4093
2. Hamda Naeem			15l-4181
3. Abiha Aftab			16L-4329
4. Muntaha Zaigham		16L-4387
5. Fatima Naseer		16L-4257

### ABOUT:
This project allows a user to buy tickets and reserve different types of seats for various movies at the cinema of their choice, 
and then give ratings based on their experience at different cinemas.

### HOMEPAGE:
https://powerful-lowlands-92082.herokuapp.com/

### USE CASES:
-User can buy tickets for movies
-User can choose cinema of their choice
-User can have a record of their watch history


### SCHEMA:
COLLECTIONS:
1. Time: time, date, reservedS
2. PayHist: CinemaName, MovieName, selectedSeats, seatType, City
3. Watch: CinemaName, MovieName, Schema

## NESTED COLLECTIONS:
1. Movie: ID, title, genre, rating, image, description, timeS[timeSchema]
2. Cinema: ID, name, location, capacity, reserved, goldPrice, silverPrice, rating, image, description, movieList[movieSchema]
3. User: ID, name, password, email, city, watchHist[watchSchema]

### CONTRIBUTIONS:
1. Abiha Aftab 
Ticketing: UI, crud, ajax
2. Muntaha Zaigham
Homepage, Pop: UI, crud, ajax
3. Fatima Naseer
Selection: UI, session management, ajax
4. Hamda Naeem
Payment: UI
Watch History: crud, ajax
5. Sarah Tahir
Watch History: UI, crud, ajax

