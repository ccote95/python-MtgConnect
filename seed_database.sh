#!/bin/bash

rm db.sqlite3
rm -rf ./mtgconnectapi/migrations
python manage.py migrate
python manage.py makemigrations mtgconnectapi
python manage.py migrate mtgconnectapi
python manage.py loaddata users
python manage.py loaddata tokens

