from flask import render_template
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():

    return render_template("test2.html")


if __name__ == "__main__":
    app.run(debug=True)