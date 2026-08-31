const tours = [];
let nextId = 1;

const addOne = (name, info, image, price, location) => {
  const tour = { id: nextId++, name, info, image, price, location };
  tours.push(tour);
  return tour;
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


module.exports = { addOne, getAll, findById };