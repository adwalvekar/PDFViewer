from flask import Flask,render_template
import json
import os
app = Flask(__name__)

@app.route('/')
def index():
	path = "static/pdf/"
	a = os.listdir(path)
	a.remove(".DS_Store")
	text = json.dumps(sorted(a))
	return render_template("index.html", contents = text)

if __name__=='__main__':
	app.run(debug=True)