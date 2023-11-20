<?php include "includes/header.php" ?>
<!--Main Content Start-->
<main class="recipes-bg">
  <div class="recipes-gradient">
    <div class="container">
      <div class="row">
        <div class="col m-5 mb-0">
          <h1 class="display-3 aesthetnova mb-4 text-center">
            Recipe of the Month
          </h1>
        </div>
        <div class="mb-5">
          <div
            class="recipe-content d-flex flex-column align-items-center col col-md-10 col-lg-10 col-xl-10 m-auto"
          >
            <div class="col-10 m-3 p-3 d-flex flex-column">
              <!--PHP Start-->

              <?php 
              //Declaring Variables //

              //Month to use to access in an array (month number -1 since arrays start at 0)
              $month = 10;
              //Display recipe image. Month + 1 for "real month." (1 is January, 2 is February, etc.)
              $RecipeImage = ("\"images/recipes/".($month + 1).".jpg\"");
              //Recipe names
              $RecipeName = ['Chocolate Chip Cookies','Lemon Cheesecake','Banana Bread','Macaroons',
              'Strawberry Cake','Meringue','Donut','Crossiant','Cinnamon Roll',
              'Cherry Cupcakes','Blueberry Muffins','Apple Pie'];
              //Arrays for the ingredients and prep instructions for each month 
              $Ingredients = array (
                array("2 eggs","300g sugar", "flour", "milk", "Chocolate chips"),
                array("1 egg","200g sugar", "flour", "milk", "1 Lemon"),
                array("2 eggs","250g sugar", "flour", "milk", "4 Bananas"),
                array("2 eggs","250g sugar", "flour", "milk", "Food Coloring", "Jelly/filling of your choice"),
                array("1 egg","200g sugar", "flour", "milk", "400g strawberries"),
                array("4 eggs","200g sugar", "flour", "milk", "cream"),
                array("1 cup self-rising flour", "5 oz plain yogurt"),
                array("4 2/3 cups flour", "1/3 cup sugar", "1 teaspoon salt","1 egg"),
                array("2 2/3 cups flour", "1/3 cup sugar", "2 teaspoons cinnamon", "1/3 cup brown sugar", "1 teaspoon salt","1 egg"),
                array("1 cup cherries", "1/2 cup milk", "2 eggs","1 cup flour", "1/3 cup sugar"),
                array("1 2/3 cup blueberries", "1 egg", "1 1/2 cup self-rising flour", "1 tsp baking powder","1/2 cup sugar", "1 tsp salt"),
                array("2 apples","1 egg", "2 cups flour","1 cup sugar", "1 tsp salt")
              );
              $PrepInstructions = array (
                array("<li>Preheat oven to 350 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>","<li>Use a cheese grater on the lemon skin for extra zest.</li>"),
                array("<li>Preheat oven to 350 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Mash the bananas and add to the mix.</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Separate egg whites from yolks.</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Wash and slice strawberries</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 350 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 350 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Mash the bananas and add to the mix.</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Separate egg whites from yolks.</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Wash and slice strawberries</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 350 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
                array("<li>Preheat oven to 375 degrees fahrenheit</li>","<li>Separate wet and dry ingredients and mix in two different bowls</li>","<li>Slowly add dry to wet</li>"),
              );
            //Convert arrays to string to display
              $IngredientsDisplay = implode(', ', $Ingredients[$month]);
              $PrepDisplay = implode('', $PrepInstructions[$month]);

              ?>
              <!--PHP end... now for the fun part- displaying the recipe of the month! -->
              <h1 class="aesthetnova mb-4 text-center"><?php echo($RecipeName[$month]) ?></h1>
              <img
                src=<?php echo($RecipeImage) ?>
                class="mb-5"
                alt=""
              />
              <div class="col align-self-center">
                <p>
                  <span class="aesthetnova mb-3">Ingredients:</span> <?php echo($IngredientsDisplay) ?>
                </p>
                <span class="aesthetnova">Prep instructions:</span>
                <ol>
                  <?php echo($PrepDisplay) ?>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<!--Content End-->
<?php include "includes/footer.php" ?>
