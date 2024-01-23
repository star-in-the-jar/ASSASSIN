<!-- Generator: Widdershins v4.0.1 -->

<h1 id="assassin-api">Assassin-API v1.0.0</h1>

> Scroll down for example requests and responses.

Assassin-API docs for internal purposes. Throught the docs "orders" and "blood test results" are used interchangebly.

<h1 id="assassin-api-patient">Patient</h1>

## get__api_patients

> Code samples

`GET /api/patients`

*Returns all patients*

Retrieve a list of patients from the database

> Example responses

> 200 Response

```json
[
  {
    "_id": "65a83f0fb19b10f86719f4d2",
    "name": "John",
    "surname": "Doe",
    "twofaEnabled": false,
    "twofaSecret": "",
    "orders": [],
    "authInfo": {
      "login": "johnDoe",
      "password": "hashedpassword"
    }
  },
  {
    "_id": "65a83f0fb19b178d32423",
    "name": "Jane",
    "surname": "Doe",
    "twofaEnabled": false,
    "twofaSecret": "",
    "orders": [],
    "authInfo": {
      "login": "JaneDoe",
      "password": "hashedpassword"
    }
  }
]
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_patients-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_patients

> Code samples

`POST /api/patients`

*Creates a new patient*

Sends the data needed to create a Patient object in the database.

> Body parameter

```json
{}
```

> Example responses

> 201 Response

```json
[
  {
    "message": "Patient created successfully",
    "patient": {
      "_id": "65a83f0fb19b10f86719f4d2",
      "name": "John",
      "surname": "Doe",
      "twofaEnabled": false,
      "twofaSecret": "",
      "orders": [],
      "authInfo": {
        "login": "johnDoe",
        "password": "hashedpassword"
      }
    }
  }
]
```

> 400 Response

```json
{
  "message": "Patient already exists"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Patient of given login already exists|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_patients-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_patients_{id}

> Code samples

`GET /api/patients/{id}`

*Returns patient by ID*

Retrieve a patient by their ID from the database

<h3 id="get__api_patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the patient|

> Example responses

> 200 Response

```json
{
  "_id": "65a83f0fb19b10f86719f4d2",
  "name": "John",
  "surname": "Doe",
  "twofaEnabled": false,
  "twofaSecret": "",
  "orders": [],
  "authInfo": {
    "login": "johnDoe",
    "password": "hashedpassword"
  }
}
```

> 400 Response

```json
{
  "message": "Invalid ObjectId format for patient id."
}
```

> 404 Response

```json
{
  "message": "Patient not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID format|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Patient does not exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_patients_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__api_patients_{id}

> Code samples

`PUT /api/patients/{id}`

*Edits a patient's data*

Update a Patient object in the database with provided data

> Body parameter

```json
{}
```

<h3 id="put__api_patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the patient|

> Example responses

> 200 Response

```json
{
  "_id": "65a83f0fb19b10f86719f4d2",
  "name": "John",
  "surname": "Doe",
  "twofaEnabled": false,
  "twofaSecret": "",
  "orders": [],
  "authInfo": {
    "login": "updatedJohnDoe",
    "password": "updated-hashed-password"
  }
}
```

> 400 Response

```json
{
  "message": "Patient with this login already exists"
}
```

> 404 Response

```json
{
  "message": "Patient not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="put__api_patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Patient of this login already exists|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Patient does not exists|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="put__api_patients_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## delete__api_patients_{id}

> Code samples

`DELETE /api/patients/{id}`

*Deletes a patient*

Delete a patient object from the database

<h3 id="delete__api_patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the patient|

> Example responses

> 200 Response

```json
{
  "message": "Patient deleted successfully",
  "patient": {
    "_id": "65a83f0fb19b10f86719f4d2",
    "name": "John",
    "surname": "Doe",
    "twofaEnabled": false,
    "twofaSecret": "",
    "orders": [],
    "authInfo": {
      "login": "JohnDoe",
      "password": "hashed-password"
    }
  }
}
```

> 404 Response

```json
{
  "message": "Patient not found"
}
```

<h3 id="delete__api_patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Patient not found|None|

<h3 id="delete__api_patients_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="assassin-api-orders">Orders</h1>

## post__api_patient_results

> Code samples

`POST /api/patient/results`

*Creates a new blood test result associated with a patient.*

Create an Order object in the database associated with a Doctor, Hospital and Patient object

> Body parameter

```json
{}
```

> Example responses

> 201 Response

```json
{
  "message": "Results added successfully",
  "order": {
    "hospital": "612345678901234567890123",
    "doctor": "612345678901234567890124",
    "patient": "612345678901234567890125",
    "results": {
      "wbc": "value_here",
      "rbc": "value_here",
      "hct": "value_here",
      "mcv": "value_here",
      "mch": "value_here",
      "plt": "value_here",
      "mpv": "value_here",
      "rdw": "value_here",
      "pdw": "value_here",
      "hemoglobin": "value_here"
    },
    "_id": "65a94dc3139f4dfa3287f39c",
    "createdAt": "2024-01-18T16:11:47.875Z",
    "__v": 0
  }
}
```

> 400 Response

```json
{
  "message": "Invalid ObjectId format for hospital, doctor, or patient."
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_patient_results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ObjectId for either patient, hospital or doctor|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_patient_results-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_patient_results_{id}

> Code samples

`GET /api/patient/results/{id}`

*Get a blood test result*

Fetch an Order object from the database

<h3 id="get__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the blood test order|

> Example responses

> 201 Response

```json
{
  "message": "Order details retrieved successfully",
  "order": {
    "results": {
      "wbc": "value_here",
      "rbc": "value_here",
      "hct": "value_here",
      "mcv": "value_here",
      "mch": "value_here",
      "plt": "value_here",
      "mpv": "value_here",
      "rdw": "value_here",
      "pdw": "value_here",
      "hemoglobin": "value_here"
    },
    "_id": "65a94dc3139f4dfa3287f39c",
    "hospital": "612345678901234567890123",
    "doctor": "612345678901234567890124",
    "patient": "612345678901234567890125",
    "createdAt": "2024-01-18T16:11:47.875Z",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Order not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__api_patient_results_{id}

> Code samples

`PUT /api/patient/results/{id}`

*Edits blood test results of a patient.*

Updates an Order object from the database with the given data

> Body parameter

```json
{}
```

<h3 id="put__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the blood test order|

> Example responses

> 201 Response

```json
{
  "message": "Order updated successfully",
  "order": {
    "hospital": "612345678901234567890123",
    "doctor": "612345678901234567890124",
    "patient": "612345678901234567890125",
    "results": {
      "wbc": "new_value_here",
      "rbc": "new_value_here",
      "hct": "new_value_here",
      "mcv": "new_value_here",
      "mch": "new_value_here",
      "plt": "new_value_here",
      "mpv": "value_here",
      "rdw": "value_here",
      "pdw": "value_here",
      "hemoglobin": "value_here"
    },
    "_id": "65a94dc3139f4dfa3287f39c",
    "createdAt": "2024-01-18T16:11:47.875Z",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Order not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="put__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="put__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## delete__api_patient_results_{id}

> Code samples

`DELETE /api/patient/results/{id}`

*Delete a blood test result entry*

Delete an Order object with given ID from the database.

<h3 id="delete__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the blood test order|

> Example responses

> 201 Response

```json
{
  "message": "Order deleted successfully",
  "order": {
    "results": {
      "wbc": "value_here",
      "rbc": "value_here",
      "hct": "value_here",
      "mcv": "value_here",
      "mch": "value_here",
      "plt": "value_here",
      "mpv": "value_here",
      "rdw": "value_here",
      "pdw": "value_here",
      "hemoglobin": "value_here"
    },
    "_id": "65a9aa3ddaea919ba1583025",
    "hospital": "612345678901234567890123",
    "doctor": "612345678901234567890124",
    "patient": "612345678901234567890125",
    "createdAt": "2024-01-18T22:46:21.425Z",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Order not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="delete__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="delete__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="assassin-api-hospitals">Hospitals</h1>

## get__api_hospitals

> Code samples

`GET /api/hospitals`

*Returns all hospitals*

Retrieve a list of hospitals from the database

> Example responses

> 200 Response

```json
{
  "hospitals": [
    {
      "authInfo": {
        "login": "hospitarname",
        "password": "hospital_password"
      },
      "address": {
        "street": "Hospital Street",
        "zipCode": "12345",
        "city": "Hospital City"
      },
      "_id": "65a83eaab19b10f86719f4c6",
      "name": "Hospital",
      "role": "hospital",
      "orders": [],
      "doctors": [],
      "twofaEnabled": false,
      "twofaSecret": "",
      "__v": 0
    },
    {
      "authInfo": {
        "login": "hospital_username",
        "password": "hospital_password"
      },
      "address": {
        "street": "Hospital Street",
        "zipCode": "12345",
        "city": "Hospital City"
      },
      "_id": "65a89954ac80626f106e8756",
      "name": "Hospital",
      "role": "hospital",
      "orders": [],
      "doctors": [],
      "twofaEnabled": false,
      "twofaSecret": "",
      "__v": 0
    },
    {
      "authInfo": {
        "login": "hospital_username",
        "password": "$2b$10$xTQiuwpMuY9OFLF0Cf/gseTj9b9JKzrTtIKLBBc39fBkNYTs1UXcm"
      },
      "address": {
        "street": "Hospital Street",
        "zipCode": "12345",
        "city": "Hospital City"
      },
      "_id": "65a94abbab5657895f9c872d",
      "name": "Hospital-test",
      "role": "hospital",
      "orders": [],
      "doctors": [],
      "twofaEnabled": false,
      "twofaSecret": "",
      "__v": 0
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_hospitals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_hospitals-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_hospitals

> Code samples

`POST /api/hospitals`

*Creates a new hospital*

Sends the data needed to create a Hospital object in the database.

> Body parameter

```json
{}
```

> Example responses

> 201 Response

```json
{
  "message": "Hospital created successfully",
  "hospital": {
    "name": "Hospital",
    "role": "hospital",
    "authInfo": {
      "login": "hospital_username",
      "password": "$2b$10$lfHngDO/oWMOynTnD53CVOoNu2i9BxOrl3vB7N1GUSvNS0lgdHF86"
    },
    "orders": [],
    "doctors": [],
    "address": {
      "street": "Hospital Street",
      "zipCode": "12345",
      "city": "Hospital City"
    },
    "twofaEnabled": false,
    "twofaSecret": "",
    "_id": "65a94dd8139f4dfa3287f3a3",
    "__v": 0
  }
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_hospitals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_hospitals-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_hospitals_{id}

> Code samples

`GET /api/hospitals/{id}`

*Returns a hospital by ID*

Retrieve a hospital by their ID from the database

<h3 id="get__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the hospital|

> Example responses

> 200 Response

```json
{
  "hospital": {
    "authInfo": {
      "login": "hospital_username",
      "password": "$2b$10$lfHngDO/oWMOynTnD53CVOoNu2i9BxOrl3vB7N1GUSvNS0lgdHF86"
    },
    "address": {
      "street": "Hospital Street",
      "zipCode": "12345",
      "city": "Hospital City"
    },
    "_id": "65a94dd8139f4dfa3287f3a3",
    "name": "Hospital",
    "role": "hospital",
    "orders": [],
    "doctors": [],
    "twofaEnabled": false,
    "twofaSecret": "",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Hospital not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hospital does not exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__api_hospitals_{id}

> Code samples

`PUT /api/hospitals/{id}`

*Edits a hospital's data*

Update a Hospital object in the database with provided data

> Body parameter

```json
{}
```

<h3 id="put__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the hospital|

> Example responses

> 200 Response

```json
{
  "message": "Hospital updated successfully",
  "hospital": {
    "name": "Hospital",
    "role": "hospital",
    "authInfo": {
      "login": "hospital_usernam",
      "password": "hospital_password"
    },
    "address": {
      "street": "Hospital Street",
      "zipCode": "12345",
      "city": "Hospital City"
    },
    "_id": "65a94dd8139f4dfa3287f3a3",
    "orders": [],
    "doctors": [],
    "twofaEnabled": false,
    "twofaSecret": "",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Hospital not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="put__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hospital does not exists|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="put__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## delete__api_hospitals_{id}

> Code samples

`DELETE /api/hospitals/{id}`

*Deletes a hospital*

Delete a Hospital object from the database

<h3 id="delete__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the hospital|

> Example responses

> 200 Response

```json
{
  "message": "Hospital deleted successfully",
  "hospital": {
    "authInfo": {
      "login": "hospital_usernam",
      "password": "hospital_password"
    },
    "address": {
      "street": "Hospital Street",
      "zipCode": "12345",
      "city": "Hospital City"
    },
    "_id": "65a94dd8139f4dfa3287f3a3",
    "name": "Hospital",
    "role": "hospital",
    "orders": [],
    "doctors": [],
    "twofaEnabled": false,
    "twofaSecret": "",
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Hospital not found"
}
```

<h3 id="delete__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hospital does not exist|None|

<h3 id="delete__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="assassin-api-doctors">Doctors</h1>

## get__api_doctors

> Code samples

`GET /api/doctors`

*Returns all doctors*

Retrieve a list of doctors from the database

> Example responses

> 200 Response

```json
[
  {
    "_id": "65a83f0fb19d10g06719f4d2",
    "surname": "Smith",
    "hospitals": [
      "65a83eaab19b10f86719f4c6"
    ],
    "__v": 0
  },
  {
    "_id": "65a83f0fb19d10g06719f4d2",
    "surname": "Doe",
    "hospitals": [],
    "__v": 0
  }
]
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_doctors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_doctors-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_doctors

> Code samples

`POST /api/doctors`

*Creates a new doctor*

Sends the data needed to create a Doctor object in the database.

> Body parameter

```json
{}
```

> Example responses

> 201 Response

```json
[
  {
    "message": "Doctor created or updated successfully",
    "doctor": {
      "_id": "65a83f0fb19b10f86719f4d2",
      "surname": "Doe",
      "hospitals": [],
      "__v": 0
    }
  }
]
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_doctors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_doctors-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_doctors_{id}

> Code samples

`GET /api/doctors/{id}`

*Returns doctor by ID*

Retrieve a doctor by their ID from the database

<h3 id="get__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the doctor|

> Example responses

> 200 Response

```json
{
  "_id": "65a83f0fb19b10f86719f4d2",
  "surname": "Doe",
  "hospitals": [],
  "__v": 0
}
```

> 404 Response

```json
{
  "message": "Doctor not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="get__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Doctor does not exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="get__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__api_doctors_{id}

> Code samples

`PUT /api/doctors/{id}`

*Edits a doctors's data*

Update a Doctor object in the database with provided data

> Body parameter

```json
{}
```

<h3 id="put__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the doctor|

> Example responses

> 200 Response

```json
[
  {
    "message": "Doctor updated successfully",
    "doctor": {
      "_id": "65a83f0fb19b10f86719f4d2",
      "surname": "Doe",
      "hospitals": [
        "65b99f0sb29b10f86779f4d6"
      ],
      "__v": 0
    }
  }
]
```

> 404 Response

```json
{
  "message": "Doctor not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="put__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Doctor does not exists|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="put__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## delete__api_doctors_{id}

> Code samples

`DELETE /api/doctors/{id}`

*Deletes a doctor*

Delete a Doctor object from the database

<h3 id="delete__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the doctor|

> Example responses

> 200 Response

```json
{
  "message": "Doctor deleted successfully",
  "deletedDoctor": {
    "_id": "65a83f0fb19b10f86719f4d2",
    "surname": "Doe",
    "hospitals": [],
    "__v": 0
  }
}
```

> 404 Response

```json
{
  "message": "Doctor not found"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="delete__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Doctor not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="delete__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="assassin-api-auth-experimental-">Auth (experimental)</h1>

## post__api_{person}_signup

> Code samples

`POST /api/{person}/signup`

*Signup route for doctors and patients*

Signup for doctors or patients

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "Login successful",
  "user": {
    "login": "johnDoe"
  }
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful signup|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_signup-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_login

> Code samples

`POST /api/{person}/login`

*Login route for doctors and patients*

Login for doctors or patients

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "Login successful",
  "twofaEnabled": false,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvZ2luIjoiOEVTVElORzIzNDM0MzI0MjMifSwiaWF0IjoxNzA1NTkzNzIzfQ.aKD_odtRJAjtL64ng9s_peAtP72yOjPQoc2trlZS0Lo"
}
```

> 401 Response

```json
{
  "message": "Invalid login or password"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful login|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid login or password|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_login-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_generate-2fa-secret

> Code samples

`POST /api/{person}/generate-2fa-secret`

*Generate 2FA secret token*

Generate 2FA secret token for a patient or a doctor, used when turning on the 2FA login

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_generate-2fa-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": ""
}
```

> 400 Response

```json
{
  "message": "2FA already verified and enabled"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_generate-2fa-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful login|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|2FA already activated|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_generate-2fa-secret-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_verify-otp

> Code samples

`POST /api/{person}/verify-otp`

*Verify OTP code for a user*

Checks if OTP given by the user is correct for their account

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_verify-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "OTP verification successful",
  "twofaEnabled": true
}
```

> 400 Response

```json
{
  "message": "OTP verification failed: Invalid token"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_verify-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OTP verification successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad token|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_verify-otp-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_login-step2

> Code samples

`POST /api/{person}/login-step2`

*Verify 2FA user data for log in purposes*

Verifies user's 2FA login token and 2FA code for log in purposes

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_login-step2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "OTP verification successful",
  "token": "signed-token"
}
```

> 400 Response

```json
{
  "message": "OTP verification failed: Invalid token"
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_login-step2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OTP verification successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad token|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_login-step2-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_disable-2fa

> Code samples

`POST /api/{person}/disable-2fa`

*Disables 2FA login for a given user*

Deletes user 2FA login token and disables the route

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_disable-2fa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "2FA disabled successfully",
  "twofaEnabled": false
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_disable-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|2FA disabled sucessfully|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_disable-2fa-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_{person}_profile

> Code samples

`POST /api/{person}/profile`

*Displays user data*

Return user data associated with given JWT token

> Body parameter

```json
{}
```

<h3 id="post__api_{person}_profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person|path|string|true|Type of person (doctor or patient)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|person|doctor|
|person|patient|

> Example responses

> 200 Response

```json
{
  "message": "Success",
  "user": {
    "_id": "65a83f0fb19b10f86719f4d2",
    "name": "John",
    "surname": "Doe",
    "twofaEnabled": false,
    "twofaSecret": "",
    "orders": [],
    "authInfo": {
      "login": "johnDoe",
      "password": "hashedpassword"
    }
  }
}
```

> 500 Response

```json
{
  "message": "Internal server error"
}
```

<h3 id="post__api_{person}_profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|2FA disabled sucessfully|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<h3 id="post__api_{person}_profile-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Doctor">Doctor</h2>
<!-- backwards compatibility -->
<a id="schemadoctor"></a>
<a id="schema_Doctor"></a>
<a id="tocSdoctor"></a>
<a id="tocsdoctor"></a>

```json
{
  "id": "ObjectId('65a94efafe2e74635b1c60b9')",
  "surname": "Doe",
  "hospitals": [
    {
      "id": "ObjectId('65a94efafe2e74635b1c60b9')",
      "name": "Szpital Kliniczny",
      "role": "string",
      "authInfo": {
        "login": "abc123",
        "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
      }
    }
  ]
}

```

Model of a doctor, stores list of hospitals the doctor currently resides at.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|surname|string|false|none|none|
|hospitals|[[Hospital](#schemahospital)]|false|none|[Model of a hospital]|

<h2 id="tocS_Hospital">Hospital</h2>
<!-- backwards compatibility -->
<a id="schemahospital"></a>
<a id="schema_Hospital"></a>
<a id="tocShospital"></a>
<a id="tocshospital"></a>

```json
{
  "id": "ObjectId('65a94efafe2e74635b1c60b9')",
  "name": "Szpital Kliniczny",
  "role": "string",
  "authInfo": {
    "login": "abc123",
    "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
  }
}

```

Model of a hospital

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|role|string|false|none|none|
|authInfo|object|false|none|none|
|» login|string|false|none|none|
|» password|string(hashed)|false|none|none|

<h2 id="tocS_Patient">Patient</h2>
<!-- backwards compatibility -->
<a id="schemapatient"></a>
<a id="schema_Patient"></a>
<a id="tocSpatient"></a>
<a id="tocspatient"></a>

```json
{
  "id": "ObjectId('65a94efafe2e74635b1c60b9')",
  "name": "John",
  "surname": "Doe",
  "authInfo": {
    "login": "abc123",
    "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
  },
  "twofaEnabled": false,
  "twofaSecret": "",
  "orders": [
    {
      "id": "ObjectId('65a94efafe2e74635b1c60b9')",
      "doctor": {
        "id": "ObjectId('65a94efafe2e74635b1c60b9')",
        "surname": "Doe",
        "hospitals": [
          {
            "id": "ObjectId('65a94efafe2e74635b1c60b9')",
            "name": "Szpital Kliniczny",
            "role": "string",
            "authInfo": {
              "login": "abc123",
              "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
            }
          }
        ]
      },
      "hospital": {
        "id": "ObjectId('65a94efafe2e74635b1c60b9')",
        "name": "Szpital Kliniczny",
        "role": "string",
        "authInfo": {
          "login": "abc123",
          "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
        }
      },
      "patient": {
        "id": "ObjectId('65a94efafe2e74635b1c60b9')",
        "name": "John",
        "surname": "Doe",
        "authInfo": {
          "login": "abc123",
          "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
        },
        "twofaEnabled": false,
        "twofaSecret": "",
        "orders": []
      },
      "createdAt": "01-01-2024",
      "editedAt": "01-01-2024",
      "result": {}
    }
  ]
}

```

Model of a patient, stores their orders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|surname|string|false|none|none|
|authInfo|object|false|none|none|
|» login|string|false|none|none|
|» password|string(hashed)|false|none|none|
|twofaEnabled|boolean|false|none|none|
|twofaSecret|string|false|none|none|
|orders|[[Order](#schemaorder)]|false|none|[Model of an order (blood test)]|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": "ObjectId('65a94efafe2e74635b1c60b9')",
  "doctor": {
    "id": "ObjectId('65a94efafe2e74635b1c60b9')",
    "surname": "Doe",
    "hospitals": [
      {
        "id": "ObjectId('65a94efafe2e74635b1c60b9')",
        "name": "Szpital Kliniczny",
        "role": "string",
        "authInfo": {
          "login": "abc123",
          "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
        }
      }
    ]
  },
  "hospital": {
    "id": "ObjectId('65a94efafe2e74635b1c60b9')",
    "name": "Szpital Kliniczny",
    "role": "string",
    "authInfo": {
      "login": "abc123",
      "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
    }
  },
  "patient": {
    "id": "ObjectId('65a94efafe2e74635b1c60b9')",
    "name": "John",
    "surname": "Doe",
    "authInfo": {
      "login": "abc123",
      "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
    },
    "twofaEnabled": false,
    "twofaSecret": "",
    "orders": [
      {
        "id": "ObjectId('65a94efafe2e74635b1c60b9')",
        "doctor": {
          "id": "ObjectId('65a94efafe2e74635b1c60b9')",
          "surname": "Doe",
          "hospitals": [
            {
              "id": "ObjectId('65a94efafe2e74635b1c60b9')",
              "name": "Szpital Kliniczny",
              "role": "string",
              "authInfo": {
                "login": "abc123",
                "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
              }
            }
          ]
        },
        "hospital": {
          "id": "ObjectId('65a94efafe2e74635b1c60b9')",
          "name": "Szpital Kliniczny",
          "role": "string",
          "authInfo": {
            "login": "abc123",
            "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
          }
        },
        "patient": {},
        "createdAt": "01-01-2024",
        "editedAt": "01-01-2024",
        "result": {}
      }
    ]
  },
  "createdAt": "01-01-2024",
  "editedAt": "01-01-2024",
  "result": {}
}

```

Model of an order (blood test)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|doctor|[Doctor](#schemadoctor)|false|none|Model of a doctor, stores list of hospitals the doctor currently resides at.|
|hospital|[Hospital](#schemahospital)|false|none|Model of a hospital|
|patient|[Patient](#schemapatient)|false|none|Model of a patient, stores their orders.|
|createdAt|string|false|none|none|
|editedAt|string|false|none|none|
|result|object|false|none|none|
|» results|[object]|false|none|none|
|»» wbc|string|false|none|none|
|»» rbc|string|false|none|none|
|»» hct|string|false|none|none|
|»» mcv|string|false|none|none|
|»» mch|string|false|none|none|
|»» plt|string|false|none|none|
|»» mpv|string|false|none|none|
|»» rdw|string|false|none|none|
|»» pdw|string|false|none|none|
|»» hemoglobin|string|false|none|none|

