const Paginate = {
    limit: 3,

    getConfigPaginate: (page, totalRegistros, limite) => {

        let total_paginas = totalRegistros / limite;
        const sobraRegistros = (totalRegistros % limite)
        if(sobraRegistros > 0) {
            total_paginas = total_paginas + 1;
        }
        
        let offset = 0;
        if(page > 1) {
            offset = (--page * limite);
        }
        return {
            limite: limite,
            offset: offset,
            total_paginas: parseInt(total_paginas)
        };
    }
};

export default Paginate;