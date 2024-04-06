const admin = require('../Config/firebase')

exports.authCheck = async (req,res,next)=>{
    console.log('Hello middleware',req.headers)
    try{
        //code
        const firebaseuser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken)

        req.user = firebaseuser;
        console.log('req.user:',req.user)


        next()
    }catch(err){
        console.log(err)
}

    
}