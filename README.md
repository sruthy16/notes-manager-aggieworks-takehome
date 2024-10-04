# Notes Manager📝
This full-stack web application allows users to manage notes 
efficiently, with a Django backend and a React frontend. Users can securely log in 
using JSON Web Tokens (JWT) to create, delete, and view notes through protected API 
endpoints. The app includes error handling and form validation for a smooth user experience.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running-the-application">Running the Application</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Built With
The application features a Django backend with the Django REST Framework and SimpleJWT for authentication, 
along with a React 18+ frontend that uses Axios for HTTP requests and React Router for routing, and it uses 
SQLite as the default database, which can be swapped for PostgreSQL or MySQL.

### Backend (Django)
* ![Django][Django.js]
* ![Django REST Framework][Rest.js]
* SimpleJWT 

[Django.js]: https://img.shields.io/pypi/frameworkversions/django/django-athm.svg
[Rest.js]: https://img.shields.io/badge/django--rest--framework-3.12.4-blue?style=for-the-badge&labelColor=333333&logo=django&logoColor=white&color=blue

### Frontend (React)
* ![React 18+][React.js]
* ![Axios][Axios.js] 
* ![ReactRouter][React-Router.js] 

[React.js]: https://img.shields.io/badge/react-18.2.0-%23f1e05a?logo=React
[Axios.js]: https://img.shields.io/badge/-Axios-C0C0C0?logo=Axios&logoColor=5A29E4
[React-Router.js]: https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router

### Database
* ![SQLite-rm][SQLite] (default, can be replaced with PostgreSQL or MySQL)

[SQLite]: https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white

## Getting Started

### Prerequisites
Make to have the following installed on your local machine:
* Python 3.8+
* Node.js 14+
* npm (or yarn)
* Django
* React

### Installation
#### Backend Setup (Django)
1. Clone the repository:
   
   ```sh
   git clone https://github.com/sruthy16/notes-manager-aggieworks-takehome
   cd notes-manager-aggieworks-takehome/backend
   ```
   
2. Install the Python dependencies:

   ```sh
   pip install -r requirements.txt
   ```
   
3. Apply database migrations:

   ```sh
   python manage.py migrate
   ```

4. Run the development server:
   
   ```sh
   python manage.py runserver
   ```
  
#### Frontend Setup (React)
1. Navigate to the frontend folder:
   
   ```sh
   notes-manager-aggieworks-takehomecd/frontend
   ```

2. Install the Node.js dependencies:

   ```sh
   npm install
   ```

3. Start the React development server:

   ```sh
   npm run dev
   ```

## Running the Application
The Django backend will be running at:
```sh
http://127.0.0.1:8000
```

The React frontend will be running at:
```sh
http://localhost:5173
```

*Make sure both the frontend and backend are running simultaneously for full functionality.*

### API Endpoints

All API requests are made to the Django REST API, with JWT-based authentication required for most endpoints.

1. **Admin Interface**
   - `GET /admin/` - Access the Django admin interface.
2. **User Registration**
   - `POST /api/user/register/` - Endpoint for user registration.
3. **JWT Token Generation**
   - `POST /api/token/` - Obtain a new JWT token.
4. **JWT Token Refresh**
   - `POST /api/token/refresh/` - Refresh the JWT token.
5. **Django REST Framework Authentication**
   - `GET /api-auth/` - Includes authentication-related URLs for the Django REST Framework.
6. **API URL Routing**
   - `GET /api/` - Forwards specific URLs under the `/api/` path to the `api.urls` module for further handling.


### Example API Call (using Axios)

```javascript
axios.get('/api/notes/', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
.then(response => console.log(response.data))
.catch(error => console.log(error));
```


Change the URL in the search bar to `http://localhost:5173/register/` to navigate to the register page.

<img width="1301" alt="register_page" src="https://github.com/user-attachments/assets/0c901cf5-f2f2-42b4-abd8-a18d0f59f504">


After registering an account, the user will be directed to the login page to re-enter their credentials for authentication. 
Upon logging in, the user receives a JWT token, which is stored in `localStorage` and is used to authenticate all subsequent requests.

<img width="1300" alt="login_page" src="https://github.com/user-attachments/assets/c811dfa3-dbfb-4eb5-a474-17f68c27cd9f">


The notes page allows the user to create a new note clicking the `Submit` button.

<img width="1300" alt="notes_page" src="https://github.com/user-attachments/assets/db96ec05-520a-4128-82f9-4fb8a5a64b7e">


The notes are displayed at the top of the page, and users can delete their notes by pressing the `delete` button.

![delete](https://github.com/user-attachments/assets/4ac29b61-64e8-4b94-8bca-66f1c0dc8780)


To log out, change the URL to `http://localhost:5173/logout/`. The user will then be redirected to the login page, which removes the token from storage. 
Using the same credentials, users can log in at any time to access their previously created notes.

<img width="1300" alt="login_page" src="https://github.com/user-attachments/assets/51da30b9-5c08-4c6a-907e-96de920b8a37">


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

