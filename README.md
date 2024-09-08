# Angular Form with Undo/Redo Functionality

This project demonstrates the implementation of Undo/Redo functionality in an Angular form using RxJS and Angular Material. The form allows users to revert or reapply changes made to various form fields.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Implementation Details](#implementation-details)
  - [UndoRedoFormComponent](#undoredoformcomponent)
  - [StateService](#stateservice)
- [How It Works](#how-it-works)
- [Testing the Undo/Redo Functionality](#testing-the-undoredo-functionality)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Demo

_Link to a live demo of the project (if available)_

## Features

- Reactive form with multiple input fields (text inputs, dropdown, checkbox).
- Undo and Redo functionality for user inputs.
- State management using RxJS.
- Integration with Angular Material for a modern UI.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArwaMohamed/undo-redo-form
   cd your-repo-name
2. **Install dependencies**:
   npm install
3. **Run the application:**:
   ng serve

## Usage

1. **Fill out the form**: Enter values in the **Name**, **Email**, **Gender**, and **Subscribe** fields.
2. **Undo/Redo actions**: Use the **Undo** button to revert the last change and the **Redo** button to reapply it.

## File Structure

 ```plaintext
src/
|-- app/
|   |-- components/
|   |   |-- undo-redo-form/
|   |   |   |-- undo-redo-form.component.ts
|   |   |   |-- undo-redo-form.component.html
|   |   |   |-- undo-redo-form.component.scss
|   |   |   |-- undo-redo-form.component.spec.ts
|   |-- services/
|   |   |-- state.service.ts
|   |-- app.module.ts
|-- assets/
|-- environments/
|-- main.ts
```
## Implementation Details
### UndoRedoFormComponent

- **undo-redo-form.component.html**: Contains the form fields and Undo/Redo buttons.
- **undo-redo-form.component.ts**:
  - Initializes the form with Angular’s `FormBuilder`.
  - Subscribes to form value changes and updates the state using the `StateService`.
  - Implements `undo()` and `redo()` methods to revert or reapply changes.
  - Uses getters `canUndo` and `canRedo` to enable/disable buttons.
## StateService

### State Management:
- Maintains two stacks (`undoStack` and `redoStack`) to track form states.

### Methods:
- **`setInitialState(state: any)`**: Sets the initial form state.
- **`pushState(state: any)`**: Pushes a new state to the undo stack and clears the redo stack.
- **`undo()`**: Moves the current state to the redo stack and returns the previous state.
- **`redo()`**: Moves the state from the redo stack to the undo stack and returns it.

## How It Works

### Form Initialization:
- The form is initialized, and the initial state is saved.

### State Changes:
- Each form value change is pushed to the `StateService`.

### Undo/Redo:
- **Undo**: The previous state is restored from the undo stack.
- **Redo**: The next state is reapplied from the redo stack.

## Testing the Undo/Redo Functionality

### Initialization:
- Ensure the form is initialized with empty fields and the Undo/Redo buttons are disabled.

### Making Changes:
- Modify form fields and test Undo/Redo actions.

### Edge Cases:
- Verify button states when no more undo/redo actions are possible.

## Best Practices

### State Management:
- Using `BehaviorSubject` for state handling ensures immediate access to the latest state.

### Modularity:
- The component and service are designed to be reusable.

### Reactive Forms:
- Leveraging Angular’s reactive forms for better state management.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.


## License
