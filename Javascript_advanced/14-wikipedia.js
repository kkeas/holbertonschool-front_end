function createElement(data) {
  let p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          let page = response.query.pages;
          let pageId = Object.keys(response.query.pages)[0];
          callback(page[pageId].extract);
      }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

queryWikipedia(createElement);
