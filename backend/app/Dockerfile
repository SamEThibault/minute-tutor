FROM python:3.9-slim-buster

WORKDIR /minute-tutor/backend

COPY . .
# COPY requirements.txt .
ENV FLASK_APP=app.py
RUN pip3 install -r requirements.txt

COPY . .

COPY . /app

CMD ["flask", "run", "--host=0.0.0.0"]

EXPOSE 5000
