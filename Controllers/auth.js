const User = require('../Model/User')


exports.createAndUpdateUser = async(req,res)=>{
//     const non = 'Hello Controller 5555555  Im from server'
//    console.log('Contriller:',req.user)
//     res.json(non)
        const {name,email} = req.user
        // console.log(name,email)
        const user = await User.findOneAndUpdate(
            {email},
            {name},
            {new:true}
        )
        if(user){
            console.log('User Updated',user)
            res.json(user)
        }else{
            const newUser = await User({
                email,
                name
            }).save();
            console.log('Created user',newUser)
            res.json(newUser)
        }

}


exports.currentUser = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.user.email}).exec()
        res.send(user)
    }catch(err){
        console.log(err)
        res.status(400).send('Server error')
    }
}