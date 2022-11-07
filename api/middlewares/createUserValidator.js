import joi from 'joi';

const createUserValidator = async (req, res, next) => {
  /**
   * 1.- crear schema ✅
   * 2.- validar req.body con el schema ✅
   *  si todo sale bien -> next()✅
   *  si no res.status(400)✅
   * 3.- registrar middleware
   */

  const userSchema = joi.object({ // object porque va a ser un objeto lo que valida. le pasas el mismo schema del de user que quieres validar 
    name: joi.string().required(),
    email: joi.string().email().required(),
  });

  try {
    await userSchema.validateAsync(req.body);
    next(); // si todo esta bien se va al siguiente middleware
  } catch (error) {// si algo falla manda error
    return res.status(400).json({
      msg: 'Datos incorrectos',
      error,
    });
  }
};

export { createUserValidator };