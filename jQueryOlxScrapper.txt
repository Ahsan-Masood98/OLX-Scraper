function scrapeOLX() {
  const ads = [];
  const ad = document.querySelectorAll(".a52608cc");

  ad.forEach((ad) => {
    const adTitle = ad.querySelector(".a5112ca8._5fdf4379");
    const adPrice = ad.querySelector("._95eae7db");
    const adLocation = ad.querySelector("._2fc90438");

    if (adTitle && adPrice && adLocation) {
      const title = adTitle.innerText;
      const price = adPrice.innerText;
      const location = adLocation.innerText;

      ads.push({ title, price, location });
    }
  });

  return ads;
}

const scrapedData = scrapeOLX();
console.log(scrapedData);
