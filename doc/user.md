# User Api Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "Mamanh_Kesbor",
  "password" : "secret",
  "name" : "Mamang Kesbor"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "Mamanh_Kesbor",
    "name" : "Mamang Kesbor"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "Mamanh_Kesbor",
  "password" : "secret",
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "Mamanh_Kesbor",
    "name" : "Mamang Kesbor",
    "token" : "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers: 
- authorization: token

Response Body (Success) :

```json
{
  "data" : {
    "username" : "Mamanh_Kesbor",
    "name" : "Mamang Kesbor"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers: 
- authorization: token

Request Body :

```json
{
  "password" : "secret", // optional
  "name" : "Mamang Kesbor" // optional
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "Mamanh_Kesbor",
    "name" : "Mamang Kesbor"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username already registered"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- authorization: token


Response Body (Success) :

```json
{
  "data" : true
}
```