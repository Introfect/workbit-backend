const router = require("express").Router();
const authRouter = require("./auth/authRoutes");
const boardRoutes = require("./board/boardRoutes");
const authMiddleware = require("../middlewares/authentication");
// const userProfileRouter = require("./userProfile");
// const userVerification = require("./userVerification");
// const companyRoutes = require("./company/companyRoutes");
// const jobRoutes = require("./job/jobRoutes");

router.use("/auth", authRouter);
router.use("/board", authMiddleware, boardRoutes);
// router.use("/userprofile", userProfileRouter);
// router.use("/userVerification", userVerification);
// router.use("/company", companyRoutes);
// router.use("/jobs", jobRoutes);

module.exports = router;