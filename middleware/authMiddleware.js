// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const requireAuth = (req, res, next) => {
//     const token = req.cookies.jwt;

//     //check webtoken exists and verified
//     if (token) {
//         jwt.verify(token, 'Secret Code', (err, decodedToken) => {
//             if (err) {
//                 console.log(err);
//                 res.redirect('/login');
//             } else {
//                 console.log(decodedToken);
//                 next();
//             }
//         })
//     } else {
//         res.redirect('/login');
//     }
// }

// //check current user
// const checkUser = (req, res, next) => {
//     const token = req.cookies.jwt;

//     if (token) {
//         jwt.verify(token, 'Secret Code', async (err, decodedToken) => {
//             if (err) {
//                 // console.log(err);
//                 res.locals.user = null;
//                 next();
//             } else {
//                 // console.log(decodedToken);
//                 let user = await User.findById(decodedToken.id);
//                 res.locals.user = user;
//                 next();
//             }
//         })
//     } else {
//         res.locals.user = null;
//         next();
//     }
// };

// module.exports = { requireAuth, checkUser };