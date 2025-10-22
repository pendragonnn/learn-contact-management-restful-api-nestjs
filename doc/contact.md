# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
  "first_name" : "Mamang",
  "last_name" : "Kesbor",
  "email" : "mamang@example.com",
  "phone" : "0869696969"
}
```

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Mamang",
    "last_name" : "Kesbor",
    "email" : "mamang@example.com",
    "phone" : "0869696969"
  }
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Headers :
- Authorization : token

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Mamang",
    "last_name" : "Kesbor",
    "email" : "mamang@example.com",
    "phone" : "0869696969"
  }
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Headers :
- Authorization : token

Request Body :

```json
{
  "first_name" : "Mamang",
  "last_name" : "Kesbor",
  "email" : "mamang@example.com",
  "phone" : "0869696969"
}
```

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Mamang",
    "last_name" : "Kesbor",
    "email" : "mamang@example.com",
    "phone" : "0869696969"
  }
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

Headers :
- Authorization : token

Respone Body :

```json
{
  "data" : true
}
```

## Search Contact

Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query Params :
- name: string, contact first name or contact last name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
- page: number, default 1
- size: number, default 10

Respone Body :

```json
{
  "data" : [
    {
      "id" : 1,
      "first_name" : "Mamang",
      "last_name" : "Kesbor",
      "email" : "mamang@example.com",
      "phone" : "0869696969"
    },
    {
      "id" : 2,
      "first_name" : "fajar",
      "last_name" : "Kren",
      "email" : "fajar@example.com",
      "phone" : "0869696969"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```