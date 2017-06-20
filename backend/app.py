from flask import Flask


app = Flask(__name__)


@app.route("/<string:number>")
def hello(number):

    data = number.split("&")
    numero1 = int(data[0])
    numero2 = int(data[1])
    return str(numero1+numero2)


if __name__ == "__main__":
    app.run()
