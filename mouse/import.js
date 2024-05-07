///MARK:Тут вроде import файла JSON. Но это не точно

$(document).ready(function() {
    $('#importButton').click(function() {
        let fileInput = document.getElementById('importFileInput');
        if (fileInput.files.length > 0) {
            let reader = new FileReader();
            reader.onload = function(e) {
                try {
                    let content = JSON.parse(e.target.result);
                    applyImportedData(content);
                } catch (error) {
                    console.error("Error parsing and applying JSON:", error);
                }
            };
            reader.readAsText(fileInput.files[0]);
        } else {
            alert("Please select a file to import.");
        }
    });
});


///MARK: Даже не стану утверждать что я хоть что-то понимаю здесь

function applyImportedData(data) {
    const { 'Grid Data': gridData, 'Start and Targets': startAndTargets, 'Color Settings': colorSettings } = data;

    gridData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const binaryString = cell.toString(2).padStart(4, '0');
            const cellSelector = `#e_${rowIndex + 1}_${colIndex + 1}`;
            const $cell = $(cellSelector);
            $cell.data({
                'border-top': binaryString[0] === '1' ? 'toggled' : '',
                'border-right': binaryString[1] === '1' ? 'toggled' : '',
                'border-bottom': binaryString[2] === '1' ? 'toggled' : '',
                'border-left': binaryString[3] === '1' ? 'toggled' : ''
            });

            // Apply border styles based on whether they have been toggled
            ['top', 'right', 'bottom', 'left'].forEach((border, index) => {
                $cell.css('border-' + border, binaryString[index] === '1' ? `5px solid ${colorSettings.borderColor}` : `5px solid ${colorSettings.cellColor}`);
            });
        });
    });

    // Update color pickers and opacity sliders to reflect imported settings
    updateColorPickerAndSlider('#borderColorPicker', '#borderOpacitySlider', colorSettings.borderColor);
    updateColorPickerAndSlider('#startColorPicker', '#startOpacitySlider', colorSettings.startColor);
    updateColorPickerAndSlider('#targetColorPicker', '#targetOpacitySlider', colorSettings.targetColor);
    updateColorPickerAndSlider('#cellColorPicker', '#cellOpacitySlider', colorSettings.cellColor);

    // Reset the background color of all cells and clear previous start and target cells
    $('.divForGame').css('background-color', colorSettings.cellColor);
    startCell.x = null;
    startCell.y = null;
    targetCells.splice(0, targetCells.length); // Clear the target cells array

    // Apply start cell
    if (data['Start and Targets'].start) {
        const start = data['Start and Targets'].start;
        startCell.x = start.x;
        startCell.y = start.y;
        $(`#e_${start.y}_${start.x}`).css('background-color', colorSettings.startColor);
    }

    // Apply target cells
    data['Start and Targets'].targets.forEach(target => {
        targetCells.push({ x: target.x, y: target.y });
        $(`#e_${target.y}_${target.x}`).css('background-color', colorSettings.targetColor);
    });

    ///MARK: Ого. Оно работает!
    // Update global color variables to match imported settings
    borderColor = colorSettings.borderColor;
    startColor = colorSettings.startColor;
    targetColor = colorSettings.targetColor;
    cellColor = colorSettings.cellColor;
}

function updateColorPickerAndSlider(colorPickerId, opacitySliderId, rgbaString) {
    const rgba = parseRgba(rgbaString);
    if (!rgba) return;

    const { r, g, b, a } = rgba;
    const hexColor = rgbToHex(r, g, b);
    const opacity = a;

    $(colorPickerId).val(hexColor);
    $(opacitySliderId).val(opacity);
}

function parseRgba(rgbaString) {
    const match = rgbaString.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/);
    return match ? {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10),
        a: parseFloat(match[4])
    } : null;
}

function rgbToHex(r, g, b) {
    const hex = c => c.toString(16).padStart(2, '0');
    return "#" + hex(r) + hex(g) + hex(b);
}
















$(document).ready(function() {
    $('#importButton2').click(function() {
        let fileInput = document.getElementById('importFileInput2');
        if (fileInput.files.length > 0) {
            let reader = new FileReader();
            reader.onload = function(e) {
                try {
                    let content = JSON.parse(e.target.result);
                    applyImportedData2(content);
                } catch (error) {
                    console.error("Error parsing and applying JSON:", error);
                }
            };
            reader.readAsText(fileInput.files[0]);
        } else {
            alert("Please select a file to import.");
        }
    });
});

function applyImportedData2(data) {
    const { 'Grid Data': gridData, 'Start and Targets': startAndTargets, 'Color Settings': colorSettings } = data;

    gridData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const binaryString = cell.toString(2).padStart(4, '0');
            const cellSelector = `#e_${rowIndex + 1}_${colIndex + 1}`;
            const $cell = $(cellSelector);
            $cell.data({
              'border-left': binaryString[3] === '1' ? 'toggled' : ''
              'border-bottom': binaryString[2] === '1' ? 'toggled' : '',
              'border-right': binaryString[1] === '1' ? 'toggled' : '',
                'border-top': binaryString[0] === '1' ? 'toggled' : '',
            });

            ['top', 'right', 'bottom', 'left'].forEach((border, index) => {
                $cell.css('border-' + border, binaryString[index] === '1' ? `5px solid ${colorSettings.borderColor}` : `5px solid ${colorSettings.cellColor}`);
            });
        });
    });

    updateColorPickerAndSlider('#borderColorPicker2', '#borderOpacitySlider2', colorSettings.borderColor);
    updateColorPickerAndSlider('#startColorPicker2', '#startOpacitySlider2', colorSettings.startColor);
    updateColorPickerAndSlider('#targetColorPicker2', '#targetOpacitySlider2', colorSettings.targetColor);
    updateColorPickerAndSlider('#cellColorPicker2', '#cellOpacitySlider2', colorSettings.cellColor);

    $('.divForGame').css('background-color', colorSettings.cellColor);
    startCell.x = null;
    startCell.y = null;
    targetCells.splice(0, targetCells.length);

    if (startAndTargets.start) {
        const start = startAndTargets.start;
        startCell.x = start.x;
        startCell.y = start.y;
        $(`#e_${start.y}_${start.x}`).css('background-color', colorSettings.startColor);
    }

    startAndTargets.targets.forEach(target => {
        targetCells.push({ x: target.x, y: target.y });
        $(`#e_${target.y}_${target.x}`).css('background-color', colorSettings.targetColor);
    });

    borderColor = colorSettings.borderColor;
    startColor = colorSettings.startColor;
    targetColor = colorSettings.targetColor;
    cellColor = colorSettings.cellColor;
}
