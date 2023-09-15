const user = require("./user.data.json");
const point = require("./point.data.json");
const card = require("./card.data.json");
const coupon = require("./coupon.data.json");
const event = require("./event.data.json");
const board = require("./board.data.json");
const category = require("./category.data.json");

module.exports = () => ({
  user: user,
  point: point,
  card: card,

  coupon: coupon,
  event: event,

  category: category,
  board: board,
});
