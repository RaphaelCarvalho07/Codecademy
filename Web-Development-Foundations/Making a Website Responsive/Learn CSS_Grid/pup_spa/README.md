# PupSpa - Responsive Website

Welcome to the PupSpa project! This project is part of the Web Development Foundations module, specifically the "Making a Website Responsive" chapter, under the topic "Learn CSS: Grid". The goal of this project is to practice CSS Grid by building a responsive web page for a doggie daycare and grooming services shop called PupSpa.

## Project Description

Your friend has just opened a doggie daycare and grooming services shop, PupSpa. They would like a simple web page to let customers know about their services. We currently have an HTML document styled with CSS, but every <div> appears in its own row. The objective is to add CSS grid properties to make parts of the site appear more cohesive.

## Technologies Used

- HTML
- CSS (including CSS Grid)

## CSS Grid Properties Used

Some of the CSS Grid properties used in this project include:

- **display**
- **grid-template-rows**
- **grid-template-columns**
- **gap**
- **grid-column-start**
- **grid-column-end**

We also utilized shorthand properties to simplify the code.

## Project Structure

The project structure is as follows:
```zsh
root/
└── resources/
    └── styles/
        └── css/
            ├── reset.css
            └── style.css
└── index.html
```

## Key Features

1. **Responsive Grid Layout**: The web page uses CSS Grid to create a responsive layout that adjusts to different screen sizes.
2. **Header and Footer**: The header and footer elements span across all columns.
3. **Banner and About Section**: The banner and about sections also span across all columns.
4. **Box Elements**: The address, hours, and call-us sections are styled as boxes and placed within the grid.
5. **Testimonials**: Testimonials are placed within the grid to create a cohesive layout.

## How to Run the Project

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the web page.

## Example Code:

```css
header, .banner, .about, footer {
  grid-column: 1 / span 6;
}

.address {
  grid-column: 1 / span 2;
}

.hours {
  grid-column: 3 / span 2;
}

.call-us {
  grid-column: 5 / span 2;
}
```

## Conclusion
This project demonstrates the use of CSS Grid to create a responsive web page layout. By applying various grid properties, we were able to create a cohesive and visually appealing design for PupSpa.

Feel free to explore the code and make any modifications to further enhance the web page!

Happy coding!