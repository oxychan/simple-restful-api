import { MahasiswaController } from "../controller/mahasiswa.controller.js";
import { Router } from "express";

const apiRouter = new Router();

apiRouter.get("/api/mahasiswas", MahasiswaController.getMahasiswas);
apiRouter.get("/api/mahasiswas/:id", MahasiswaController.getMahasiswa);
apiRouter.post("/api/mahasiswas", MahasiswaController.create);
apiRouter.put("/api/mahasiswas/:id", MahasiswaController.update);
apiRouter.delete("/api/mahasiswas/:id", MahasiswaController.delete);

export { apiRouter };
