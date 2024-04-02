 const { Router } = require('express');
 const router = Router();


//routing-----------------------------------
router.get('/', (req, res) =>{
    res.json(
        {
            "Title" : "Hello World!"
        }
    );
})

module.exports = router;