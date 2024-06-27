# Improved Styling with CSS: Adding Breadcrumbs

## Overview

Welcome to the breadcrumbs project, part of the "Improved Styling with CSS" module. In this module, we explore how breadcrumbs can be an effective option for secondary navigation in some cases.

## Learning Objectives

In this topic, you will learn how to:

- Understand the purpose and benefits of using breadcrumbs for navigation.
- Implement breadcrumbs using HTML and CSS to enhance user navigation and experience.

## Project: Adding Breadcrumbs

### Project Description

In this project, you will work on a website for buying groceries. The currently selected product is “Organic Blueberries”. By adding breadcrumbs to this site, you will be helping users answer questions such as:

- Can I buy anything besides blueberries?
- Is everything on this site organic or can I buy conventional produce?
- Does this site offer non-produce items?

By incorporating breadcrumbs, you will provide a UI element that offers hints to some of these questions. This will give users a better understanding of what the site provides and the optional attributes of the product they are purchasing.

### Instructions

1. **Analyze the Current Page:** Examine the current layout of the page for “Organic Blueberries”.
2. **Add Breadcrumbs:** Use HTML and CSS to add breadcrumbs to the page. These breadcrumbs will provide navigational context but will not have functional links.
3. **Style the Breadcrumbs:** Ensure the breadcrumbs are styled appropriately to fit the overall design of the site and enhance usability.

### Implementation Steps

1. **HTML Structure:** Add a `nav` element with a class of `breadcrumbs` to the HTML. Inside the `nav`, create a list of `a` elements wrapped in `li` elements to represent each breadcrumb.
   ```html
   <nav class="breadcrumbs">
     <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">Produce</a></li>
       <li><a href="#">Organic</a></li>
       <li><a href="#">Organic Blueberries</a></li>
     </ul>
   </nav>
   ```
2. **CSS Styling:** Style the breadcrumbs using CSS to ensure they are visually appealing and enhance the user experience.
   ```css
   .breadcrumbs {
     font-family: Arial, sans-serif;
     font-size: 14px;
     margin-bottom: 20px;
   }

   .breadcrumbs ul {
     list-style: none;
     padding: 0;
     display: flex;
   }

   .breadcrumbs li {
     margin-right: 5px;
   }

   .breadcrumbs a {
     text-decoration: none;
     color: #3498db;
   }

   .breadcrumbs a:hover {
     text-decoration: underline;
   }
   ```

### Tips and Hints

- **Hierarchy:** Ensure the breadcrumbs reflect the hierarchy and structure of the site.
- **Clarity:** Use clear and concise labels for each breadcrumb.
- **Accessibility:** Ensure the breadcrumbs are accessible and easy to navigate for all users.

## Repository Structure

- `index.html`: The HTML file for the grocery site page.
- `styles.css`: The CSS file where you will implement your breadcrumb styling.
- `README.md`: This file, providing an overview and instructions for the project.

## Contact

For questions, suggestions, or collaboration opportunities, please contact me via [[LinkedIn](https://www.linkedin.com/in/raphael-carvalho-675147130/)].

---

Take this project as an opportunity to apply what you've learned about breadcrumbs and improve the navigation and user experience of the grocery site. Happy coding!