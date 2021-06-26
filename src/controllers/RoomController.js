//const Database = requise("..db/config")

module.exports = {
    create(req, res) {
        

        let roomId 

        for(var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10). toString() : roomId += Math.floor(Math.random() * 10).toString()
        } 

        

    //    await db.run(`INSERT INTO rooms (
    //        id,
    //        pass

    //    ) VALUES (
    //        ${parseInt(roomId)},
    //        ${pass}

    //    )`)
       
       
       

    //    await db.close()
            
        

        res.redirect(`/room/${roomId}`)
    }

}
