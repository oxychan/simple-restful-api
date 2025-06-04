import mahasiswaService from "../service/mahasiswa.service.js";

export class MahasiswaController {
  static async getMahasiswas(req, res, next) {
    try {
      const mahasiswas = await mahasiswaService.findAll();
      res.status(200).json({
        data: mahasiswas,
        message: "List mahasiswa fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMahasiswa(req, res, next) {
    const mahasiswaId = req.params.id;

    try {
      const mahasiswa = await mahasiswaService.findById(mahasiswaId);
      res.status(200).json({
        data: mahasiswa,
        message: "Mahasiswa fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const { body } = req;

    try {
      const mahasiswa = await mahasiswaService.create(body);
      res.status(201).json({
        data: { id: mahasiswa },
        message: "Mahasiswa created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const mahasiswaId = req.params.id;
    const { body } = req;

    try {
      await mahasiswaService.update(mahasiswaId, body);
      res.status(200).json({
        message: "Mahasiswa updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const mahasiswaId = req.params.id;

    try {
      await mahasiswaService.delete(mahasiswaId);
      res.status(200).json({
        data: { id: mahasiswaId },
        message: "Mahasiswa deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
