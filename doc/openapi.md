<!-- Generator: Widdershins v4.0.1 -->

<h1 id="assassin-api">ASSASSIN API v1.0.0</h1>

> Scroll down for example requests and responses.

ASSASSIN project API specification

# Authentication

- HTTP Authentication, scheme: Bearer JWT authorization based on a token issued by the login endpoints

- HTTP Authentication, scheme: basic Basic authorization based on a login and password

<h1 id="assassin-api-doctors">doctors</h1>

## get__api_doctors

> Code samples

`GET /api/doctors`

Returns all the doctors

> Example responses

> 200 Response

```json
[]
```

<h3 id="get__api_doctors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of all the doctors|Inline|
|default|Default|Unexpected error|None|

<h3 id="get__api_doctors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__api_doctors

> Code samples

`POST /api/doctors`

Creates a new doctor

<h3 id="post__api_doctors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|Doctor's user id|
|surname|query|string|true|Doctor's surname|

> Example responses

<h3 id="post__api_doctors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_doctors-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get__api_doctors_{id}

> Code samples

`GET /api/doctors/{id}`

Returns a doctor by id

<h3 id="get__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Doctor's id|

> Example responses

<h3 id="get__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="get__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put__api_doctors_{id}

> Code samples

`PUT /api/doctors/{id}`

Updates a doctor

<h3 id="put__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Doctor's id|
|user|query|string|true|Doctor's user id|
|surname|query|string|true|Doctor's surname|

> Example responses

<h3 id="put__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="put__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete__api_doctors_{id}

> Code samples

`DELETE /api/doctors/{id}`

Deletes a doctor

<h3 id="delete__api_doctors_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Doctor's id|

> Example responses

<h3 id="delete__api_doctors_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="delete__api_doctors_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__doctor_signup

> Code samples

`POST /doctor/signup`

Signs up a doctor

<h3 id="post__doctor_signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|Doctor's user id|
|surname|query|string|true|Doctor's surname|
|authInfo|query|object|true|Doctor's auth info|

> Example responses

<h3 id="post__doctor_signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_signup-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None & None & None & None & None
</aside>

## post__doctor_login

> Code samples

`POST /doctor/login`

Logs in a doctor

> Example responses

<h3 id="post__doctor_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_login-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None & None & None & None & None
</aside>

## get__doctor_profile

> Code samples

`GET /doctor/profile`

Returns a doctor's profile

> Example responses

<h3 id="get__doctor_profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="get__doctor_profile-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__doctor_generate-2fa-secret

> Code samples

`POST /doctor/generate-2fa-secret`

Returns a doctor's 2FA secret

> Example responses

<h3 id="post__doctor_generate-2fa-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_generate-2fa-secret-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__doctor_verify-otp

> Code samples

`POST /doctor/verify-otp`

Verifies a doctor's OTP

<h3 id="post__doctor_verify-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otp|query|string|true|Doctor's OTP|

> Example responses

<h3 id="post__doctor_verify-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_verify-otp-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__doctor_login-step2

> Code samples

`POST /doctor/login-step2`

Logs in a doctor with 2FA

<h3 id="post__doctor_login-step2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otp|query|string|true|Doctor's OTP|

> Example responses

<h3 id="post__doctor_login-step2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_login-step2-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None & None & None & None & None
</aside>

## post__doctor_disable-2fa

> Code samples

`POST /doctor/disable-2fa`

Disables a doctor's 2FA

> Example responses

<h3 id="post__doctor_disable-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A doctor|None|
|default|Default|Unexpected error|None|

<h3 id="post__doctor_disable-2fa-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="assassin-api-hospitals">hospitals</h1>

## get__api_hospitals

> Code samples

`GET /api/hospitals`

Returns all the hospitals

> Example responses

> 200 Response

```json
[]
```

<h3 id="get__api_hospitals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of all the hospitals|Inline|
|default|Default|Unexpected error|None|

<h3 id="get__api_hospitals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__api_hospitals

> Code samples

`POST /api/hospitals`

Creates a new hospital

<h3 id="post__api_hospitals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Hospital's name|
|role|query|string|true|Hospital's role|
|authInfo|query|object|true|Hospital's auth info|
|address|query|object|true|Hospital's address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|hospital|

> Example responses

