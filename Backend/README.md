# API Documentation

# End_Point: User Registration

### ==> **POST** `/users/register`

## Description

Registers a new user with the provided details. The endpoint validates the request body and returns a JSON response with a token and the user object on success.

## Request Body

- **fullname**: An object containing:
  - **firstname**: Required string (at least 3 characters).
  - **lastname**: Optional string (at least 3 characters if provided).
- **email**: Required valid email address.
- **password**: Required string (at least 6 characters).

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

## Responses

- **201 Created**
  - Description: User successfully registered.
  - Body:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "id": "1234567890abcdef",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "2024-06-10T12:34:56.789Z"
      }
    }
    ```
- **400 Bad Request**
  - Description: Validation errors. The response will include details of the invalid fields.
  - Body:
    ```json
    {
      "errors": [
        // error details array
      ]
    }
    ```

# End_Point: User Login

### ==> **POST** `/users/login`

## Description

Logs in an existing user. Validates the email and password, and returns a JSON response with a token and the user object upon successful authentication.

### Request Body

- **email**: Required valid email address.
- **password**: Required string (at least 6 characters).

#### Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

### Responses

- **200 OK**
  - Description: User successfully logged in.
  - Body:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "id": "1234567890abcdef",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "2024-06-10T12:34:56.789Z"
      }
    }
    ```
- **400 Bad Request**
  - Description: Validation errors. The response includes details of invalid fields.
  - Body:
    ```json
    {
      "errors": [
        // error details array
      ]
    }
    ```
- **401 Unauthorized**
  - Description: The email or password is incorrect.
  - Body:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

# End_Point: User Profile

### ==> **GET** `/users/profile`

## Description

Fetches the profile of the currently authenticated user. Requires a valid authentication token.

### Headers

- **Authorization**: Bearer token (JWT).

### Responses

- **200 OK**
  - Description: Successfully fetched user profile.
  - Body:
    ```json
    {
      "id": "1234567890abcdef",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2024-06-10T12:34:56.789Z"
    }
    ```
- **401 Unauthorized**
  - Description: Authentication token is missing or invalid.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

# End_Point: User Logout

### ==> **GET** `/users/logout`

## Description

Logs out the currently authenticated user by clearing the authentication token and blacklisting it.

### Headers

- **Authorization**: Bearer token (JWT).

### Responses

- **200 OK**
  - Description: Successfully logged out.
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **401 Unauthorized**
  - Description: Authentication token is missing or invalid.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

# End_Point: Captain Registration

### ==> **POST** `/captains/register`

## Description

Registers a new captain with the provided details, including vehicle information. Validates the request body and returns a JSON response with a token and the captain object on success.

## Request Body

- **fullname**: An object containing:
  - **firstname**: Required string (at least 3 characters).
  - **lastname**: Optional string (at least 3 characters if provided).
- **email**: Required valid email address.
- **password**: Required string (at least 6 characters).
- **vehicle**: An object containing:
  - **color**: Required string (at least 3 characters).
  - **plate**: Required string (at least 3 characters).
  - **capacity**: Required integer (minimum 1).
  - **vehicleType**: Required string, one of: `"car"`, `"motorcycle"`, `"auto"`.

### Example

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "captainPass123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

- **201 Created**
  - Description: Captain successfully registered.
  - Body:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "id": "abcdef1234567890",
        "fullname": {
          "firstname": "Alice",
          "lastname": "Smith"
        },
        "email": "alice.smith@example.com",
        "status": "inactive",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ1234",
          "capacity": 4,
          "vehicleType": "car"
        },
        "createdAt": "2024-06-10T12:34:56.789Z"
      }
    }
    ```
- **400 Bad Request**
  - Description: Validation errors. The response will include details of the invalid fields.
  - Body:
    ```json
    {
      "errors": [
        // error details array
      ]
    }
    ```

# End_Point: Captain Login

### ==> **POST** `/captains/login`

## Description

Logs in an existing captain. Validates the email and password, and returns a JSON response with a token and the captain object upon successful authentication.

### Request Body

- **email**: Required valid email address.
- **password**: Required string (at least 6 characters).

#### Example

```json
{
  "email": "alice.smith@example.com",
  "password": "captainPass123"
}
```

### Responses

- **200 OK**
  - Description: Captain successfully logged in.
  - Body:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "id": "abcdef1234567890",
        "fullname": {
          "firstname": "Alice",
          "lastname": "Smith"
        },
        "email": "alice.smith@example.com",
        "status": "inactive",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ1234",
          "capacity": 4,
          "vehicleType": "car"
        },
        "createdAt": "2024-06-10T12:34:56.789Z"
      }
    }
    ```
- **400 Bad Request**
  - Description: Validation errors. The response includes details of invalid fields.
  - Body:
    ```json
    {
      "errors": [
        // error details array
      ]
    }
    ```
- **401 Unauthorized**
  - Description: The email or password is incorrect.
  - Body:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

# End_Point: Captain Profile

### ==> **GET** `/captains/profile`

## Description

Fetches the profile of the currently authenticated captain. Requires a valid authentication token.

### Headers

- **Authorization**: Bearer token (JWT).

### Responses

- **200 OK**
  - Description: Successfully fetched captain profile.
  - Body:
    ```json
    {
      "captain": {
        "id": "abcdef1234567890",
        "fullname": {
          "firstname": "Alice",
          "lastname": "Smith"
        },
        "email": "alice.smith@example.com",
        "status": "inactive",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ1234",
          "capacity": 4,
          "vehicleType": "car"
        },
        "createdAt": "2024-06-10T12:34:56.789Z"
      }
    }
    ```
- **401 Unauthorized**
  - Description: Authentication token is missing or invalid.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

# End_Point: Captain Logout

### ==> **GET** `/captains/logout`

## Description

Logs out the currently authenticated captain by clearing the authentication token and blacklisting it.

### Headers

- **Authorization**: Bearer token (JWT).

### Responses

- **200 OK**
  - Description: Successfully logged out.
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **401 Unauthorized**
  - Description: Authentication token is missing or invalid.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```
