from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
from db import User

load_dotenv()
app = Flask(__name__, static_url_path="", static_folder='./build', template_folder='build')
CORS(app)

# Serve Build folder
@app.route("/", methods=['GET'])
def frontend():
    return app.send_static_file('index.html')


# check if pw matches db profile, if so, return status code
@app.route("/signin", methods=["POST"])
def signin():
    username = request.form["username"]
    password = request.form["password"]
    user = User.get_or_none(User.username == username)

    if user != None:
        if user.password == password:
            tags = user.tags.split(",")
            print(tags)
            if user.userType == "tutor":
                return {"body": "Login Successful", "userType" : user.userType, "status" : 200, "info": 
                {"username" : user.username,
                    "age" : user.age,
                    "zoomLink" : user.zoomLink,
                    "userType": user.userType,
                    "tags": tags,
                    "gender": user.gender,
                    "language": user.language,
                    "expertise": user.expertise,
                    "email": user.email,
                    "rating": user.rating}}
            else:
                return {"body": "Login Successful", "status": 220}
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
        userType = request.form["userType"]

    except Exception as e:
        print(e)
        return {"body" : "Error", "status" : 400}

    q = User.select().where(User.username == username)
    # username must be unique, if it already exists, return error
    if q.exists():
        return {"body" : "User already exists!", "status" : 400}
    User.create(username=username, password=password, userType = userType)
    return {"body" : "Success", "status" : 200}

# request contains updated user info, update profile in db 
@app.route("/settings", methods=["POST"])
def settings():
    try:
        username = request.form["username"]
        age = request.form["age"]
        zoomLink = request.form["zoomLink"]
        tags = request.form["tags"]
        gender = request.form["gender"]
        language = request.form["language"]
        expertise = request.form["expertise"]
        email = request.form["email"]
        
        user = User.update(
            age = age,
            zoomLink = zoomLink,
            tags = tags,
            gender = gender,
            language = language,
            expertise = expertise,
            email = email
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
        if user.userType == "tutor" and subject in user.expertise and user.available == "yes":
            
            tags = user.tags.split(",")
            print(tags)
            
            tutors_list.append(
                {"username" : user.username,
                "age" : user.age,
                "zoomLink" : user.zoomLink,
                "userType": user.userType,
                "tags": tags,
                "gender": user.gender,
                "language": user.language,
                "expertise": user.expertise,
                "rating": user.rating}
            )

    #print(tutors_list)
    return {"tutors": tutors_list}

# update a tutor's rating
@app.route("/ratings", methods=["POST"])
def ratings():
    
    newRating = int(request.form["rating"])
    username = request.form["username"]

    # find the user using the name, then add newRating to their current sumRating
    tutor = User.get_or_none(User.username == username)

    if tutor != None:
        user = User.update(
            ratingSum = tutor.ratingSum + newRating,
            ratingNum = tutor.ratingNum + 1,
        ).where(User.username == username)
        user.execute()

        user = User.get_or_none(User.username == username)
        rating = user.ratingSum // user.ratingNum
        user = User.update(
            rating = rating
        )
        user.execute()

        return {"rating" : rating}
    
# when student requests the tutor
@app.route("/requesttutor", methods=["POST"])
def request_tutor():
    username = request.form["username"]
    try:
        user = User.update(
            available = "no"
        ).where(User.username == username)
        user.execute()

        return {"body": "success", "status": 200}
    except:
        return {"body": "failed", "status": 400}

# called when the tutor closes the session (from a button or smt)
@app.route("/closesession", methods=["POST"])
def close_session():
    username = request.form["username"]
    try:
        user = User.update(
        available = "yes"
        ).where(User.username == username)
        user.execute()

        return {"body": "success", "status": 200}
    except:
        return {"body": "L", "status": 400}

# get the status of the tutor (fetched every 5 seconds)
@app.route("/checkstatus", methods=["POST"])
def check_status():
    user = User.get_or_none(User.username == request.form["username"])
    if user != None:
        if user.available == "no":
            return {"body" : "A student has requested your assistance", "status" : 400}
    
    return {"body" : "Feel free to relax", "status" : 200}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
