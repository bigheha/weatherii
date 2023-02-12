import getWeater from "./getWeather";

function addBookmark(input) {
    if (!localStorage.getItem('bookmarks')) {
        localStorage.setItem('bookmarks', '[]');    
    }
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if(bookmarks.includes(input)) {
        return;
    }
    bookmarks.push(input);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}
function renderBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (!bookmarks) {
        return;
    } 

    const bookmarksContainer = document.querySelector('.bookmark-container');
    while(bookmarksContainer.firstChild) {
        bookmarksContainer.removeChild(bookmarksContainer.firstChild);
        console.log('deleting');
    };

    for (const bookmarkedCity of bookmarks) {
        console.log('creating buttons');
        const cityButton = document.createElement('button');
        cityButton.classList.add('bookmark');
        cityButton.innerText = bookmarkedCity;
        cityButton.addEventListener('click', (e) => {
            const city = e.target.innerText;
            getWeater(city);
        });
        bookmarksContainer.appendChild(cityButton);
    }
}
export {addBookmark, renderBookmarks};