<h3 id="post__api_hospitals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A hospital|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_hospitals-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get__api_hospitals_{id}

> Code samples

`GET /api/hospitals/{id}`

Returns a hospital by id

<h3 id="get__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Hospital's id|

> Example responses

<h3 id="get__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A hospital|None|
|default|Default|Unexpected error|None|

<h3 id="get__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put__api_hospitals_{id}

> Code samples

`PUT /api/hospitals/{id}`

Updates a hospital

<h3 id="put__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Hospital's id|
|name|query|string|true|Hospital's name|
|role|query|string|true|Hospital's role|
|authInfo|query|object|true|Hospital's auth info|
|address|query|object|true|Hospital's address|
|twofaEnabled|query|boolean|true|Hospital's 2FA enabled|
|twofaSecret|query|string|true|Hospital's 2FA secret|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|hospital|

> Example responses

<h3 id="put__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A hospital|None|
|default|Default|Unexpected error|None|

<h3 id="put__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete__api_hospitals_{id}

> Code samples

`DELETE /api/hospitals/{id}`

Deletes a hospital

<h3 id="delete__api_hospitals_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Hospital's id|

> Example responses

<h3 id="delete__api_hospitals_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A hospital|None|
|default|Default|Unexpected error|None|

<h3 id="delete__api_hospitals_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="assassin-api-orders">orders</h1>

## post__api_patient_results

> Code samples

`POST /api/patient/results`

Creates a new order

<h3 id="post__api_patient_results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|string|true|Patient's id|
|doctor|query|string|true|Doctor's id|
|hospital|query|string|true|Hospital's id|
|results|query|object|true|Order's results|

> Example responses

<h3 id="post__api_patient_results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An order|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_patient_results-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get__api_patient_results_{id}

> Code samples

`GET /api/patient/results/{id}`

Returns a patient's result by id

<h3 id="get__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Order's id|

> Example responses

<h3 id="get__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An order|None|
|default|Default|Unexpected error|None|

<h3 id="get__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete__api_patient_results_{id}

> Code samples

`DELETE /api/patient/results/{id}`

Deletes a patient's result

<h3 id="delete__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Order's id|

> Example responses

<h3 id="delete__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An order|None|
|default|Default|Unexpected error|None|

<h3 id="delete__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put__api_patient_results_{id}

> Code samples

`PUT /api/patient/results/{id}`

Updates a patient's result

<h3 id="put__api_patient_results_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Order's id|
|patient|query|string|true|Patient's id|
|doctor|query|string|true|Doctor's id|
|hospital|query|string|true|Hospital's id|
|results|query|object|true|Order's results|

> Example responses

<h3 id="put__api_patient_results_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An order|None|
|default|Default|Unexpected error|None|

<h3 id="put__api_patient_results_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="assassin-api-patients">patients</h1>

## get__api_patients

> Code samples

`GET /api/patients`

Returns all the patients

> Example responses

> 200 Response

```json
[]
```

<h3 id="get__api_patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of all the patients|Inline|
|default|Default|Unexpected error|None|

<h3 id="get__api_patients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__api_patients

> Code samples

`POST /api/patients`

Creates a new patient

<h3 id="post__api_patients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Patient's name|
|surname|query|string|true|Patient's surname|
|authInfo|query|object|true|Patient's auth info|
|twofaEnabled|query|boolean|true|Patient's 2FA enabled|
|twofaSecret|query|string|true|Patient's 2FA secret|

> Example responses

<h3 id="post__api_patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_patients-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get__api_patients_{id}

> Code samples

`GET /api/patients/{id}`

Returns a patient by id

<h3 id="get__api_patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Patient's id|

> Example responses

<h3 id="get__api_patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="get__api_patients_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put__api_patients_{id}

> Code samples

`PUT /api/patients/{id}`

Updates a patient

<h3 id="put__api_patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Patient's id|
|name|query|string|true|Patient's name|
|surname|query|string|true|Patient's surname|
|authInfo|query|object|true|Patient's auth info|
|twofaEnabled|query|boolean|true|Patient's 2FA enabled|
|twofaSecret|query|string|true|Patient's 2FA secret|

> Example responses

<h3 id="put__api_patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="put__api_patients_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__api_patient_signup

> Code samples

`POST /api/patient/signup`

Signs up a patient

