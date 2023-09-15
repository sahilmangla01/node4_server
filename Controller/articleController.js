const dashboard =(req,res)=>{
    res.send(
        {
            name:"Sahil",
            email: "maglasahil@gmail.com",
            profileImg : "dkgfhlasgf"
        }
    )
}

const profile = (req,res)=>{
    res.send([
        {
            name:"Sahil",
            email: "maglasahil@gmail.com",
            profileImg : "dkgfhlasgf"
        }
    ])
}

module.exports ={dashboard , profile}