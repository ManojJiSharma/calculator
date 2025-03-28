# Solana Calculator Program

This repository contains a Solana program implementing a simple calculator using the Anchor framework. The program supports basic arithmetic operations and includes test cases to verify functionality.

## Features
- Addition
- Subtraction
- Multiplication
- Division

## Prerequisites
Ensure you have the following installed:
- Rust and Cargo
- Solana CLI
- Anchor framework

## Build and Deploy
To build and deploy the program, run:
```sh
anchor build
anchor deploy
```

## Running Tests
To execute the tests without building, deploying, or starting a local validator, run:
```sh
anchor test --skip-build --skip-deploy --skip-local-validator
```

## Repository Structure
```
├── programs/          # Contains the Solana program
│   ├── calculator/    # Calculator program implementation
├── tests/             # Test cases
├── Anchor.toml        # Anchor configuration
└── README.md          # This file
```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to open issues or submit pull requests for improvements.

## Contact
For any questions, reach out via GitHub Issues.

