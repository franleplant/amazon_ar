const trigger = document.querySelector('.search-trigger')
const input = document.querySelector('.serve-favicon')
const main = document.querySelector('main');

trigger.addEventListener('click', e => {
  e.preventDefault()
  main.innerHTML = "Loading..."
  search(trigger.value)
});


function search(search_string) {
  fetch('/data?search=ram')
    .then(response => response.json())
    .then(res => {
      console.log('res', res)
      const tpl = res
        .map(({source, data}) => List({source, data}))
        .join('')

        console.log(tpl)
        render(tpl)
    })
}


function render(tpl) {
  main.innerHTML = tpl;
}

function Item(d) {
  return `
    <div style="display: flex; align-items: center">
      <img src="${d.img}" width='70'/>
      <div style="margin-left: 20px">
        <a href=${d.link}>${d.title}</a>
        <p>${d.price}</p>
      </div>
    </div>
  `;
}

function List({source, data}) {
  return `
    <div>
      <h2>${source.key}</h2>
      <ul>
        ${data.map(d => (`
            <li>
              ${Item(d)}
            </li>
        `)).join('')}
      </ul>
    </div>
  `
};




