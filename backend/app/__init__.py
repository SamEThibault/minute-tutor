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
    username = request.form["username"]
    password = request.form["password"]
    user = User.get_or_none(User.username == username)

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
        username = request.form["username"]
        password = request.form["password"]
    except Exception as e:
        print(e)
        return {"body" : "Error", "status" : 400}

    q = User.select().where(User.username == username)
    # username must be unique, if it already exists, return error
    if q.exists():
        return {"body" : "User already exists!", "status" : 400}
    User.create(username=username, password=password)
    return {"body" : "Success", "status" : 200}

# request contains updated user info, update profile in db 
@app.route("/settings", methods=["POST"])
def settings():
    try:
        username = request.form["username"]
        age = request.form["age"]
        zoomLink = request.form["zoomLink"]
        userType = request.form["userType"]
        tags = request.form["tags"]
        gender = request.form["gender"]
        language = request.form["language"]
        expertise = request.form["expertise"]
        email = request.form["email"]
        rating = request.form["rating"]

        user = User.update(
            age = age,
            zoomLink = zoomLink,
            userType = userType,
            tags = tags,
            gender = gender,
            language = language,
            expertise = expertise,
            email = email,
            rating = rating
        ).where(User.username == username)
        user.execute()

        return {"body" : "Information updated.", "status" : 200}
    except:
        return {"body" : "Update error, try again", "status" : 400}

# receive question subject, and return JSON object of
#  list of tutors that are experts in that field
@app.route("/tutors", methods=["POST"])
def tutors():
    subject = request.form["subject"]
    tutors_list = []

    for user in User.select():
        if user.userType == "tutor" and subject in user.expertise:
            tutors_list.append(
                {"username" : user.username,
                "age" : user.age,
                "zoomLink" : user.zoomLink,
                "userType": user.userType,
                "tags": user.tags,
                "gender": user.gender,
                "language": user.language,
                "expertise": user.expertise,
                "rating": user.rating}
            )

    print(tutors_list)
    return {"tutors": tutors_list}
