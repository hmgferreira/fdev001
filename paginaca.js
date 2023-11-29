const limite = 10;
const totalRegistros = 1005;
let total_paginas = totalRegistros / limite;
const sobraRegistros = (totalRegistros % limite)
if(sobraRegistros > 0) {
    total_paginas = total_paginas + 1;
}

let page = 2;
let offset = 0;
if(page > 1) {
    offset = (--page * limite);
}