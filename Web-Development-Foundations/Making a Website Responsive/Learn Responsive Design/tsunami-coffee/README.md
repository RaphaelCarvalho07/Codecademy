# Tsunami Coffee Website

This project demonstrates the key concepts of making a website responsive. Below are the main points covered in this chapter:

## Key Learning Points

1. **Responsive Design**:
   - Use of media queries to adjust the layout and styling of the website for different screen sizes.
   - Example: Targeting screens with a max-width of 470px to adjust the font size and image widths.

2. **CSS Flexbox**:
   - Utilized for creating flexible and responsive layout structures.
   - Example: Using `display: flex` to align items in the footer and supporting sections.

3. **CSS Reset**:
   - Implementation of a CSS reset file to ensure consistent styling across different browsers.
   - Example: Using `normalize.css` to reset default browser styles.

4. **HTML Structure**:
   - Proper structuring of HTML elements to create a semantic and accessible webpage.
   - Example: Using `<nav>`, `<header>`, `<footer>`, and other semantic tags.

5. **Image Handling**:
   - Techniques for handling images in a responsive design.
   - Example: Setting image widths to 100% within media queries for smaller screens.

## Project Structure
```zsh
root
├── index.html 
├── README.md 
└── resources 
    └── styles 
        └── css 
            ├── reset.css 
            └── style.css
```


## Files Description

- **index.html**: The main HTML file containing the structure of the webpage.
- **README.md**: This file, summarizing the key learning points and project structure.
- **reset.css**: A CSS file to reset default browser styles using `normalize.css`.
- **style.css**: The main CSS file containing styles for the webpage, including media queries for responsiveness.

## Media Queries Example

```css
@media only screen and (max-width: 960px) {
    .main {
        padding-top: 0;
    }
}

@media only screen and (max-width: 700px) {
    .supporting img {
        display: none;
    }
}

@media only screen and (max-width: 470px) {
    .rating h1 {
        font-size: 2rem;
    }

    .gallery img {
        width: 100%;
        margin: 0;
    }

    footer nav {
        display: none;
    }
}
```

This media query targets screens with a width of 470px or less, adjusting the font size of `.rating h1`, setting the width of `.gallery img` to 100%, and hiding the `footer nav`.

## Conclusion

This project provides a practical example of how to create a responsive website using HTML and CSS. By following the key learning points and examining the project structure, you can gain a better understanding of responsive web design principles.

Happy coding!