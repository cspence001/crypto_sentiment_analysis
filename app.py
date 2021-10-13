from flask import render_template
from flask import Flask

app = Flask(__name__)


@app.route("/", endpoint='index')
def home():
    return render_template("test2.html")

@app.route("/analysis", endpoint='analysis')
def analysis():
    return render_template("analysis.html")


@app.route("/polarity", endpoint='polarity')
def polarity():
    return render_template("test3.html")

if __name__ == "__main__":
    app.run(debug=True)