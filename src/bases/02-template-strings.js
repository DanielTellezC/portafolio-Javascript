const nombre = 'fernando';
const apellido = 'herrera';

// const nombrecompleto = nombre + ' ' +apellido;
const nombrecompleto = ` ${nombre} 
                         ${apellido} 
                         ${1+1}
                        `;

function getSaludo(nombre){
    return ('hola, saludos'+nombre);
}

console.log(nombrecompleto, `este es un saludo: ${getSaludo(nombre)} `);