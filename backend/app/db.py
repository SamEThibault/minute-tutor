import os
from peewee import *
from dotenv import load_dotenv

load_dotenv()

db = SqliteDatabase('.minute-tutor.db')

class User(Model):
    password = CharField()
    username = CharField()
    age = IntegerField(default=0)
    zoomLink = CharField(default="https://zoom.us")
    userType = CharField()
    # for tags, it's all in a string, separated by commas
    tags = CharField(default="defaulttags")
    gender = CharField(default="default")
    language = CharField(default="english")
    expertise = CharField(default="default")
    email = CharField(default="email")
    ratingSum = IntegerField(default=0)
    ratingNum = IntegerField(default=0)
    rating = IntegerField(default=0)
    available = CharField(default="yes")
    credentials = CharField(default="default")

    class Meta:
        database = db

db.connect()
db.create_tables([User])
