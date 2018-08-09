import bcrypt
from datetime import datetime
from database import *
from DBsetting.LTCTMSmodels import Staff
from flask import jsonify


def userLogin(staffID, password):

    if staffID is None or password is None:
        return False
    usr = getHash(staffID)
    if usr is not None:
        try:
            if usr.password.encode('utf-8') == bcrypt.hashpw(password.encode('utf-8'), usr.password.encode('utf-8')):
                return True
        except ValueError:
            # Once bcrypt is enable on all passwords this can be removed, at the time of development
            # clear text passwords still existed
            if usr.password.encode('utf-8') == password.encode('utf-8'):
                return True
            return False
    else:
        return False


def getHash(staffID):

    p = None
    p = (Staff.query.filter_by(staffID=staffID).first())
    return p if p else None
