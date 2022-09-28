const createLIstItem = (bookmark) => {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex';

  const img = document.createElement('img');
  img.src = `//logo.clearbit.com/${bookmark.name}`;
  img.src = bookmark.name;

  img.className = 'avatar';

  const text = document.createElement('p');
  p.className = 'lead ml-4';
  text.innerHTML = data.name;
  text.style.cursor = 'pointer';
  text.onclick = function () {
    window.open(bookmark.url, '_blank');
  };

  return li;
};

export default createLIstItem;
