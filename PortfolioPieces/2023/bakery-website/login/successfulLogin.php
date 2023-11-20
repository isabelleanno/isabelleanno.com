<?php
//Isabelle Anno, 5/2/2023

session_start();

//If username and ID are set, load page. 
if(isset($_SESSION['id']) && isset($_SESSION['username'])){ ?>

<?php include "loginheader.php"; ?>
<!--Main Content Start -->
<div class="col-12 d-flex flex-column align-items-center my-4">
    <h1 class="aesthetnova display-4">Hello, <?php echo $_SESSION['username']; ?>🍰</h1>
    <p >What would you like to do today? </p>
</div>
<div class="col-12 d-flex flex-column align-items-center ">
   <div class="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 px-4  d-flex flex-column align-items-center">
    <a href="createOrder.php" class="learn-more btn form-btn btn-outline-secondary form-border w-100 px-5 my-3">
    📝 Create a New Order
    </a>
    <a href="viewCurrent.php" class="learn-more btn form-btn btn-outline-secondary form-border w-100 px-5 mb-3">
    🔍 View/Modify Current Orders
    </a>
     <a href="viewCompleted.php" class="learn-more btn form-btn btn-outline-secondary form-border w-100 px-5 mb-3">
    ✅ View Completed Orders
    </a>
   </div>
</div>
<!-- Main Content End -->
<?php include "loginfooter.php"; } 
//Else exit to login.php 
else {
header("Location:../login.php");
exit();
} ?>

