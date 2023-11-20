<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Isabelle Anno, Logan Dreher, Ariana Smith 3/30/2023 -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mama Lu's</title>
    <!--Custom CSS-->
    <link rel="stylesheet" href="../css/styles.css" />
    <!--Google Fonts: https://fonts.google.com/ -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
      rel="stylesheet"
    />
    <!--Bootstrap CSS https://getbootstrap.com/docs/5.2/getting-started/introduction/#quick-start-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <!--Font Awesome-->
    <script
      src="https://kit.fontawesome.com/d0e89170d1.js"
      crossorigin="anonymous"
    ></script>
    <!--Favicon-->
    <link rel="icon" href="../images/favicon.png" type="image/x-icon" />
  </head>
  <body>
    <div id="flex-container">
      <!--Desktop Nav Start-->
      <nav class="pb-3" id="desktop-nav">
        <div class="col-12 d-flex justify-content-center">
          <img src="../images/logo.svg" id="logo" alt="Mama Lu's Food & Bakery" />
        </div>
        <div
          class="col-8 offset-2 text-center d-flex justify-content-evenly mt-4"
        >
          <a class="aesthetnova" href="createOrder.php">Create Order</a>
          <a class="aesthetnova" href="viewCurrent.php">View Current Orders</a>
          <a class="aesthetnova" href="viewCompleted.php">View Completed Orders</a>
          <a class="aesthetnova" href="logout.php"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </nav>
      <!--Desktop Nav End-->
      <!--Mobile nav start-->
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        id="mobile-nav"
      >
        <div class="col d-flex">
          <div class="col-10">
            <img
              src="../images/logo.svg"
              id="mobile-logo"
              class="align-self-center"
              alt="Mama Lu's food & Bakery"
            />
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="createOrder.php">Create Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="viewCurrent.php">View Current Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="viewCompleted.php">View Completed Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="logout.php">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
      <!--Mobile Nav end-->