<?php include "includes/header.php" ?>
<!--Main Content Start-->
<div class="container">
  <div class="row flex-mobile py-5">
    <div class="col col-md-6 col-lg-6 col-xl-6">
      <div class="col-10 offset-1">
        <!--Form Start-->
        <form action="login/handlelogin.php" method="POST" >
          <?php
          if(isset($_GET['error'])) {?>
          <p class="error text-danger text-center fw-bolder"> <?php echo $_GET['error']; ?> </p>
          <?php } ?>
          <div class="row mb-5">
            <div class="col-12 d-flex flex-column align-items-center">
              <h1 class="aesthetnova mb-1 text-center">Login</h1>
            </div>
            <div class="col-12 mb-3 d-flex flex-column align-items-center">
              <div class="col-8 mb-4">
                <input
                  type="text"
                  name="username"
                  class="form-control mt-4 form-border"
                  placeholder="Username"
                />
                <input
                  type="password"
                  name="password"
                  class="form-control mt-4 form-border"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn login-form-btn form-border px-5">
                Log In
              </button>
            </div>
          </div>
        </form>
        <!--Form End-->
      </div>
    </div>
    <div class="col d-flex flex-column ">
      <h1 class="aesthetnova mb-1">Site Disclaimer</h1>
      <p class="mt-3">
        Mama Lu's is a school project from part of the web design and
        development class of 2023 at Stark State College in Canton, Ohio. It is
        made for educational purposes, but is also based on a highly respected,
        well-loved professor's dream of soon retiring and making the world a
        better place with her cooking and baking skills in her local community.
        This site is not intended for commercial uses. It's for fun and not for
        profit. This page is for logging in and viewing a simple database made
        by the team. If you have any questions or concerns, please
        <a href="mailto:itsisabelleanno@gmail.com">contact the web designer</a>
        here. Thank you!
      </p>
    </div>
  </div>
</div>
<!--Main Content End-->
<?php include "includes/footer.php" ?>
