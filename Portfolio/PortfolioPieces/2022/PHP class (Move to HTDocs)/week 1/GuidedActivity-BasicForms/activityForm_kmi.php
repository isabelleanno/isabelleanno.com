<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Isabelle Anno, 1/28/2022-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Activity Form</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Deca&amp;display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Lexend deca", sans-serif;
      }
      .container {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
      fieldset {
        align-content: center;
        text-align: center;
      }
      input {
        font-family: monospace, sans-serif;
      }
      .submit {
        font-family: "Lexend deca", sans-serif;
        border: 1px solid #e6b3cc;
        background-color: #e6b3cc;
        color: #fff;
        padding: 5px;
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 5px;
        margin-bottom: 1vw;
      }
      p {
        margin: 2vw;
      }
    </style>
  </head>
  <body>
    <form action="formProcessor_kmi.php" method="post">
      <div class="container">
        <fieldset>
          <legend>Enter your information:</legend>
          <p>
            <label
              >What is your name? <br />
              <input type="text" name="formName" maxlength="50" />
            </label>
          </p>
          <p>
            <label
              >What is your age? <br />
              <input type="text" name="formAge" maxlength="3" />
            </label>
          </p>
          <p>
            <label
              >What is your favorite movie?<br />
              <input type="text" name="formMovie" maxlength="50" />
            </label>
          </p>
          <input
            type="submit"
            name="formSubmit"
            value="submit"
            class="submit"
          />
        </fieldset>
      </div>
    </form>
  </body>
</html>
