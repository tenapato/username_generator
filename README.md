# Username Generator

This package generates Docker-like unique usernames by combining a random adjective, a random surname, and a random 3-digit number.

## Installation

You can install this package using npm:

```sh
npm install @tenapato/username_generator
```

## Usage

Import the generateUserName function from the package and call it to generate a unique username.

```js
import generateUserName from '@tenapato/username_generator';

const username = generateUserName();
console.log(username); // Example output: "happy_turing_123"
```

## Example

```js
import generateUserName from '@tenapato/username_generator';

console.log(generateUserName()); // Example output: "brave_curie_456"
console.log(generateUserName()); // Example output: "cool_einstein_789"
```

## ## Contributing
If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the ISC License. See the LICENSE file for details.

## Author
Patricio Tena

## Acknowledgments
Inspired by Docker's unique username generator.