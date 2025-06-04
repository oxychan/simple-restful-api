import Joi from "joi";

const createMahasiswaValidation = Joi.object({
  nama: Joi.string().max(255).required(),
  nim: Joi.string().max(10).required(),
  jurusan: Joi.string().max(255).required(),
});

const updateMahasiswaValidation = Joi.object({
  nama: Joi.string().max(255).required(),
  nim: Joi.string().max(10).required(),
  jurusan: Joi.string().max(255).required(),
});

export { createMahasiswaValidation, updateMahasiswaValidation };