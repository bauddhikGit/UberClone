# User Registration Endpoint Documentation

## Endpoint

**POST** `/user/register`

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
