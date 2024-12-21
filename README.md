# Reactive Network Assistant

A Visual Studio Code extension that provides smart tooling and snippets for working with Reactive Smart Contracts. This extension simplifies the process of creating and managing reactive smart contracts by providing easy-to-use commands and templates.

## Features

- Quick insertion of Reactive Smart Contract templates
- Pre-built snippets for common Reactive Network patterns
- Support for Solidity language
- Easy-to-use commands for generating reactive contract components

### Available Commands

- `Create Reactive Smart Contract`: Generate a complete reactive smart contract template
- `Insert Reactive Event Template`: Add a reactive event definition
- `Insert Reactive Callback Function`: Add a callback function template
- `Insert Reactive Subscribe Function`: Add a subscription function
- `Insert Reactive React Function`: Add a react function template
- `Insert Reactive Unsubscribe Function`: Add an unsubscribe function
- `Insert Reactive Constants`: Add commonly used reactive constants

## Requirements

- Visual Studio Code ^1.96.0
- Solidity language support

## Installation

1. Open Visual Studio Code
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac) to open the Quick Open dialog
3. Type `ext install reactive-network-assistant` and press Enter

## Usage

### Creating a New Reactive Smart Contract

1. Open a Solidity file (`.sol` extension)
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "Create Reactive Smart Contract" and select the command

### Adding Individual Components

You can add individual components to your contract using these commands in the Command Palette:

- "Insert Reactive Event Template"
- "Insert Reactive Callback Function"
- "Insert Reactive Subscribe Function"
- "Insert Reactive React Function"
- "Insert Reactive Unsubscribe Function"
- "Insert Reactive Constants"

### Example Contract Structure

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import './IReactive.sol';
import './AbstractReactive.sol';

contract MyReactiveContract is IReactive, AbstractReactive {
    // Generated event structure
    event Event(
        uint256 indexed chain_id,
        address indexed _contract,
        uint256 indexed topic_0,
        uint256 topic_1,
        uint256 topic_2,
        uint256 topic_3,
        bytes data,
        uint256 counter
    );

    // Your contract implementation
}
```

## Extension Settings

This extension activates automatically for Solidity files.

## Known Issues

None reported yet. Please submit issues on our GitHub repository.

## Release Notes

### 0.0.2
- Initial release of Reactive Network Assistant
- Added basic template generation
- Included common reactive patterns
- Added support for Solidity files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This extension is licensed under the MIT License.

## Support

If you encounter any problems or have suggestions, please open an issue on our GitHub repository.

---

**Enjoy coding with Reactive Network Assistant!**
