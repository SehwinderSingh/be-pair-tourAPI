let tours = [];
let nextId = 1;

const addOne = (name, info, image, price, location) => {
  if (!name || !info || !image || !price || !location) {
    return null;
  } else {
    const tour = {
      id: nextId++,
      name,
      info,
      image,
      price,
      location
    };
    tours.push(tour);
    return tour;
  }
};

const getAll = () => tours;

const findById = (id) => {
  const findTour = tours.find((item) => {
    return item.id === Number(id);
  })
  if (findTour) {
    return findTour;
  }
  return null;
}

const update = (id, data) => {
  const findTour = tours.find((item) => item.id === Number(id));

  if (findTour) {
    if (data.name !== undefined) {
      findTour.name = data.name;
    }
    if (data.info !== undefined) {
      findTour.info = data.info;
    }
    if (data.image !== undefined) {
      findTour.image = data.image;
    }
    if (data.price !==undefined) {
      findTour.price = data.price;
    }
    if (data.location !== undefined) {
      findTour.location = data.location;
    }
    return findTour;
  }
  return null;
}

const deleteOne = (id) => {
  const tourExist = findById(Number(id));
  const initialArray = tours.length;
  if (tourExist) {
    tours = tours.filter((item) => item.id !== Number(id));
    return initialArray > tours.length
  }
  return null;
}


if (require.main === module) {
  addOne(
    "Paris in 7 Days",
    "Explore Paris.",
    "https://example.com/paris.jpg",
    "1,995",
    "Paris, France"
  );

  addOne(
    "Helsinki Weekend",
    "Discover Helsinki.",
    "https://example.com/helsinki.jpg",
    "795",
    "Helsinki, Finland"
  );

  console.log(getAll());
}


module.exports = { addOne, getAll, findById, update, deleteOne };