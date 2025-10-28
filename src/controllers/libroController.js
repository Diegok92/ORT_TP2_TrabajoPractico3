// Controlador CRUD de libros
const libroModel = require("../models/libroModel");

// Obtengo todos los libros
const obtenerLibros = (req, res) => {
	const libros = libroModel.obtenerTodos();
	res.json(libros);
};

// Obtengo un libro por su ID
const obtenerLibroPorId = (req, res) => {
	const id = parseInt(req.params.id);
	const libro = libroModel.obtenerPorId(id);

	if (libro) {
		res.json(libro);
	} else {
		res.status(404).json({ mensaje: `Libro con ID ${id} no encontrado` });
	}
};

// Creo un nuevo libro
const crearLibro = (req, res) => {
	const { titulo, autor, año } = req.body;

	if (!titulo || !autor || !año) {
		return res
			.status(400)
			.json({ mensaje: "Se requieren los campos: titulo, autor y año" });
	}

	const añoNum = parseInt(año);

	const nuevoLibro = libroModel.agregar({ titulo, autor, año: añoNum });
	res.status(201).json(nuevoLibro);
};

// Actualizo un libro existente
const actualizarLibro = (req, res) => {
	const id = parseInt(req.params.id);
	const { titulo, autor, año } = req.body;

	if (!titulo || !autor || !año) {
		return res
			.status(400)
			.json({ mensaje: "Se requieren los campos: titulo, autor y año" });
	}

	const añoNum = parseInt(año);

	const libroActualizado = libroModel.actualizar(id, {
		titulo,
		autor,
		año: añoNum,
	});

	if (libroActualizado) {
		res.json(libroActualizado);
	} else {
		res.status(404).json({ mensaje: `Libro con ID ${id} no encontrado` });
	}
};

// Elimino un libro
const eliminarLibro = (req, res) => {
	const id = parseInt(req.params.id);
	const resultado = libroModel.eliminar(id);

	if (resultado) {
		res.json({ mensaje: `Libro con ID ${id} eliminado correctamente` });
	} else {
		res.status(404).json({ mensaje: `Libro con ID ${id} no encontrado` });
	}
};

module.exports = {
	obtenerLibros,
	obtenerLibroPorId,
	crearLibro,
	actualizarLibro,
	eliminarLibro,
};
