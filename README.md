# PyramidAndMongoDBTest

* Task for a Job. 

# Info

## MongoDB

* It's necessary download a MongoDB 3.9.0, but you can chance the values in tutorial/views.py in lines that contains ``return {"name" : collection.find_one(["Name])`` , home.pt, hello.pt and others  because this files and line getting information of the db and collection in mongo. 
* See the tutorial/views.py. This file was used to create some data in mongo. I try to generate a project with pyramid_mongodb but the incompatibility of the pyramid, mongodb versions, so less and old informations not help me.
* to connects use localhost:27017. It's the defaulf conf and without auth.
* This is the dict that contains in databases *mydb* and collection *mydb*:

```

{
   "id": 1, 
   "Name": "Beatles", 
   "Theme": "Rock",
   "id": 2, 
   "Name": "Vardoger", 
   "Theme": "Metal"
}

```

## Python and Pyramid

* Create a virtualenv with Python 3.6, enter in virtualenv folder and git clone this repository.
* Typing *cd sitethumbs* and in this folder run *pip install -e .* to download all of python requirements for this project.
* Finnaly, execute *pserve development --reload* to run pyramid server.
* http://localhost:6543\ it's the default address to acess the firs page. It's contais the Thumbs up and downs count.
* http://localhost:6543\howdy it's the second. Contains the list of themes and try counts.
