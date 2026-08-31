const tours = [];
let nextId = 1;

const addOne = (name, info, image, price, location) => {
  const tour = { id: nextId++, name, info, image, price, location };
  tours.push(tour);
  return tour;
};

const getAll = () => tours;
module.exports = { addOne, getAll };



if (require.main === module) {
  const result = addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland"
  );

  console.log(result);
}