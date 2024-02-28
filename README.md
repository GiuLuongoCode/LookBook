<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GiuLuongoCode/LookBook">
  </a>

<h3 align="center">Look Nook API</h3>

  <p align="center">
    This project contains APIs for managing a second-hand clothing platform.
    <br />
    <a href="https://github.com/GiuLuongoCode/veganly"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://github.com/GiuLuongoCode/LookBook/issues">Report Bug</a>
    ·
    <a href="https://github.com/GiuLuongoCode/LookBook/issues ">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#File Structure">File Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()

The project was implemented following the TDD methodology and the MVC design pattern. Unit tests were done with Jest

The project involves the implementation of the following APIs:

Endpoints for Product Management:

/products:

* POST: Adds a new product listing.

* PUT: Updates an existing product listing.
* DELETE: Deletes a product listing.

/products/{id}:
* GET: Retrieves details of the product with the specified ID.

Endpoints for User Management:

/users:
* POST: Adds a new user profile.
* PUT: Updates an existing user profile.
* DELETE: Deletes a user profile.
/users/{id}:
* GET: Retrieves details of the user with the specified ID.

Endpoints for Swap Orders:

/swap_orders:
* POST: Creates a new swap order.
* PUT: Updates an existing swap order.
* DELETE: Deletes a swap order.
/swap_orders/{id}:
* GET: Retrieves details of the swap order with the specified ID.

Endpoint for Order Filtering:

/orders:
* GET: Retrieves all orders.
Query Parameters:
date: Filter orders by insertion date.
product: Filter orders by products contained within.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript]][Javascript]
* [![NodeJS]][NodeJS-url]
* [![MongoDB][MongoDB]][MongoDB-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
You must have installed npm. To do this run the following command in a terminal.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/GiuLuongoCode/LookBook.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure enviroment variables
    3.1. Create a '.env' file in the project root and add your API endpoint of Teleport. See '.env.example' file for more details.
   ```js
    MONGODB_URI_START = "mongodb+srv://"
    MONGODB_URI_END = "/?retryWrites=true&w=majority"
    MONGODB_PASSWORD = YOUR PASSWORD
    MONGODB_USER = YOUR USERNAME
    MONGODB_CLUSTER = YOUR CLUSTER
   ```
4. Run the application
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## File Structure
The application repository is structured as follows:
```
LookBook/
  ├── package.json
  ├── package-lock.json
  ├── jest.config.json
  ├── src
  │   └── config/
  │   └── controllers/
  │   └── models/
  │   └── routers/
  │   └── services/
  │   └── index.js
  ├── test
  │   └── controllers/
  │   └── services/

 ```
* package.json contains the npm packages to install.
* jest.config.json contains the settings for Jest.
* src/index.js contains the main code.
* src/controllers/ contains the controller of the app.
* src/config/ contains the module for the connection to the database of the app.
* src/services/ contains the services of the app.
* src/models/ contains the models of the app.
* src/routes/ contains the routes of the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[@GiuLuongoCode](![[Github]][Github-url]) - ![Github]

Project Link: [https://github.com/GiuLuongoCode/veganly](https://github.com/GiuLuongoCode/LookBook.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/GiuLuongoCode/veganly/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/GiuLuongoCode/veganly/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/GiuLuongoCode/veganly/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/GiuLuongoCode/veganly/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/GiuLuongoCode/veganly/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: /veganly-app/public/readme/screenshot.png
[Javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[NodeJS]: 	https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[Github-url]: https://github.com/GiuLuongoCode
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
