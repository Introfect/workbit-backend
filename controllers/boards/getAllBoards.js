const Board = require('../../models/boardModel')

const getAllBoards = async (req, res) => {
    try {
        const currentUser= req.user._id
        if (!currentUser) {
            res.status(400).json({ msg: "no user logged in" })
        } else {
            const boards = await Board.find({user:currentUser});
            res.status(200).json({ boards
             });
        }
    } catch (err) {
        res.status(404).json({ msg: "error occuerss while searching" })
    }
};

module.exports=getAllBoards