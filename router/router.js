const express = require('express');
const{getsupplier,putsupplier,postsupplier,deletesupplier,getsuppliersf}=require('../controller/controller');

const router = express.Router();

router.get('/',getsuppliersf);
router.get('/',getsupplier);
router.put('/:id',putsupplier);
router.post('/',postsupplier);
router.delete('/:id',deletesupplier);

module.exports=router; 