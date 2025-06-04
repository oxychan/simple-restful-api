import { validate } from "../validation/validation.js";
import {
  createMahasiswaValidation,
  updateMahasiswaValidation,
} from "../validation/mahasiswa.validation.js";
import { ResponseError } from "../error/response.error.js";
import mahasiswaRepository from "../repository/mahasiswa.repository.js";

class MahasiswaService {
  async findAll() {
    return await mahasiswaRepository.findAll();
  }

  async findById(id) {
    const mahasiswa = await mahasiswaRepository.findById(id);
    if (!mahasiswa) {
      throw new ResponseError(404, "Mahasiswa not found");
    }

    return mahasiswa;
  }

  async create(mahasiswa) {
    mahasiswa = validate(createMahasiswaValidation, mahasiswa);

    return await mahasiswaRepository.create(mahasiswa);
  }

  async update(id, mahasiswa) {
    mahasiswa = validate(updateMahasiswaValidation, mahasiswa);

    const isMahasiswaExists = await this.findById(id);
    if (!isMahasiswaExists) {
      throw new ResponseError(404, "Mahasiswa not found");
    }

    return await mahasiswaRepository.update(id, mahasiswa);
  }

  async delete(id) {
    const isMahasiswaExists = await this.findById(id);
    if (!isMahasiswaExists) {
      throw new ResponseError(404, "Mahasiswa not found");
    }

    return await mahasiswaRepository.delete(id);
  }
}

export default new MahasiswaService();