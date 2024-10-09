# Product List with Cart

A user-friendly web application that allows users to browse a list of desserts, add them to a shopping cart, and manage their orders. The app features a modal for order confirmation and dynamic cart management.

## Screenshot

![Screenshot](./public/screenshot.png)

## Table of Contents

- [Features](#features)
- [Link](#link)
- [Technologies Used](#technologies-used)
- [What I Learned](#what-i-learned)

## Features

- **Product Browsing**: Users can view a list of desserts with images, names, categories, and prices.
- **Add to Cart**: Users can add desserts to their shopping cart with a simple click.
- **Cart Management**: Users can increment or decrement the quantity of items in the cart, remove items, and view the total price.
- **Keyboard Navigation**: Users can adjust the quantity of products using the up and down arrow keys when focused on the quantity buttons, enhancing accessibility.
- **Order Confirmation**: A modal displays when the user confirms their order, summarizing the purchased items and total cost.
- **Responsive Design**: The app adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices.

## Link

[Live site](https://product-list-dun.vercel.app/)

## Technologies Used

- **React**: For building the user interface and managing application state.
- **CSS**: For styling the application and ensuring a responsive layout.
- **JavaScript (ES6+)**: For implementing the app’s logic and functionality.
- **HTML**: For structuring the content of the app, including the modal and product listings.

## What I Learned

- Best practices for component composition, creating reusable components for products, cart, and modals.
- Implementing event handling to manage user actions such as adding to the cart, removing items, and confirming orders.
- Enhancing accessibility by allowing keyboard navigation for quantity adjustments using the up and down arrow keys.
- Working with the `<dialog>` element for creating modals, enhancing accessibility and user experience.
- Performing calculations based on cart contents, such as total price and quantities, to provide users with accurate order summaries.
- Utilizing the `useRef` hook to manage focus and event listeners for improved accessibility.
