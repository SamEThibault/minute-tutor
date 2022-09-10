To run the backend server:
`cd backend && python -m venv pyenv`

At this point, you will need to add a `.env` file to the /app directory like this:
`
MYSQL_HOST=localhost
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=hackto
`
Use your MySQL server credentials in here, head to the MySQL server, and `CREATE DATABASE hackto;`
To see the user table, run the following commands in the MySQL terminal:
`
use hackto;
select * from user;
`
Then, head to the root directory, and run `./run_backend.sh`
You should be all set.