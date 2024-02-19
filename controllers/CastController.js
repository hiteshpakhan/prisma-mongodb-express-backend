import prisma from "../DB/db.config.js";

// for getting all the cast
export const getCasts = async(req, res)=>{
    const casts = await prisma.cast.findMany({
        // include: {
        //     movie: true,    // here we want to get all cast with there movie
        // }
    });

    return res.json({status: 200, data: casts})
}

// for creating the cast
export const createCast = async (req, res) => {
    const { name, description, movie_id } = req.body;

    const cast = await prisma.cast.create({
        data: {
            name,
            description,
            movieId: movie_id
        }
    })

    return res.json({status: 200, cast, message: "cast added successfully"});
}

// for updating the cast
export const updateCast = async(req,res)=>{
    const castId = req.params.id;
    const { name, description, movie_id } = req.body;         

    await prisma.cast.update({
        data: {
            name,
            description,
            movieId: movie_id
        },
        where:{
            id: castId
        }
    })

    return res.json({status: 200, message: "cast updated successfully"});
}

// for delete the cast
export const deleteCast = async (req, res) => {
    const castId = req.params.id;
    
    await prisma.cast.delete({
        where:{
            id: castId,
        }
    })

    return res.json({status: 200, message: "cast deleted"});
}