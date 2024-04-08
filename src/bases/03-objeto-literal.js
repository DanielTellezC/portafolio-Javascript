const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 23452435,
        lat: 12.2313,
        lng: 34.23424
    }
};

//console.table( persona );
console.log( persona );

const persona2 = { ...persona };

console.log(persona2);