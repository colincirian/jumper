from flask import Flask

app = Flask(__name__)

# API Route

@app.route("/home")
def home():
    return {"character": ["char1", "char2", "char3"]}

if __name__ == "__main__":
    app.run(debug=True)
