#!/bin/bash

rm db.sqlite3
rm -rf ./mtgconnectapi/migrations
python manage.py makemigrations mtgconnectapi
python manage.py migrate
python manage.py migrate mtgconnectapi
python manage.py loaddata users
python manage.py loaddata tokens
python manage.py loaddata formats
python manage.py loaddata decks
python manage.py loaddata posts
python manage.py loaddata comments

