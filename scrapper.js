const osmosis = require('osmosis');
const q = require('query-string')
const fs = require('fs')

const SOURCES = [
  {
    key: 'UK',
    base_url: `https://www.amazon.co.uk/s`,
    query: search => ({
      keywords: search,
      // sold by amazon                  // global shipping option
      rh: 'n:340831031,p_6:A3P5ROKL5A1OLE,p_n_shipping_option-bin:2023186031',
    })
  }
];

module.exports = function scrapper(search_string) {
  const input = SOURCES.
      map(source => {
        source.url = `${source.base_url}?${q.stringify(source.query(search_string))}`;
        return source
      })
      .map(source => {
        console.log("using source", source)

        return new Promise((resolve, reject) => {
          const data = [];
          osmosis.get(source.url)
            .find('.s-item-container')
            // For each container,
            // add an item to the array
            // with this shape, not that we are operating over container's children
            .set({
              title: 'h2',
              link: 'a.s-access-detail-page@href',
              price: '.s-price',
              img: 'img.s-access-image@src',
            })
            .data((d) => {
              data.push(d);
              //console.log(JSON.stringify(data, null, 2));
            })
            .done(() => {
              resolve({source, data})
            })
            .log(console.log)
            .error(console.log)
            .debug(console.log)
        })
      });

  return Promise.all(input)
}






