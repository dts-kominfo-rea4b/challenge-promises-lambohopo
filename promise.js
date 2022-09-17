const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let dataIXX = await promiseTheaterIXX();
  let dataVGC = await promiseTheaterVGC();
  let sumData = dataIXX.concat(dataVGC);

  let countEmosi = 0;
  sumData.map((data) => data.hasil === emosi && (countEmosi += 1));
  return countEmosi;
};

module.exports = {
  promiseOutput,
};

