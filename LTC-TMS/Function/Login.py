#
# Login Verification Functions
# author: Gama F. Ahimsa
# created: 7/23/2018
# latest:
# purpose: hash comparison & login verification (requirement 38)
#

import bcrypt
import database
from DBsetting.LTCTMSmodels import Patient, Staff
from flask_login import login_user
import app

#determined_role="unknown"

# Login Manager id loader. Functions for Superisors
@database.login_manager.user_loader
def load_user(id):
    if ('role' in app.session):
        if (app.session['role']=="director"):
            return Staff.query.get(int(id))
        if (app.session['role']=="CNO"):
            return Staff.query.get(int(id))
    return None


# root function for login verification
def verifyMain(staffID, password):
    acc = requestHash(staffID)
    if acc:
        if acc.password == password:
            login_user(acc)
            return True  # Lets gooooo!
        else:    # the password hash did not match
            print("Invalid password")
    else:        # the user was not found in the table
        print("This account is not yet registered")
    return False # Something was fucked up

# return password hash and salt from database. (salt is stored with the hash)
def requestHash(submittedID):
    p = None
    p = (Staff.query.filter_by(staffID=submittedID).first())
    if (p):
        app.session['role'] = "director"
        return p
    p = (Staff.query.filter_by(staffID=submittedID).first())
    if (p):
        app.session['role'] = "CNO"
        return p
    return None
