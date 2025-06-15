# User API Documentation

## Register User
Register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string", // required, min 3 characters
    "lastname": "string"   // optional, min 3 characters if provided
  },
  "email": "string",      // required, valid email format
  "password": "string"    // required, min 6 characters
}
```

### Response

#### Success Response
- **Status Code**: 201 (Created)
- **Content**:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Error Responses

**Validation Error**
- **Status Code**: 400 (Bad Request)
- **Content**:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name"
    }
  ]
}
```

### Example Requests

**Valid Request**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Example Responses

**Success Response Example**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "507f1f77bcf86cd799439011"
  }
}
```

**Error Response Examples**

Invalid Email:
```json
{
    "errors": [
        {
            "type": "field",
            "value": "23",
            "msg": "Password must be atleast 6 characters long",
            "path": "password",
            "location": "body"
        }
    ]
}
```

### Validation Rules
- Email must be valid
- First name must be at least 3 characters long
- Password must be at least 6 characters long
- All required fields must be provided
