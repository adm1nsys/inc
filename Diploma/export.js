// Top, Right, Bottom, Left
function exportGridToJSON() {
    const gridData = [];
    for (let r = 1; r <= rows; r++) {
        const columnContainer = [];
        for (let c = 1; c <= columns; c++) {
            const $element = $('#e_' + r + '_' + c);
            const binaryString = [
                isBorderRed($element, 'top') ? '1' : '0',
                isBorderRed($element, 'right') ? '1' : '0',
                isBorderRed($element, 'bottom') ? '1' : '0',
                isBorderRed($element, 'left') ? '1' : '0'
            ].join('');
            const decimal = parseInt(binaryString, 2);
            columnContainer.push(decimal);
        }
        gridData.push(columnContainer);
    }

    const startAndTargets = {
        start: startCell && startCell.x !== null && startCell.y !== null ? { x: parseInt(startCell.x), y: parseInt(startCell.y) } : null,
        targets: targetCells.map(cell => ({ x: parseInt(cell.x), y: parseInt(cell.y) }))
    };

    const colorSettings = {
        borderColor: borderColor,
        startColor: startColor,
        targetColor: targetColor,
        cellColor: cellColor
    };

    const content = JSON.stringify({
        "comment": "How to use this export: Each cell's borders are represented as a decimal number converted from binary. The binary order is Top, Bottom, Left, Right (e.g., 1010 represents top and left borders clicked). To convert from decimal to binary, use a binary converter or programming method (e.g., (9).toString(2) in JavaScript).",
        "Grid Data": gridData,
        "Start and Targets": startAndTargets,
        "Color Settings": colorSettings
    }, null, 2);

    const blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "gridExport.json";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

$(document).ready(function() {
    $('#exportButton').click(function() {
        exportGridToJSON();
    });
});
