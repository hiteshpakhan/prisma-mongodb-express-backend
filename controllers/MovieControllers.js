import prisma from "../DB/db.config.js";

// for getting all the movie
export const getMovies = async(req, res)=>{
    const movies = await prisma.movie.findMany({
        // select: {
        //     name: true,
        // }

        // include: {
        //     cast: true, //here if we want to get the movies including there casr data
        // }

        // select: {
        //     name: true,
        //     created_at: true,
        //     cast: {
        //         select: {
        //             name: true,
        //             description: true,
        //         }
        //     } 
        // }
    });

    return res.json({status: 200, data: movies})
}

// for creating the movie
export const store = async (req, res) => {
    const { name } = req.body;

    const movie = await prisma.movie.create({
        data: {
            name
        }
    })

    return res.json({status: 200, movie, message: "movie added successfully"});
}

// for updating the movie
export const updateMovie = async(req,res)=>{
    const movieId = req.params.id;
    const name = req.body.name;         // const {name} = req.body;

    await prisma.movie.update({
        data: {
            name
        },
        where:{
            id: movieId
        }
    })

    return res.json({status: 200, message: "user updated successfully"});
}

// for delete the movie
export const deleteMovie = async (req, res) => {
    const movieId = req.params.id;
    
    await prisma.movie.delete({
        where:{
            id: movieId,
        }
    })

    return res.json({status: 200, message: "movie deleted"});
}