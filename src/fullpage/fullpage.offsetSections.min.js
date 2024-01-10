"use strict";
/*!
 * fullpage.js Offset Sections Extension 0.1.2
 * for fullpage.js v4
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
/* eslint-disable */window.fp_offsetSectionsExtension=function(){var t=this,s=window.fp_utils,e=window.fullpage_api,n=(s.$,e.getFullpageData()),i=(n.options,n.internals),o="fp-section";t.getWindowHeight=function(t){var e=s.hasClass(t,o)?t:s.closest(t,".fp-section");return null!=e.getAttribute("data-percentage")?e.getAttribute("data-percentage")*s.getWindowHeight()/100:""},t.getSectionPosition_=function(t,e,n){if(null!=n.getAttribute("data-percentage")){var i=null==s.prev(n)||null==s.next(n),o=n.getAttribute("data-centered"),a=null==o||"true"===o,r=s.getWindowHeight()-getComputedStyle(n).height.replace("px",""),c=i?0:a?r/2:r;o&&"bottom"===o?(c=r,t=!0):o&&"top"===o&&(t=!1),e=t?e+c:Math.abs(e-c)}return e},t.c=i.c;var a=t["common".charAt(0)];return"complete"===document.readyState&&a("offsetSections"),window.addEventListener("load",function(){a("offsetSections")}),t};