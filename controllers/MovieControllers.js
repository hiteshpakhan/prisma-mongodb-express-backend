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

//here we will create new route which will get all movies but it will show the data in pagination
export const moviePage = async (req, res) => {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10

    if(page <= 0){
        page = 1
    }

    if(limit <= 0 || limit > 100){
        limit = 10
    }

    // skip count
    const skip = (page - 1) * limit

    const movies = await prisma.movie.findMany({
        take: limit,
        skip: skip,
        select:{
            name: true,
        }
    })

    const totalMovies = await prisma.movie.count();
    const totalPages = await Math.ceil(totalMovies / limit);

    return res.json({status: 200, movies, metadata:{ totalMovies, totalPages, currentPage:page, currentLimit: limit }})
} 

//now we will create the new route for searching 
export const searchMovie = async (req, res) => {
    const query = req.query.q;

    const movies = await prisma.movie.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive"
                // startsWith: query
                // endsWith: query
                // equals: query
            }
        }
    })

    return res.json({status: 200, movies})
}