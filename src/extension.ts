// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Reactive Network Assistant extension is now active!');

  // Insert Reactive Smart Contract Template
  const createReactiveContractCommand = vscode.commands.registerCommand('reactive.createReactiveContract', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import './IReactive.sol';
import './AbstractReactive.sol';

contract MyReactiveContract is IReactive, AbstractReactive {
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

    uint256 public counter;

    constructor(address service, address _contract, uint256 topic_0) {
        service.subscribe(
            CHAIN_ID,
            _contract,
            topic_0,
            REACTIVE_IGNORE,
            REACTIVE_IGNORE,
            REACTIVE_IGNORE
        );
    }

    function react(
        uint256 chain_id,
        address _contract,
        uint256 topic_0,
        uint256 topic_1,
        uint256 topic_2,
        uint256 topic_3,
        bytes calldata data,
        uint256 block_number,
        uint256 op_code
    ) external vmOnly {
        // Reaction logic here
    }
}`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive Subscribe Function
  const createReactiveSubscribeCommand = vscode.commands.registerCommand('reactive.createReactiveSubscribe', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
function subscribe(address _contract, uint256 topic_0) external {
    service.subscribe(
        CHAIN_ID,
        _contract,
        topic_0,
        REACTIVE_IGNORE,
        REACTIVE_IGNORE,
        REACTIVE_IGNORE
    );
}`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive Unsubscribe Function
  const createReactiveUnsubscribeCommand = vscode.commands.registerCommand('reactive.createReactiveUnsubscribe', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
function unsubscribe(address _contract, uint256 topic_0) external {
    service.unsubscribe(
        CHAIN_ID,
        _contract,
        topic_0
    );
}`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive Event Template
  const createReactiveEventCommand = vscode.commands.registerCommand('reactive.createReactiveEvent', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
event MyReactiveEvent(
    uint256 indexed chain_id,
    address indexed _contract,
    uint256 indexed topic_0,
    uint256 topic_1,
    uint256 topic_2,
    uint256 topic_3,
    bytes data,
    uint256 counter
);`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive Callback Function
  const createReactiveCallbackCommand = vscode.commands.registerCommand('reactive.createReactiveCallback', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
function callback(address sender) external {
    emit CallbackReceived(
        tx.origin,
        msg.sender,
        sender
    );
    // Additional logic here
}`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive React Function
  const createReactiveReactCommand = vscode.commands.registerCommand('reactive.createReactiveReact', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
function react(
    uint256 chain_id,
    address _contract,
    uint256 topic_0,
    uint256 topic_1,
    uint256 topic_2,
    uint256 topic_3,
    bytes calldata data,
    uint256 block_number,
    uint256 op_code
) external vmOnly {
    // Your reactive logic here
}`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Insert Reactive Constants
  const insertReactiveConstantsCommand = vscode.commands.registerCommand('reactive.insertReactiveConstants', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const template = `
// Reactive Constants
uint256 constant CHAIN_ID = 1; // Replace with appropriate chain ID
uint256 constant REACTIVE_IGNORE = type(uint256).max;
`;
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, template);
      });
    }
  });

  // Register all commands
  context.subscriptions.push(
    createReactiveContractCommand,
    createReactiveEventCommand,
    createReactiveCallbackCommand,
    createReactiveSubscribeCommand,
    createReactiveReactCommand,
    createReactiveUnsubscribeCommand,
    insertReactiveConstantsCommand
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
