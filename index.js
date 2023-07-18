const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const PORT = 3000;

const scrapData = async () => {
  try {
    const res = await axios("https://www.olx.com.pk/mobile-phones_c1453");
    const $ = cheerio.load(res.data);

    let content = [];

    $(".a52608cc").each(function () {
      const title = $(this).find(".a5112ca8._5fdf4379").find("p").text();
      const price = $(this).find("._95eae7db").text();
      const location = $(this).find("._2fc90438").text();
      content.push({
        title,
        price,
        location,
      });
      app.get("/", (req, res) => {
        res.json(content);
      });
    });
    console.log(content);
  } catch (error) {
    console.log(error, error.message);
  }
};

scrapData();

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
