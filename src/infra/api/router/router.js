import { Router } from "express";
import { UserController } from "../controller/user/user-controller.js";
import { AuthenticateController } from "../controller/auth/Authenticate.js";
import { authMiddleware } from "../middleware/auth.js";
import { AccountController } from "../controller/account/Account-Controller.js";
import { AnalyticsController } from "../controller/analytics/Analytics-Controller.js";

const router = Router();

const userController = new UserController();
const authController = new AuthenticateController();
const accountController = new AccountController();
const analyticsController = new AnalyticsController();

router.post("/user", userController.handle);
router.get("/users", authMiddleware, userController.getAll);
router.put("/user/:id", authMiddleware, userController.update);

router.post("/auth", authController.authenticate);

router.post("/account", accountController.create);

router.post("/analytics", analyticsController.handle);


router.get("/healthcheck", (req, res) => {
  try {
    res.status(200).send({ msg: "Tudo ok aqui chefia" });
  } catch (error) {
    res.status(500).send({ msg: "Deu erro na aplicação" })
  }
})

export default router;
