from flask import render_template, request, jsonify, redirect,url_for, flash, session, json

from app import app
from DBsetting.LTCTMSforms import DetailedStep, MainStep, EditSenior, EditSuper, AddUser, AssignUser, \
    CreateTaskForm, LoginForm, TaskAssignmentForm
from Function import Api, Login
from database import *

from flask_login import current_user, login_required, logout_user
from DBsetting.LTCTMSmodels import Task, Patient, Staff, Request
from datetime import datetime, timedelta
from flask_weasyprint import HTML, render_pdf
import weasyprint
from flask_mail import Message

@app.route('/', methods = ['GET'])
def index():
    return redirect("login", code=302)

@app.route('/api/user/login', methods=['POST'])
def api_login():
    ID = request.form.get('ID')
    password = request.form.get('password')
    if success is False:
        return jsonify({'d': 'sign in failed'})
    else:
        return jsonify({'d': 'sign in success'})

@app.route('/api/user/GetByUser/<uname>', methods=['GET'])
def api_getbyuser(uname):
    r = Api.getByUser(uname)
    return jsonify([r])

@app.route('/login', methods=['POST','GET'])
def login():
    lForm = LoginForm()
    if lForm.validate_on_submit():
        if Login.verifyMain(lForm.staffID.data, lForm.password.data):
            print("login sucessful")
            return render_template("Hello.html", code=302)
        else:
            print("login failed, try again")
    # form submission was invalid
    if lForm.errors:
        for error_field, error_message in lForm.errors.items():
            print("Field : {field}; error : {error}".format(field=error_field, error=error_message))
    return render_template('login.html', form=lForm)
