<?php include "includes/header.php" ?>

<!--Main Content Start-->
<div class="about-banner" id="about">
  <h1 class="display-4 aesthetnova text-center py-4">The Story of Mama Lu's</h1>
</div>
<!--About Us Start-->
<div class="container">
  <div class="row flex-mobile py-3">
    <div class="col col-md-6">
      <img
        src="images/about-contact/family-placeholder.png"
        class="fit-img mb-2"
        alt=""
      />
    </div>
    <div class="col d-flex flex-column justify-content-center ">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum
        ut tristique et egestas quis ipsum. Rutrum tellus pellentesque eu
        tincidunt tortor aliquam nulla facilisi. Dolor morbi non arcu risus quis
        varius quam. Donec et odio pellentesque diam volutpat commodo sed.
        Vivamus arcu felis bibendum ut tristique et egestas quis. Nisi lacus sed
        viverra tellus in. Aliquam id diam maecenas ultricies mi eget mauris
        pharetra et. Fusce ut placerat orci nulla pellentesque dignissim enim
        sit. Habitasse platea dictumst quisque sagittis purus sit. Est
        ullamcorper eget nulla facilisi etiam dignissim. Ullamcorper dignissim
        cras tincidunt lobortis. Sodales neque sodales ut etiam sit amet nisl
        purus. Mauris vitae ultricies leo integer malesuada nunc vel.
      </p>
    </div>
  </div>

</div>
<!--About Us End-->
<!--Contact Us Start-->
<div class="contact-bg pb-5">
  <div class="container" id="contact">
    <div class="row pt-5">
      <div
        class="col-12 d-flex flex-column justify-content-center align-items-center mb-5"
      >
        <h1 class="display-h1 mb-4 aesthetnova">Let's get in touch!</h1>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <p>
            We take orders primarily by word of mouth, but you can also use the
            form below to place an order or ask us anything! Thank you for
            supporting small businesses like Mama Lu's. Happy baking!
          </p>
        </div>
      </div>
    </div>

    <!--Form Start-->
    <form
      class="d-flex flex-column align-items-center"
      action="https://formspree.io/f/xgebprre"
      method="POST"
    >
      <div class="col col-md-6">
        <div class="row">
          <div class="col">
            <input
              type="text"
              name="First Name"
              class="form-control mt-4 form-border"
              placeholder="First name"
            />
            <input
              type="text"
              name="Last Name"
              class="form-control my-4 form-border"
              placeholder="Last name"
            />
            <input
              type="email"
              name="email"
              class="form-control form-border"
              placeholder="Email"
            />
          </div>
          <div class="col">
            <textarea
              class="form-control my-4 form-border"
              name="Subject"
              placeholder="Subject"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-6 d-flex justify-content-center">
            <button
              type="submit"
              class="btn form-btn btn-outline-secondary form-border px-5"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
    <!--Form End-->
  </div>
</div>
<!--Contact Us End-->
<!--Main Content End-->
<?php include "includes/footer.php" ?>
