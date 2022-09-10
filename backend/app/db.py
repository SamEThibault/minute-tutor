import os
from peewee import *
from dotenv import load_dotenv

load_dotenv()

db = MySQLDatabase(
    os.getenv("MYSQL_DATABASE"),
    user=os.getenv("MYSQL_USER"),
    password=os.getenv("MYSQL_PASSWORD"),
    host=os.getenv("MYSQL_HOST"),
    port=3306
)
print(db)

class User(Model):
    password = CharField()
    username = CharField()
    age = IntegerField(default=0)
    zoomLink = CharField()
    userType = CharField()
    # for tags, it's all in a string, separated by commas
    tags = CharField()
    gender = CharField()
    language = CharField()
    expertise = CharField()
    email = CharField()
    ratingSum = IntegerField(default=0)
    ratingNum = IntegerField(default=0)
    rating = IntegerField(default=0)
    available = CharField(default="yes")
    credentials = CharField()

    class Meta:
        database = db

db.connect()
db.create_tables([User])