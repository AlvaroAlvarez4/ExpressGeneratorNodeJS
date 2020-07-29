var express = require('express');
var router = express.Router();

/* GET alumnos page. */
router.get('/', function(req, res, next) {
    res.render('alumno', { title: 'Express' });
});

module.exports = router;