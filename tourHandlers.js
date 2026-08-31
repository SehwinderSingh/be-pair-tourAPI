const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tour = Tour.getAll();
    res.json(tour);
};

const createTour = (req, res) => {
    const {name, info, image, price, location} = req.body;
    const tour = Tour.addOne(name, info, image, price, location);
    if(tour){
        res.status(201).json(tour);
    }else{
        res.json({message: "Failed to create"});
    }

};

const getTourById = (req, res) => {
    const tourId = req.params.tourId;
    const tourById = Tour.findById(tourId);
    if (tourById){
        res.status(200).json(tourById);
    }else{
        res.sendStatus(404);
    }

};

const updateTour = (req, res) => {
    res.json({ message: "Hello from updateTour" });
}

const deleteTour = (req, res) => {
    res.json({ message: "Hello from deleteTour" });
}

module.exports = {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
};  