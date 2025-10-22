# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan Contoh, optional", 
  "city" : "City, optional",
  "province" : "Province, optional",
  "country" : "Country",
  "postal_code": "242424"
}
```

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional", 
    "city" : "City, optional",
    "province" : "Province, optional",
    "country" : "Country",
    "postal_code": "242424"
  }
}
```

## Get Address

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional", 
    "city" : "City, optional",
    "province" : "Province, optional",
    "country" : "Country",
    "postal_code": "242424"
  }
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan Contoh, optional", 
  "city" : "City, optional",
  "province" : "Province, optional",
  "country" : "Country",
  "postal_code": "242424"
}
```

Respone Body :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional", 
    "city" : "City, optional",
    "province" : "Province, optional",
    "country" : "Country",
    "postal_code": "242424"
  }
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Respone Body :

```json
{
  "data" : true
}
```

## List Addresses

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Respone Body :

```json
{
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan Contoh, optional", 
      "city" : "City, optional",
      "province" : "Province, optional",
      "country" : "Country",
      "postal_code": "242424"
    },
    {
      "id" : 1,
      "street" : "Jalan Contoh, optional", 
      "city" : "City, optional",
      "province" : "Province, optional",
      "country" : "Country",
      "postal_code": "242424"
    }
  ]
}
```