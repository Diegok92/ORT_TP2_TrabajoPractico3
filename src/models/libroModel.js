// creo un par para tener en la base
let libros = [
	{ id: 1, titulo: "Yo Robot", autor: "Isaac Asimov", año: 1950 },
	{ id: 2, titulo: "Jurassic Park", autor: "Michael Crichton", año: 1990 },
	{
		id: 3,
		titulo: "El señor de los anillos",
		autor: "J.R.R. Tolkien",
		año: 1954,
	},
];

const obtenerTodos = () => {
	return libros;
};

const obtenerPorId = (id) => {
	return libros.find((libro) => libro.id === id);
};

const agregar = (libro) => {
	// Generar un nuevo ID
	const nuevoId =
		libros.length > 0 ? Math.max(...libros.map((l) => l.id)) + 1 : 1;
	const nuevoLibro = { ...libro, id: nuevoId };
	libros.push(nuevoLibro);
	return nuevoLibro;
};

// Actualizo por Id
const actualizar = (id, libroActualizado) => {
	const indice = libros.findIndex((libro) => libro.id === id);
	if (indice === -1) return null;

	// Mantener el ID original y actualizar el resto de propiedades
	const libroModificado = { ...libroActualizado, id };
	libros[indice] = libroModificado;
	return libroModificado;
};

// Elimino un libro por Id
const eliminar = (id) => {
	const indice = libros.findIndex((libro) => libro.id === id);
	if (indice === -1) return false;

	libros.splice(indice, 1);
	return true;
};

module.exports = {
	obtenerTodos,
	obtenerPorId,
	agregar,
	actualizar,
	eliminar,
};
