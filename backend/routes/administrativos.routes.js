import { Router } from "express";
import {
  putAdministrativo, postAdministrativo, getAdministrativos, getAdministrativo, deleteAdministrativo, activarAdministrativo, getAsistenciasAlumno, putAsistenciasAlumno,
} from "../controllers/administrativos.controller.js";
import {
  activarAdministrativoMidd,
  deleteAdministrativoMidd,
  getAdministrativoMidd, getAdministrativosMidd, getInasistenciasMidd, postAdministrativoMidd, putAdministrativoMidd,
} from "../middlewares/administrativos.middlewares.js";
import { verificarRoles } from "../middlewares/verificarRoles.middlewares.js";
import verificarToken from "../middlewares/verificarToken.js";

const router = Router();

router.get("/administrativos", verificarToken, verificarRoles, getAdministrativosMidd, getAdministrativos);
router.get("/administrativos/:id", verificarToken, verificarRoles, getAdministrativoMidd, getAdministrativo);
router.post("/administrativos", verificarToken, verificarRoles, postAdministrativoMidd, postAdministrativo);
router.put("/administrativos/:id", verificarToken, verificarRoles, putAdministrativoMidd, putAdministrativo);
router.patch("/administrativos/:id", verificarToken, verificarRoles, activarAdministrativoMidd, activarAdministrativo);
router.delete("/administrativos/:id", verificarToken, verificarRoles, deleteAdministrativoMidd, deleteAdministrativo);

router.get("/inasistencias/:id", verificarToken, verificarRoles, getInasistenciasMidd, getAsistenciasAlumno);
router.put("/inasistencias/:id", verificarToken, verificarRoles, getInasistenciasMidd, putAsistenciasAlumno);

export default router;
