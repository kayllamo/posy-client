This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Posy

Posy is a simple diary app that helps you release your collection of thoughts to make room for positivity. 

DEMO: https://posy-client.kaylajaograham.now.sh/

Server-repo: https://github.com/kaylajaograham/posy-server

## Tech Stack
React JS, HTML, CSS, Node, Express, Postgres

## Screenshots

### Landing:
<img width="362" alt="home" src="https://user-images.githubusercontent.com/35277690/71794667-679d2180-2ff7-11ea-896f-0bd240ffb36e.png">


### Dashboard:
<img width="367" alt="dashboard" src="https://user-images.githubusercontent.com/35277690/71794648-5522e800-2ff7-11ea-8d07-b6817a575226.png">

### New Log:
<img width="361" alt="newLog" src="https://user-images.githubusercontent.com/35277690/71794661-610eaa00-2ff7-11ea-9be8-b615103ac67c.png">

### API ENDPOINTS AND DOCUMENTATION 

https://serene-mountain-83160.herokuapp.com/api/users<br>
https://serene-mountain-83160.herokuapp.com/api/logs<br>
https://serene-mountain-83160.herokuapp.com/api/auth

```conf
# GET all logs --> https://serene-mountain-83160.herokuapp.com/api/logs
# -- Response body -- 
    {
        "id": 1,
        "log_name": "Welcome to Posy! ",
        "log_date": "2020-01-07T05:49:56.123Z",
        "log_entry": "Enjoy our demo! Click around. Create a log, edit a log, and delete a log. "
    }

# POST new log --> https://serene-mountain-83160.herokuapp.com/api/logs
# -- Example raw body JSON -- 
    {
        "log_name": "Happy New Year! ",
        "log_date": "2020-01-01T05:49:56.123Z",
        "log_entry": "So happy to start my new goals for 2020 "
    }

# PATCH existing log --> https://serene-mountain-83160.herokuapp.com/api/logs/2
# -- Example raw body JSON -- 
    {
        "log_name": "It's a new year. Yay 2020! ",
        "log_entry": "Should I start a 30 day challenge?"
    }

# DELETE existing log #3 --> https://serene-mountain-83160.herokuapp.com/api/logs/3
```