# PokeBlog_API
Pokemon Blog backend, used to create Pokemon themed blogs where users can show off all the Pokemon they've caught. Now with full CRUD comment functionality.

# Routes

## GET /blog

 index route, displays all blogs in the mongo database

## GET /blog/:id
show route, finds a specific blog using the ID of the DB entry. You can see all blog ids via the above index route

## POST /blog
create route, uses passed through JSON to initialiaze a blog.

blog model used in the creation:

    name: {type:String, default: "Anonymous PokeBlogger"},
    avatar: String,
    about: String,
    caughtPokemon: [String],
    isAdmin: {type:Boolean, default: false},


Example JSON:
```JSON
    {
        "name": "Michael",
        "avatar": "https://static.wikia.nocookie.net/pokemon/images/6/6d/Ash_anime_Journeys.png/revision/latest?cb=20191027002145",
        "about": "Hi guys, my name is Michael and my favorite pokemon is Eevee!",
        "caughtPokemon": ["Eevee", "Squirtle", "Geodude"]
    }
```
## GET /comment
index route, displays all comments across the database, used for debugging or moderation purposes.

## GET /comment/:blodid
index route, displays all comments found under a specific blog.

## POST /comment
create route, uses passed through JSON to add a comment

comment model:

    username: {type: String, default: "Anonymous"},
    time: {type: Date, default: Date.now},
    content: String,
    blogid: {type: Schema.Types.ObjectId, ref: 'Blog'},

Example JSON, blog id can be found via a GET request in /blog:
```JSON
    {
        "blogid": "615b6864064f52184e60dde8",
        "content": "Woah you got a Bulbasaur! I'm so jealous!"
    }
```
## DELETE /comment/:id
deletes a comment using the DB id

## UPDATE /comment/:id
updates a comment using the DB id and passed through JSON in the format of the comment model found above.