<h3 id="post__api_patient_signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Patient's name|
|surname|query|string|true|Patient's surname|
|authInfo|query|object|true|Patient's auth info|

> Example responses

<h3 id="post__api_patient_signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_patient_signup-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None & None & None & None & None
</aside>

## post__api_patient_login

> Code samples

`POST /api/patient/login`

Logs in a patient

> Example responses

<h3 id="post__api_patient_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__api_patient_login-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None & None & None & None & None
</aside>

## get__api_patient_profile

> Code samples

`GET /api/patient/profile`

Returns a patient's profile

> Example responses

<h3 id="get__api_patient_profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="get__api_patient_profile-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__patient_generate-2fa-secret

> Code samples

`POST /patient/generate-2fa-secret`

Returns a patient's 2FA secret

> Example responses

<h3 id="post__patient_generate-2fa-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__patient_generate-2fa-secret-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__patient_verify-otp

> Code samples

`POST /patient/verify-otp`

Verifies a patient's OTP

<h3 id="post__patient_verify-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otp|query|string|true|Patient's OTP|

> Example responses

<h3 id="post__patient_verify-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__patient_verify-otp-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post__patient_login-step2

> Code samples

`POST /patient/login-step2`

Logs in a patient with 2FA

<h3 id="post__patient_login-step2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otp|query|string|true|Patient's OTP|

> Example responses

<h3 id="post__patient_login-step2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__patient_login-step2-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__patient_disable-2fa

> Code samples

`POST /patient/disable-2fa`

Disables a patient's 2FA

> Example responses

<h3 id="post__patient_disable-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A patient|None|
|default|Default|Unexpected error|None|

<h3 id="post__patient_disable-2fa-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

# Schemas

<h2 id="tocS_doctor">doctor</h2>
<!-- backwards compatibility -->
<a id="schemadoctor"></a>
<a id="schema_doctor"></a>
<a id="tocSdoctor"></a>
<a id="tocsdoctor"></a>

```json
{
  "id": 0,
  "user": "string",
  "surname": "string",
  "hospitals": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|user|string(ref)|false|none|none|
|surname|string|false|none|none|
|hospitals|[string]|false|none|none|

<h2 id="tocS_hospital">hospital</h2>
<!-- backwards compatibility -->
<a id="schemahospital"></a>
<a id="schema_hospital"></a>
<a id="tocShospital"></a>
<a id="tocshospital"></a>

```json
{
  "id": 0,
  "name": "string",
  "role": "hospital",
  "authInfo": {
    "login": "string",
    "password": "string"
  },
  "orders": [
    "string"
  ],
  "doctors": [
    "string"
  ],
  "address": {
    "street": "string",
    "city": "string",
    "zipCode": "string"
  },
  "twofaEnabled": true,
  "twofaSecret": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|role|string|false|none|none|
|authInfo|object|false|none|none|
|» login|string|false|none|none|
|» password|string|false|none|none|
|orders|[string]|false|none|none|
|doctors|[string]|false|none|none|
|address|object|false|none|none|
|» street|string|false|none|none|
|» city|string|false|none|none|
|» zipCode|string|false|none|none|
|twofaEnabled|boolean|false|none|none|
|twofaSecret|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|hospital|

<h2 id="tocS_order">order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": 0,
  "patient": "string",
  "doctor": "string",
  "hospital": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "editedAt": "2019-08-24T14:15:22Z",
  "results": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|patient|string(ref)|false|none|none|
|doctor|string(ref)|false|none|none|
|hospital|string(ref)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|editedAt|string(date-time)|false|none|none|
|results|object|false|none|none|

<h2 id="tocS_patient">patient</h2>
<!-- backwards compatibility -->
<a id="schemapatient"></a>
<a id="schema_patient"></a>
<a id="tocSpatient"></a>
<a id="tocspatient"></a>

```json
{
  "name": "string",
  "surname": "string",
  "authInfo": {
    "login": "string",
    "password": "pa$$word"
  },
  "twofaEnabled": true,
  "twofaSecret": "string",
  "orders": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|surname|string|false|none|none|
|authInfo|object|false|none|none|
|» login|string|false|none|none|
|» password|string(password)|false|none|none|
|twofaEnabled|boolean|false|none|none|
|twofaSecret|string|false|none|none|
|orders|[string]|false|none|none|

