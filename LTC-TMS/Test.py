from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MySQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'icac104104'
app.config['MYSQL_DB'] = 'test1'
app.config['MYSQL_CURSORCLASS'] = 'DictCrusor'

mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connect.cursor()
    cur.execute('SELECT * FROM example ')
    rv = cur.fetchall()
    return '<h1>' + str(rv) + '</h1>'


if __name__ =='__main__':
    app.run(port=80, host="0.0.0.0")
