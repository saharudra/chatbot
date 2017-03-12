import pyrebase
import time

def push_message(msg):
    config = {
        "apiKey": "AIzaSyDObJ_Z67rfwIvLccUmcx7_OYFctA0ZYiM",
        "authDomain": "dotslash-41901.firebaseapp.com",
        "databaseURL": "https://dotslash-41901.firebaseio.com",
        "storageBucket": "dotslash-41901.appspot.com",
        "messagingSenderId": "519125585412"
    }

    firebase = pyrebase.initialize_app(config)
    auth = firebase.auth()
    user = auth.sign_in_with_email_and_password("prakhar.kh91@gmail.com", "abcdef")
    db = firebase.database()

    db.child("messages").push({
        "displayName": "bot",
        "email": "bot@dotslash.com",
        "message": msg,
        "timestamp": int(time.time()*1000)
    }, user['idToken'])

push_message("This is test 8")
