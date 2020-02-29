const router = require("express").Router();

//import functionality from the controller
const { getCats, createCat, updateCat, deleteCat } = require("../../controllers/cats_controllers");

//create full CRUD routes at "/cats" (it will eventually become "/api/cats")
router.get("/cats", (req, res) => {
  getCats()
  .then(catdata => {
    res.status(200).json(catdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });

})

router.post("/cats",  (req, res) => {
  //
  updateCats()
  .then(catdata => {
    res.status(200).json(catdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });
})


router.put("/cats/:id",  (req, res) => {

  updateCat(req.body, req.params.id)
  .then(catdata => {
    if (catdata.code == 404) {
      return res.status(404).json(catdata);
    }
    res.status(200).json(catdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.delete("/cats/:id", (req, res) => {

  deleteCat(req.params.id)
  .then(catdata => {
    if (catdata.code == 404) {
      return res.status(404).json(catdata);
    }
    res.status(200).json(catdata);
  })
  .catch(err => {
    res.status(500).json(err); 
  });
});

module.exports = router