# pokeStretch README

## Project Abstract
This group project challenged us to learn a new technology, TypeScript, in less than a week. We decided to utilize TypeScript, along with React and React Router, to create a Pokémon card deck builder. The application allows users to browse and favorite Pokémon cards, providing an interactive and enjoyable experience for Pokémon fans.

## Challenges and Struggles
Learning a new technology, TypeScript, within a short timeframe posed several challenges and struggles for our team:

### Syntax and Typing: 
TypeScript introduces a new syntax and requires explicit typing. We had to familiarize ourselves with the TypeScript syntax and understand how to apply types to variables, functions, and components.

### Type Errors: 
TypeScript enforces strict typing, which meant we had to ensure that all variables and functions were properly typed. We encountered type errors and had to debug and fix them to ensure the code was valid.

### Integration with React: 
Integrating TypeScript with React required understanding how to apply types to React components, props, and state. We had to refactor our existing React components to include TypeScript types and ensure proper integration with React features.

### Tooling and Configuration: 
Setting up TypeScript in our project required configuring the TypeScript compiler, updating project files, and installing TypeScript-specific tooling. We had to learn how to use TypeScript-specific tools and understand their role in the development workflow.

### Learning Curve: 
Learning a new technology always involves a learning curve. We had to dedicate time and effort to understand TypeScript concepts, best practices, and how to apply them effectively in our project.

## Wins
Despite the challenges faced, our team achieved several wins while learning and implementing TypeScript:

### Improved Code Quality: 
TypeScript's static typing helped catch errors early in the development process. By ensuring variables and functions were properly typed, we improved the overall code quality and reduced runtime errors.

### Enhanced Developer Experience: 
TypeScript's tooling and IDE support improved our development experience. Features such as autocompletion, type checking, and error highlighting helped us write more robust and error-free code.

### Better Collaboration: 
TypeScript's type annotations made the codebase more self-documenting, which facilitated better collaboration among team members. The explicit types helped communicate intent and reduced the need for extensive code comments.

### Reduced Debugging Time: 
TypeScript's type system helped catch many potential bugs during development, reducing the time spent on debugging. The compiler's feedback guided us in fixing issues early on, improving the overall development efficiency.

### Increased Confidence in Refactoring: 
With TypeScript, refactoring became less daunting. The static typing allowed us to make changes with confidence, knowing that the TypeScript compiler would catch any breaking changes or inconsistencies.

## Core Components Worked On
Here are the core components that each team member worked on:

### App
- Responsible for fetching Pokémon card data from the Pokémon TCG API.
- Manages the state of all cards, favorites, loading, and error handling.
- Renders the main section of the application, including the Header, Loading and Error components, and the Switch with different routes.
### Main
- Renders the main container that displays the Pokémon cards.
- Receives data and callback functions as props to handle card selection and favoriting.
- Maps over the card data to create individual PokemonCard components.
### PokemonCard
- Represents a single Pokémon card.
- Handles the favoriting functionality, allowing users to add or remove cards from their favorites.
- Displays the card image, name, and type.
### Utilities
- Contains utility functions used within the application.
- Provides the cleanData function to format and clean the card data received from the API.
### Cypress Testing
- Contains Cypress tests for the Favorites Page and Main Page.
- Tests the functionality of favoriting and unfavoriting cards, as well as the rendering of card details.

### Installation and Usage
[Click this link](https://my-pokestretch-react.vercel.app/)

## Conclusion
This group project pushed us to learn TypeScript in a short period and apply it to a Pokémon card deck builder. Despite the challenges, we successfully implemented TypeScript, React, and React Router to create an engaging and user-friendly application. The project not only improved our code quality and developer experience but also fostered better collaboration and increased confidence in refactoring. We are proud of our achievements and the knowledge gained through this experience.

## Contributors 

- Adam Meza - [Github](https://github.com/adam-meza) | [LinkedIn](https://www.linkedin.com/in/adam-meza/)
- Sara Park - [Github](https://github.com/soy-park) | [LinkedIn](https://www.linkedin.com/in/soyeon-sara-park/)
- Jacob MacFarlane - [Github](https://github.com/JacobMacFarlane) | [LinkedIn](https://www.linkedin.com/in/jacob-macfarlane-052593261/)
- Bri Bourassa - [Github](https://github.com/BriBourassa) | [LinkedIn](https://www.linkedin.com/in/brianne-bourassa/)
