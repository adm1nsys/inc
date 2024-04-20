var rows = 16; // Number of elements in a row
var columns = 16; // Number of rows

let mode = 'paint'; // Can be 'paint', 'start', or 'target'
const startCell = { x: null, y: null };
const targetCells = [];

let borderColor = 'rgba(255, 0, 0, 1)'; // Default red with full opacity for borders
let startColor = 'rgba(0, 255, 0, 1)'; // Default green with full opacity for the start cell
let targetColor = 'rgba(0, 0, 255, 1)'; // Default blue with full opacity for target cells
let cellColor = 'rgba(255, 255, 255, 1)'; // Default white with full opacity for empty cells


$(document).ready(function() {
  // Switch modes
  $('#modePaint').click(function() { mode = 'paint'; });
  $('#modeStart').click(function() { mode = 'start'; });
  $('#modeTarget').click(function() { mode = 'target'; });

  // Generate the grid
  function generateGrid() {
    var gridHtml = '';
    for (var r = 1; r <= rows; r++) {
      gridHtml += '<div class="row">';
      for (var c = 1; c <= columns; c++) {
        gridHtml += `<div id="e_${r}_${c}" class="divForGame"></div>`;
      }
      gridHtml += '</div>';
    }
    $('#divForArea').html(gridHtml);
  }

  generateGrid();

  $('#borderColorPicker').change(function() {
      updateBorderColor();
  });

  $('#borderOpacitySlider').change(function() {
      updateBorderColor();
  });

  $('#startColorPicker, #startOpacitySlider').change(updateStartColor);
  $('#targetColorPicker, #targetOpacitySlider').change(updateTargetColor);
  $('#cellColorPicker, #cellOpacitySlider').change(updateCellColor);


  function updateStartColor() {
      const color = $('#startColorPicker').val();
      const opacity = $('#startOpacitySlider').val();
      startColor = hexToRgba(color, opacity);
      // Apply the new start color to the start cell if it exists
      if (startCell.x !== null && startCell.y !== null) {
          $(`#e_${startCell.y}_${startCell.x}`).css('background-color', startColor);
      }
  }

  function updateTargetColor() {
      const color = $('#targetColorPicker').val();
      const opacity = $('#targetOpacitySlider').val();
      targetColor = hexToRgba(color, opacity);
      // Apply the new target color to all target cells
      targetCells.forEach(cell => {
          $(`#e_${cell.y}_${cell.x}`).css('background-color', targetColor);
      });
  }

  function updateCellColor() {
      const color = $('#cellColorPicker').val();
      const opacity = $('#cellOpacitySlider').val();
      cellColor = hexToRgba(color, opacity);

      $('.divForGame').each(function() {
          const cell = $(this);
          const id = cell.attr('id');
          const [_, row, col] = id.split('_');
          const isStart = startCell.x == col && startCell.y == row; // Ensure matching types
          const isTarget = targetCells.some(tc => tc.x == col && tc.y == row); // Ensure matching types

          // Skip changing colors for start or target cells
          if (isStart || isTarget) {
              return; // Continue to next iteration in .each loop
          }

          // Update the background color for cells that are not start or target cells
          cell.css('background-color', cellColor);

          // Update border color for cells, only if they have not been "painted"
          ['top', 'bottom', 'left', 'right'].forEach(border => {
              if (!cell.data('border-' + border)) {
                  cell.css('border-' + border, `5px solid ${cellColor}`);
              }
          });
      });
  }




  function updateBorderColor() {
      const color = $('#borderColorPicker').val();
      const opacity = $('#borderOpacitySlider').val();
      borderColor = hexToRgba(color, opacity);
      // Apply the new border color to all elements with toggled borders
      $('.divForGame').each(function() {
          const cell = $(this);
          ['top', 'bottom', 'left', 'right'].forEach(border => {
              if (cell.data('border-' + border) === 'toggled') {
                  cell.css('border-' + border, `5px solid ${borderColor}`);
              }
          });
      });
  }


  // Function to convert hex color to rgba
  function hexToRgba(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  // Delegate click events for dynamically generated elements
  $('#divForArea').on('click', '.divForGame', function(e) {
    const cell = $(this);
    const [_, row, col] = cell.attr('id').split('_');

    if (mode === 'paint') {
  // Example logic for toggling borders and their counterparts on adjacent cells
  var borderWidth = 10; // Assume a 10px border for detection
  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left; // X position within the element.
  var y = e.clientY - rect.top; // Y position within the element.

  // Determine which border was clicked
  var borderClicked = '';
  if (x < borderWidth) borderClicked = 'left';
  else if (x > rect.width - borderWidth) borderClicked = 'right';
  else if (y < borderWidth) borderClicked = 'top';
  else if (y > rect.height - borderWidth) borderClicked = 'bottom';

  // Function to toggle the border of the clicked element and its adjacent
  function toggleBorder(cell, row, col, border) {
    var currentState = cell.data('border-' + border);
    var newStyle = currentState === 'toggled' ? `5px solid ${cellColor}` : `5px solid ${borderColor}`;
    var newState = currentState === 'toggled' ? '' : 'toggled';

    cell.css('border-' + border, newStyle).data('border-' + border, newState);

    // Determine the adjacent cell based on the clicked border
    var adjRow = parseInt(row), adjCol = parseInt(col);
    if (border === 'left') adjCol -= 1;
    else if (border === 'right') adjCol += 1;
    else if (border === 'top') adjRow -= 1;
    else if (border === 'bottom') adjRow += 1;

    var adjBorder = border === 'left' ? 'right' : border === 'right' ? 'left' : border === 'top' ? 'bottom' : 'top';
    var adjCell = $('#e_' + adjRow + '_' + adjCol);
    if (adjCell.length) {
      var adjCurrentState = adjCell.data('border-' + adjBorder);
      var adjNewStyle = adjCurrentState === 'toggled' ? `5px solid ${cellColor}` : `5px solid ${borderColor}`;
      adjCell.css('border-' + adjBorder, adjNewStyle).data('border-' + adjBorder, newState);
    }
  }

  // Apply toggle based on the clicked border
  if (borderClicked) {
    const cell = $(this);
    const [_, row, col] = cell.attr('id').split('_');
    toggleBorder(cell, row, col, borderClicked);
  }
}

 else if (mode === 'start') {
      if (startCell.x === col && startCell.y === row) {
        cell.css('background-color', `${cellColor}`); // Unmark the start cell
        startCell.x = null;
        startCell.y = null;
      } else {
        if (startCell.x !== null && startCell.y !== null) {
          $(`#e_${startCell.y}_${startCell.x}`).css('background-color', `${cellColor}`);
        }
        cell.css('background-color', `${startColor}`); // Mark new start cell
        startCell.x = col;
        startCell.y = row;
      }
    } else if (mode === 'target') {
      const index = targetCells.findIndex(cell => cell.x === col && cell.y === row);
      if (index >= 0) {
        cell.css('background-color', `${cellColor}`); // Unmark the target cell
        targetCells.splice(index, 1);
      } else {
        cell.css('background-color', `${targetColor}`); // Mark as target cell
        targetCells.push({ x: col, y: row });
      }
    }
  });
});



function isBorderRed($element, border) {
    // This function checks if the border of the element is red by looking at the data attribute
    return $element.data('border-' + border) === 'toggled';
}
