/* global Primrose */
Primrose.CodePages.EN_UKX = (function () {
  "use strict";
  var CodePage = Primrose.CodePage;
  return new CodePage("English: UK Extended", "en-GB", {
    CTRLALT: {
      "52": "€",
      "65": "á",
      "69": "é",
      "73": "í",
      "79": "ó",
      "85": "ú",
      "163": "\\",
      "192": "¦",
      "222": "\\",
      "223": "¦"
    },
    CTRLALTSHIFT: {
      "65": "Á",
      "69": "É",
      "73": "Í",
      "79": "Ó",
      "85": "Ú",
      "222": "|"
    },
    NORMAL: {
      "48": "0",
      "49": "1",
      "50": "2",
      "51": "3",
      "52": "4",
      "53": "5",
      "54": "6",
      "55": "7",
      "56": "8",
      "57": "9",
      "59": ";",
      "61": "=",
      "163": "#",
      "173": "-",
      "186": ";",
      "187": "=",
      "188": ",",
      "189": "-",
      "190": ".",
      "191": "/",
      "192": "'",
      "219": "[",
      "220": "\\",
      "221": "]",
      "222": "#",
      "223": "`"
    }, SHIFT: {
      "48": ")",
      "49": "!",
      "50": "\"",
      "51": "£",
      "52": "$",
      "53": "%",
      "54": "^",
      "55": "&",
      "56": "*",
      "57": "(",
      "59": ":",
      "61": "+",
      "163": "~",
      "173": "_",
      "186": ":",
      "187": "+",
      "188": "<",
      "189": "_",
      "190": ">",
      "191": "?",
      "192": "@",
      "219": "{",
      "220": "|",
      "221": "}",
      "222": "~",
      "223": "¬"
    }
  });
})();
