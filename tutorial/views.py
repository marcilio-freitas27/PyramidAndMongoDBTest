import pymongo
from pymongo import MongoClient
from pyramid.response import Response
from pyramid.view import view_config
import pprint

# mongo connection
client = MongoClient()
db = client.mydb
collection = db.mydb

# First view, available at http://localhost:6543/
@view_config(route_name='home', renderer='home.pt')
def home(request):
    return { 'name': collection.find_one()['Name'], 'name2': collection.find_one()['Name2'],
             'theme': collection.find_one()['Theme'], 'theme2': collection.find_one()['Theme2'] }

# /howdy
@view_config(route_name='hello', renderer='hello.pt')
def hello(request):
    return { 'name': collection.find_one()['Name'], 'name2': collection.find_one()['Name2'],
             'theme': collection.find_one()['Theme'], 'theme2': collection.find_one()['Theme2'] }
