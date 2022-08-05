module.exports = app => {
    // VALIDAR SE TEM VALOR.
    // Ou seja, se não tiver, tem que dar erro:
    function existsOrError(value, msg) {
        if (!value) throw msg;
        if (Array.isArray(value) && value.length === 0) throw msg;
        if (typeof value === 'string' && !value.trim()) throw msg;
    }

    // VALIDAR SE NÃO TEM VALOR.
    // Ou seja, se tiver, tem que dar erro:
    function notExistsOrError(value, msg) {
        /* Percebe-se que o retorno correto
        * tem que cair no 'catch' */

        try {
            existsOrError(value, msg);
        } catch(msg) {
            return;
        }
        throw msg;
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg;
    }

    return { existsOrError, notExistsOrError, equalsOrError };
}