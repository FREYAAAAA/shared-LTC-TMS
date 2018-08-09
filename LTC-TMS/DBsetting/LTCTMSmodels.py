#
# Database Models
# author: Mason Hoffman, Nathaniel Yost, Gama F. Ahimsa
# created: 7/23/2018
# latest:
# purpose: Model classes for interaction with SQLAlchemy
#

from database import db
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy import Boolean, DateTime, Column, Integer, \
                       String, ForeignKey, Date
from sqlalchemy.orm import relationship

# Base class inherited by Supervisor and User class
class Base(UserMixin, object):
    """Class that represents a basic person"""
    email = db.Column("email", db.String(255), unique=True, index=True)
    fname = db.Column("fname", db.String(255), index=True)
    lname = db.Column("lname", db.String(255), index=True)
    gender = db.Column("gender", db.String(255), index=True)
    birthday = db.Column("birthday", db.Date, index=True)
    nationalID = db.Column("nationalID", db.String(255), index=True)
    bloodType = db.Column("bloodType", db.String(255), index=True)
    contactno = db.Column("contactno", db.Integer, index=True)
    active = db.Column("active", db.Boolean, index=True)
    isLoggedIn = db.Column("isLoggedIn", db.Boolean, index=True)
    dateCreated = db.Column("dateCreated", db.DateTime, index=True)
    picture = db.Column("picture", db.DateTime, index=True)
    password = db.Column("password", db.String(255), index=True)

    def __init__(self):
        pass

# User account class. Child of Base
class Patient(Base, db.Model):
    """User that is a child of base"""
    __tablename__ = "patients"
    roomno = db.Column("roomno", db.String(255), index=True)
    cnaID = db.Column("cnaID", db.Integer, index=True)
    appointmentRecord = db.Column("appointmentRecord", db.String(255), index=True)
    medicalRecord = db.Column("medicalRecord",db.DateTime, index=True)
    description = db.Column("description",db.String(255), index=True)
    lastActive = db.Column("lastActive",db.DateTime, index=True)
    patientID = db.Column("patientID",db.Integer, primary_key=True)
    role = "patient"

    # patients constructor
    def __init__(self, patientID=None, password=None):
        # Call parent constructor
        super(Patients, self).__init__()
        self.patientID = patientID
        self.password = password
        self.dateCreated = datetime.utcnow()
        self.lastActive = datetime.utcnow()

    # get_id override for userID
    def get_id(self):
        return str(self.patientID)

    # the informal string representation of a user object
    def __repr__(self):
        return '<User %r>' % (self.patientID)

# Stuff class. Child of Base
class Staff(Base, db.Model):
    """Staff that is a child of base"""
    __tablename__ = "staff"
    staffID = db.Column("staffID",db.Integer, primary_key=True)
    position = db.Column("position",db.String(255), index=True)
    cv = db.Column("cv",db.DateTime, index=True)
    license= db.Column("license",db.DateTime, index=True)

    if position == "director":
        role = "director"
    elif position == "CNO":
        role = "CNO"
    else:
        role = "CNA"

    # get_id override for supervisorID
    def get_id(self):
        return str(self.staffID)

    def __init__(self, staffID=None, password=None):
        # Call parent constructor
        super(Staff, self).__init__()
        self.staffID = staffID
        self.password = password
        self.dateCreated = datetime.utcnow()
        self.lastActive = datetime.utcnow()

    def __repr__(self):
        return "<Staff %r>" % (self.staffID)


class Request(db.Model):
    __tablename__= "request"
    requestID= db.Column('requestID', Integer, primary_key=True)
    userID= db.Column('userID', Integer, index=True)
    staffID= db.Column('staffID', Integer, index=True)
    taskID= db.Column('taskID', Integer, index=True)
    requestDescription= db.Column('requestDescription', String(255), index=True)
    isApproved= db.Column('isApproved', Boolean, index=True)
    dateRequested= db.Column('dateRequested', Date, index=True)

    def __init__(self):
        pass

    def __repr__(self):
        return "<Request taskID:%r>" % (self.taskID)


class Task(db.Model):
    """
    Author: David Schaeffer, March 2018 <dscha959@live.kutztown.edu>
    Basic task fields that are used for the Task, Main Steps, and Detailed
    Steps"""
    __tablename__ = 'task'
    taskID = db.Column('taskID', Integer, primary_key=True)
    staffID =db.Column('staffID', Integer)
    title = db.Column('title', String(255))
    description = db.Column('description', String(255))
    activated = db.Column('activated', String(255))
    dateCreated =db.Column('dateCreated', Date)
    dateModified = db.Column('dateModified', Date)
    dateModified = db.Column('dateModified', Date)
    lastUsed = db.Column('lastUsed', DateTime)
    lastUsed = db.Column('lastUsed', DateTime)
    published = db.Column('published', Boolean)
    published = db.Column('published', Boolean)
    image = db.Column('image', String(255))
    image = db.Column('image', String(255))

    def __init__(self, title=None):
        super(Task, self).__init__()
        self.title = title
        self.dateCreated = datetime.utcnow()
        self.dateModified = datetime.utcnow()
        self.lastUsed = datetime.utcnow()


class MainStep(db.Model):
    """
    Author: David Schaeffer, March 2018 <dscha959@live.kutztown.edu>
    """
    __tablename__ = 'mainSteps'
    mainStepID = db.Column('mainStepID', Integer, primary_key=True)
    taskID = db.Column('taskID', Integer)
    title = db.Column('title', String(255))
    requiredInfo = db.Column('requiredInfo', String(255))
    listOrder = db.Column('listOrder', Integer)
    requiredItem = db.Column('requiredItem', String(255))
    stepText = db.Column('stepText', String(255))
    audio = db.Column('audio', String(255))
    image = db.Column('image', String(255))
    video = db.Column('video', String(255))

    def __init__(self, title=None):
        super(MainStep, self).__init__()
        self.title = title


class DetailedStep(db.Model):
    """
    Author: David Schaeffer, March 2018 <dscha959@live.kutztown.edu>
    """
    __tablename__ = 'detailedSteps'
    detailedStepID = db.Column('detailedStepID', Integer, primary_key=True)
    mainStepID = db.Column('mainStepID', Integer)
    title = db.Column('title', String(255))
    stepText = db.Column('stepText', String(255))
    listOrder = db.Column('listOrder', Integer)
    image = db.Column('image', String(255))

    def __init__(self, title=None):
        super(DetailedStep, self).__init__()
        self.title = title


class Keyword(db.Model):
    """
    Author: David Schaeffer, March 2018 <dscha959@live.kutztown.edu>
    """
    __tablename__ = 'keywords'
    keywordID = db.Column('keywordID', Integer, primary_key=True)
    taskID = db.Column('taskID', Integer)
    word = db.Column(String(255))

    def __init__(self, task_id, word):
        self.taskID = task_id
        self.word = word
