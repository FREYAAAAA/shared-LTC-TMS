from flask import Flask, session
from flask_cors import CORS # Needed for API requests
# from flask_debugtoolbar import DebugToolbarExtension
# from flask_sslify import SSLify


app = Flask(__name__)
app.config.from_object('config')
CORS(app)  # This allows Cross site access. Temp solution
# sslify = SSLify(app)

# the toolbar is only enabled in debug mode:
app.debug = True
# set a 'SECRET_KEY' to enable the Flask session cookies
# app.config['SECRET_KEY'] = 'nunyabusiness'
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# app.config['DEBUG_TB_PROFILER_ENABLED'] = True
# toolbar = DebugToolbarExtension(app)
