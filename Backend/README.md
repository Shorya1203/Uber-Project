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

## Login User
Login an existing user.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "string",      // required, valid email format
  "password": "string"    // required, min 6 characters
}
```

### Response

#### Success Response
- **Status Code**: 200 (OK)
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

**Authentication Error**
- **Status Code**: 401 (Unauthorized)
- **Content**:
```json
{
  "message": "Invalid Email or password"
}
```

**Validation Error**
- **Status Code**: 400 (Bad Request)
- **Content**:
```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid-email",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

### Example Requests

**Valid Login Request**
```json
{
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

**Error Response Example**
```json
{
  "message": "Invalid Email or password"
}
```

### Validation Rules
- Email must be valid
- Password must be at least 6 characters long

## Get User Profile
Get the profile information of the authenticated user.

### Endpoint
```
GET /users/profile
```

### Request
- Method: GET
- No request body required

### Headers Required
```
Authorization: Bearer <JWT_TOKEN>
```
or
```
Cookie: token=<JWT_TOKEN>
```

### Response

#### Success Response
- **Status Code**: 200 (OK)
- **Content**:
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "_id": "string",
  "socketId": "string"
}
```

#### Error Responses

**Authentication Error**
- **Status Code**: 401 (Unauthorized)
- **Content**:
```json
{
  "message": "Access denied. No token provided."
}
```

**User Not Found**
- **Status Code**: 404 (Not Found)
- **Content**:
```json
{
  "message": "User not found"
}
```

### Example Response

**Success Example**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "507f1f77bcf86cd799439011",
  "socketId": null
}
```

## Logout User
Logout the currently authenticated user and invalidate the token.

### Endpoint
```
GET /users/logout
```

### Request
- Method: GET
- No request body required

### Headers Required
```
Authorization: Bearer <JWT_TOKEN>
```
or
```
Cookie: token=<JWT_TOKEN>
```

### Response

#### Success Response
- **Status Code**: 200 (OK)
- **Content**:
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

**Authentication Error**
- **Status Code**: 401 (Unauthorized)
- **Content**:
```json
{
  "message": "Access denied. No token provided."
}
```

**Token Blacklisted**
- **Status Code**: 401 (Unauthorized)
- **Content**:
```json
{
  "message": "Token is blacklisted. Please log in again."
}
```

### Example Response

**Success Example**
```json
{
  "message": "Logged out successfully"
}
```

**Invalid Token Example**
```json
{
  "message": "Invalid token."
}
```

### Notes
- The logout endpoint will:
  - Clear the token cookie if present
  - Add the token to blacklist
  - Invalidate the current session

# Captain API Documentation

## Register Captain
Register a new captain in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",    // required, min 3 characters
    "lastname": "string"      // required, min 3 characters
  },
  "email": "string",         // required, valid email format
  "password": "string",      // required, min 6 characters
  "vehicle": {
    "color": "string",       // required, min 3 characters
    "plate": "string",       // required, min 3 characters
    "capacity": "number",    // required, min 1
    "vehicleType": "string"  // required, enum: ['car', 'motorcycle', 'auto']
  }
}
```

### Response

#### Success Response
- **Status Code**: 201 (Created)
- **Content**:
```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "inactive",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": number,
      "vehicleType": "string"
    },
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
      "type": "field",
      "value": "invalid-value",
      "msg": "Error message",
      "path": "field_name",
      "location": "body"
    }
  ]
}
```

**Captain Already Exists**
- **Status Code**: 400 (Bad Request)
- **Content**:
```json
{
  "message": "Captain with this email already exists"
}
```

### Example Requests

**Valid Request**
```json
{
  "fullname": {
    "firstname": "test_captain_first",
    "lastname": "test_captain_last"
  },
  "email": "test_captain_email@gmail.com",
  "password": "test_captain_password123",
  "vehicle": {
    "color": "white",
    "plate": "TEST123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Responses

**Success Response Example**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "test_captain_first",
      "lastname": "test_captain_last"
    },
    "password": "asdas23v2342b...",
    "email": "test_captain_email@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "white",
      "plate": "TEST123",
      "capacity": 4,
      "vehicleType": "car"
    },
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
      "value": "invalid-email",
      "msg": "Please provide a valid email address",
      "path": "email",
      "location": "body"
    }
  ]
}
```

Invalid Vehicle Type:
```json
{
  "errors": [
    {
      "type": "field",
      "value": "truck",
      "msg": "Vehicle type must be one of car, motorcycle, or auto",
      "path": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- Email must be valid
- First name must be at least 3 characters long
- Last name must be at least 3 characters long
- Password must be at least 6 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 3 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: 'car', 'motorcycle', 'auto'
- All required fields must be provided