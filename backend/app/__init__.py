from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
from app.db import User

load_dotenv()
app = Flask(__name__)
CORS(app)

# check if pw matches db profile, if so, return status code
@app.route("/signin", methods=["POST"])
def signin():
    name = request.form["name"]
    password = request.form["password"]
    user = User.get_or_none(User.username == name)

    if user != None:
        if user.password == password:
            return {"body" : "Login successful", "status" : 200}
        else:
            return {"body" : "Incorrect password, please try again", "status" : 400}

    return {"body" : "Invalid username or password, please try again", "status" : 400}

# check if record exists, if not, create record in db
@app.route("/signup", methods=["POST"])
def signup():
    try:
        print(request)
        name = request.form["name"]
        password = request.form["password"]
    except Exception as e:
        print(e)
        return {"body" : "Error", "status" : 400}

    q = User.select().where(User.username == name)
    # username must be unique, if it already exists, return error
    if q.exists():
        return {"body" : "User already exists!", "status" : 400}
    User.create(username=name, password=password)
    return {"body" : "Success", "status" : 200}

# request contains updated user info, update profile in db 
@app.route("/settings", methods=["POST"])
def settings():
    pass

# receive question field, and return list of tutors that
# are experts in that field
@app.route("/tutors", methods=["POST"])
def tutors():
    pass
