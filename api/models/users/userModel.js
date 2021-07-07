const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth')

exports.registerUser = (req, res) => {
    
  User.exists({ email: req.body.email }, (err, result) => {

    // console.log( req.body.email )
      if(err) {
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'You made a bad request',
              err
          })
      }

      if(result) {
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'The email address is already taken'
          })
      }
      
      const salt = bcrypt.genSaltSync(10);
      
      bcrypt.hash(req.body.password, salt, (err, hash) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message:'Failed when encrypting user password',
                err
            })
        }

        const newUser = new User ({
          firstName:        req.body.firstName,
          lastName:         req.body.lastName,
         
          email:            req.body.email,
          passwordHash:     hash
        })

        newUser.save()
         .then(() => {
             return res.status(201).json({
                 statusCode: 201,
                 status: true,
                 message: 'User was created successfully',
             })
         })
         .catch(err => {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create new user',
                err
            })
         })
      })
  })

}

exports.loginUser = (req, res) => {
  
    User.findOne({ email:  req.body.email })
        .then(user => {
            if(!user) { // mail dosen't exist
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message:  'Incorrect email or password'
                })
            }

         bcrypt.compare( req.body.password, user.passwordHash, (err, result) => {
             if(err) {
                 return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'You mae a bad request',
                    err

                 })
             }


             if(result) {
                 res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Authentication was successfully',
                    token:auth.generateToken(user),
                    user:user
                 })
             } else {
                 res.status(401).json({
                     statusCode: 401,
                     status: false,
                     message: ' incorrect email ore password'
                 })
             }
        })
    })
}

exports.addOrder = (req, res) => {
  // det här kommer från frontend
    // console.log(req.params.id)    
    // console.log(req.body.shoppingCart)

  //   let exists = User.exists({ email: req.params.id}) 

  // User.exists({ email: req.params.id}) 
  // console.log(exists)
  // if(exists) {
  //   User.updateOne(
  //     { email: req.params.id},
  //     { $push: { order: req.body } }
  //   )
    
  //   .then(() => {

  //   } )
    
    
  //   console.log(res)
  // }

  
  User.exists({ email: req.params.id }, (err, result) => {
    // console.log(req.body)
        
        if (err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: "You made a bad request.",
          });
        }
        if (result) {
    
          User.updateOne(
            { email: req.params.id },
            { $push: { order: req.body } }
          

          )
          // console.log(req.body.order)
          .then(() => {
              
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: "order added successfully.",
              });
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: "Failed to add order.",
              })
            })
        }
      })
      
    }








