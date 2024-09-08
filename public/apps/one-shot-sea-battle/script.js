// Define a custom web component for the 10x10 boolean grid
class SeaBattleGrid extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM
    this.attachShadow({ mode: 'open' });

    // Create a 10x10 boolean field
    this.field = Array.from({ length: 10 }, () => Array(10).fill(false));

    // Coordinate labels (A-J for columns, 1-10 for rows)
    this.columnLabels = 'ABCDEFGHIJ'.split('');
    this.rowLabels = Array.from({ length: 10 }, (_, i) => i + 1);

    // Initialize the component
    this.render();
  }

  // Function to render the grid in the component's shadow DOM
  render() {
    // Clear the shadow DOM
    this.shadowRoot.innerHTML = '';

    // Create styles inside the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        margin: 0 auto;
        text-align: center;
      }
      #grid-container {
        display: grid;
        grid-template-columns: 30px repeat(10, 50px);
        grid-template-rows: 30px repeat(10, 50px);
        gap: 5px;
      }
      .square {
        width: 50px;
        height: 50px;
        background-color: lightblue;
        border: 1px solid #000;
        cursor: pointer;
      }
      .active {
        background-color: lightgreen;
      }
      .label {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
    `;
    this.shadowRoot.appendChild(style);

    // Create the grid container
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';

    // Add empty top-left corner
    const emptyCorner = document.createElement('div');
    emptyCorner.classList.add('label');
    gridContainer.appendChild(emptyCorner);

    // Add column labels (A-J)
    this.columnLabels.forEach((label) => {
      const columnLabel = document.createElement('div');
      columnLabel.classList.add('label');
      columnLabel.textContent = label;
      gridContainer.appendChild(columnLabel);
    });

    // Add row labels and grid cells
    for (let row = 0; row < 10; row++) {
      // Add row label (1-10)
      const rowLabel = document.createElement('div');
      rowLabel.classList.add('label');
      rowLabel.textContent = this.rowLabels[row];
      gridContainer.appendChild(rowLabel);

      // Add grid cells for this row
      for (let col = 0; col < 10; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (this.field[row][col]) {
          square.classList.add('active'); // Apply a different color if true
        }
        square.addEventListener('click', () => this.toggleSquare(row, col));
        gridContainer.appendChild(square);
      }
    }

    // Append the grid to the shadow DOM
    this.shadowRoot.appendChild(gridContainer);
  }

  // Function to toggle the boolean value in the field and update the grid
  toggleSquare(row, col) {
    this.field[row][col] = !this.field[row][col]; // Toggle between true and false
    this.render(); // Re-render the grid after update
  }
}

// Define the custom element
customElements.define('sea-battle-grid', SeaBattleGrid);
