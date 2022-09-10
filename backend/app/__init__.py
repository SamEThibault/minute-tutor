from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

# check if pw matches db profile, if so, return status code
@app.route("/signin", ["POST"])
def signin():
    pass

# check if record exists, if not, create record in db
@app.route("/signup", ["POST"])
def signup():
    pass

# request contains updated user info, update profile in db 
@app.route("/settings", ["POST"])
def settings():
    pass

# receive question field, and return list of tutors that
# are experts in that field
@app.route("/tutors", ["POST"])
def tutors():
    pass
