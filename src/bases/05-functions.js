// Funciones en JS
const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
}

// const saludar2 = ( nombre ) =>{
//     return `Hola, ${ nombre }`;
// }

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;

console.log( saludar('Lorenzo') );
console.log( saludar3('Ramiro') );
console.log( saludar4 );

const getUser = () => 
    ( {
        uid:'ABC123',
        username: 'El user'
    });

const user = getUser();
console.log( user );

