const router = require("express").Router();

const ItemController = require("../../controllers/Item/ItemController");

router.get("/browse", ItemController.browse);
router.get("/read/:id", ItemController.read);
router.get("/browseByCat", ItemController.browseByCat);
router.get("/browseCat", ItemController.browseCategory);

module.exports = router;