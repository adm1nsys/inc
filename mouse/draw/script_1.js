

// Переменные диапазона для экспорта конкретного 4x4 сектора


function export_s1() {
  let line_start = { x: 1, y: 1 };
  let line_end = { x: 4, y: 4 };
  exportSectorToJSON(line_start, line_end);
}

function export_s2(){
  let line_start = { x: 5, y: 1 };
  let line_end = { x: 8, y: 4 };
  exportSectorToJSON()
}

function export_s3(){
  let line_start = { x: 9, y: 1 };
  let line_end = { x: 12, y: 4 };
  exportSectorToJSON()
}

function export_s4(){
  let line_start = { x: 13, y: 1 };
  let line_end = { x: 16, y: 4 };
  exportSectorToJSON()
}
//


function exportSectorToJSON(line_start, line_end) {
    const sectorData = [];
    for (let r = line_start.y; r <= line_end.y; r++) {
        const columnContainer = [];
        for (let c = line_start.x; c <= line_end.x; c++) {
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
        sectorData.push(columnContainer);
    }

    const startAndTargets = {
        start: startCell && startCell.x !== null && startCell.y !== null ? { x: parseInt(startCell.x), y: parseInt(startCell.y) } : null,
        targets: targetCells.map(cell => ({ x: parseInt(cell.x), y: parseInt(cell.y) }))
    };
    //
    // const json = JSON.stringify({
    //     "Grid Data": sectorData,
    //     "Start and Targets": startAndTargets
    // }, null, 2);


    const json = JSON.stringify({
          "Grid Data": sectorData,
          "Start and Targets": startAndTargets
      }, null, 2);

      // Создание BLOB объекта и URL для него
      const blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
      const url = URL.createObjectURL(blob);

      // Создание временной ссылки для скачивания
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'sectorExport.json'; // Название файла
      document.body.appendChild(downloadLink);
      downloadLink.click(); // Программное нажатие на ссылку для скачивания
      document.body.removeChild(downloadLink); // Удаление временной ссылки
      URL.revokeObjectURL(url); // Освобождение ресурсов, занятых URL
      console.log(json);
      return json;
  }

  $(document).ready(function() {
      $('#exportSectorButton').click(function() {
          exportSectorToJSON();
      });
  });






  var jsonFiles = ['/inc/mouse/draw/s_1/sectorExport.json', '/inc/mouse/draw/s_1/sectorExport1.json'];

function import_s1(){
  const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
  $.getJSON(randomFile, function(data) {
      applyImportedData_s(data);
  }).fail(function() {
      console.error("Error loading JSON file.");
  });
}

  // $(document).ready(function() {
      // $('#importButton1').click(function() {
      //
      // });
  // });

  function applyImportedData_s(data) {
    const { 'Grid Data': gridData, 'Start and Targets': startAndTargets } = data;

   // Применяем данные к ячейкам в указанном диапазоне
   for (let y = line_start.y, dy = 0; y <= line_end.y; y++, dy++) {
       for (let x = line_start.x, dx = 0; x <= line_end.x; x++, dx++) {
           const cellData = gridData[dy][dx];
           const binaryString = cellData.toString(2).padStart(4, '0');
           const cellSelector = `#e_${y}_${x}`;
           const $cell = $(cellSelector);
           $cell.data({
               'border-top': binaryString[0] === '1' ? 'toggled' : '',
               'border-right': binaryString[1] === '1' ? 'toggled' : '',
               'border-bottom': binaryString[2] === '1' ? 'toggled' : '',
               'border-left': binaryString[3] === '1' ? 'toggled' : ''
           });
           updateBorderColor($cell, binaryString);
       }
   }

   // Обновление стартовой и целевых ячеек в логике игры
   if (startAndTargets.start) {
       const start = startAndTargets.start;
       const $startCell = $(`#e_${start.y}_${start.x}`);
       $startCell.css('background-color', startColor); // Визуальное обновление
       updateGameStart(start.y, start.x); // Логическое обновление
   }

   // Очистка старых целей и установка новых
   clearGameTargets();
   startAndTargets.targets.forEach(target => {
       const $targetCell = $(`#e_${target.y}_${target.x}`);
       $targetCell.css('background-color', targetColor); // Визуальное обновление
       addGameTarget(target.y, target.x); // Логическое обновление
   });
}

function updateBorderColor($cell, binaryString) {
   ['top', 'right', 'bottom', 'left'].forEach((border, index) => {
       $cell.css(`border-${border}`, binaryString[index] === '1' ? `5px solid ${borderColor}` : `5px solid ${cellColor}`);
   });
}

function updateGameStart(y, x) {
   // Обновление глобальной переменной или вызов метода для установки новой стартовой ячейки
   startCell.x = x;
   startCell.y = y;
}

function clearGameTargets() {
   // Очистка списка целей
   // Предполагаем, что это глобальная переменная
var targetCells = []; // Используйте var или let для изменяемости

}

function addGameTarget(y, x) {
   // Добавление новой цели в список
   targetCells.push({ x: x, y: y });
}
