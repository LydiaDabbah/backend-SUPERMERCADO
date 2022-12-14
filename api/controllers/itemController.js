// req.body

// req.query

// req.params

// req.headers

import Item from '../models/Item.js';

const create = async (req, res) => {
  try {
    /**Poner a prueba funciones que puedan fallar */
    const item = await Item.create(req.body);// asumiendo que la informacion que llega a req.body sea exacto la que necesitaos
    return res.json({
      msg: 'Item creado satisfactoriamente',
      item,
    });
  } catch (error) {
    //Qué hacer con ese error
    return res.status(500).json({
      msg: 'Error al crear item',
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const items = await Item.find(req.query);
    return res.json({
      msg: 'Items encontrados',
      items,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar items',
      error,
    });
  }
};

const readById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id);
    return res.json({
      msg: 'Item encontrado',
      item,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al buscar por id',
      error,
    });
  }
};


const update = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Item modificado',
      item,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar item',
      error,
    });
  }
};

const remove = () => {};

export { create, read, readById, remove, update };

/**
 * app.use(string, fn)
 *
 * app.use(fn)
 *
 * app.use(fn1, fn2)
 *
 * app.use(fn1, fn2, fn3)
 *
 * app.use(...fnx)
 */