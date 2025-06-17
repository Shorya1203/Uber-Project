# API Documentation

## User Endpoints

### 1. Register User
**Endpoint:** `POST /users/register`

**Request Body**
The request body should be in JSON format and include the following fields:

- fullname (object):
  - firstname (string, required): User's first name (minimum 3 characters)
  - lastname (string, optional): User's last name (minimum 3 characters)
- email (string, required): User's email address (must be valid)
- password (string, required): User's password (minimum 6 characters)

**Response**
- user (object):
  - fullname (object):
    - firstname (string): User's first name
    - lastname (string): User's last name
  - email (string): User's email address
  - _id (string): User's unique identifier
- token (string): JWT authentication token

### 2. Login User
Login an existing user.

**Endpoint:** `POST /users/login`

**Request Body**
The request body should be in JSON format and include the following fields:

- email (string, required): User's email address (must be valid)
- password (string, required): User's password (minimum 6 characters)

**Response**
- user (object):
  - fullname (object):
    - firstname (string): User's first name
    - lastname (string): User's last name
  - email (string): User's email address
  - _id (string): User's unique identifier
- token (string): JWT authentication token


### 3. Get User Profile
Get the profile information of the authenticated user.

**Endpoint:** `GET /users/profile`

**Headers Required**
- Authorization: Bearer <JWT_TOKEN>

**Response**
- fullname (object):
  - firstname (string): User's first name
  - lastname (string): User's last name
- email (string): User's email address
- _id (string): User's unique identifier
- socketId (string): Socket connection identifier

### 4. Logout User
Logout the currently authenticated user and invalidate the token.

**Endpoint:** `GET /users/logout`

**Headers Required**
- Authorization: Bearer <JWT_TOKEN>

**Response**
- message (string): Success or error message

## Captain Endpoints

### 1. Register Captain
**Endpoint:** `POST /captains/register`

**Request Body**
The request body should be in JSON format and include the following fields:

- fullname (object):
  - firstname (string, required): Captain's first name (minimum 3 characters)
  - lastname (string, required): Captain's last name (minimum 3 characters)
- email (string, required): Captain's email address (must be valid)
- password (string, required): Captain's password (minimum 6 characters)
- vehicle (object):
  - color (string, required): Vehicle color (minimum 3 characters)
  - plate (string, required): Vehicle plate number (minimum 3 characters)
  - capacity (number, required): Vehicle capacity (minimum 1)
  - vehicleType (string, required): Vehicle type (must be 'car', 'motorcycle', or 'auto')

**Response**
- captain (object):
  - fullname (object):
    - firstname (string): Captain's first name
    - lastname (string): Captain's last name
            "msg": "Password must be at least 6 characters long",
  - status (string): Captain's status ('active' or 'inactive')
  - vehicle (object):
    - color (string): Vehicle color
    - plate (string): Vehicle plate number
    - capacity (number): Vehicle capacity
    - vehicleType (string): Vehicle type
  - _id (string): Captain's unique identifier
- token (string): JWT authentication token