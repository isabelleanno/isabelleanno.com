//Isabelle Anno, 2/7/2024
//Give functionality to nav bar and render navbarJSX.jsx
import { useEffect } from "react";
import NavbarJSX from "./navbarJSX";
import "./css/styles.css";
import $ from "jquery";

const Navbar = () => {
  $("#horizNav").prop("checked", true);
  //Add functionality to settings dropdown menu
  useEffect(() => {
    //Toggle accessibility on and off (for mobile and desktop)
    $(".accessibility").each(function () {
      $(this).on("click", function () {
        const accessibilityMenuBG = $(".uai");
        const accessibilityMenu = $(".uwy");
        const accessibilityToggle = $(this).is(":checked");
        if (accessibilityToggle === false) {
          accessibilityMenu.css("display", "none");
          accessibilityMenuBG.css("visibility", "hidden");
        } else {
          accessibilityMenu.css("display", "block");
          accessibilityMenuBG.css("visibility", "visible");
        }
      });
    });
    //Language (for both mobile and desktop)
    $(".language").each(function () {
      $(this).on("click", function () {});
    });

    //Dark Mode (for both mobile and desktop)
    $(".darkMode").each(function () {
      $(this).on("click", function () {
        /*Procedure for when dark mode  switch is checked.
        ----
        There are 3 options the user has regarding dark mode and high contrast mode. The user can:
        1.) Click on high contrast FIRST, then dark mode SECOND.
        2.) Click on dark mode FIRST, then high contrast SECOND.
        3.) Toggle  dark mode on and off, without messing with high contrast at all.
        -----
        The following confusing if-else statement addresses these three options. I'll try to
        walk you through it as best as I can.

        */
        if ($(this).is(":checked")) {
          //Check if high contrast is also already checked. (Option 1.) If so, data-theme is highContrastDark. If not, it's just dark.
          if ($("#highContrastDesktop").is(":checked")) {
            document
              .querySelector("body")
              .setAttribute("data-theme", "highContrastDark");
          }
          //The user did not choose option 1, meaning high contrast is not on. Let's just do dark mode then.
          else {
            document.querySelector("body").setAttribute("data-theme", "dark");
          }
          //Procedure if dark mode is turned on first and then the user decides to check high Contrast. (Option 2.)
        } else {
          if ($("#highContrastDesktop").is(":checked")) {
            document
              .querySelector("body")
              .setAttribute("data-theme", "highContrast");
            //Procedure when dark mode is turned on and off, without messing with high contrast. (Option 3.)
          } else {
            document.querySelector("body").setAttribute("data-theme", "none");
          }
        }
        $("body").css("transition", "all 0.5s ease-in-out");
      });
    });

    //High Contrast Mode (for both mobile and desktop. Takes Dark and Light modes into consideration.)
    $(".highContrast").each(function () {
      $(this).on("click", function () {
        //Procedure if it's checked and light mode is on.
        if ($(this).is(":checked") && !$("#darkModeDesktop").is(":checked")) {
          document
            .querySelector("body")
            .setAttribute("data-theme", "highContrast");
        }
        //Procedure if it's checked and dark mode is also on (option 2 in the long comment above).
        else if (
          $(this).is(":checked") &&
          $("#darkModeDesktop").is(":checked")
        ) {
          document
            .querySelector("body")
            .setAttribute("data-theme", "highContrastDark");
        }
        //Procedure when unchecked (Goes back to the light or dark mode setting the user has already selected.)
        else {
          if ($("#darkModeDesktop").is(":checked")) {
            document.querySelector("body").setAttribute("data-theme", "dark");
          } else {
            document.querySelector("body").setAttribute("data-theme", "light");
          }
        }
        $("body").css("transition", "all 0.5s ease-in-out");
      });
    });
  });

  //------------------------------------------------Nav bar JSX vvv-----------------------------------------
  return <NavbarJSX />;
};

export default Navbar;
