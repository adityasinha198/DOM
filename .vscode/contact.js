const express  = require('express')
const path = require('path')
const router = express.Router();


// /admin/add-product => GET
router.get('/contact', (req, res, next) => {
  res.send('<form action="/contact" method="POST"><label>Username  </label><input type="text"><br><label>Emailid  </label><input type="email"><br><button type="submit">Submit</button></form>'
    
  );
});

// /admin/add-product => POST
router.post('/contact', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});

module.exports = router;