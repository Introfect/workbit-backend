const Board = require('../../models/boardModel')

const createBoards = async (req, res) => {
    try {
        const name = req.body.name;
        const currentUser= req.user._id
        if (!name) {
            res.status(400).json({ msg: "no name entered" })
        } else {
            const board = await Board.create({
                name: name,
                user:currentUser
            });
            res.status(200).json({ msg: "board created", board: board
             });
        }
    } catch (err) {
        res.status(404).json({ msg: "error occuerss while searching" })
    }
};

module.exports=createBoards