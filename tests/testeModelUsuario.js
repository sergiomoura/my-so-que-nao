const {Usuario} = require('../models');

Usuario.findAll().then(
    data => console.log(data)
)