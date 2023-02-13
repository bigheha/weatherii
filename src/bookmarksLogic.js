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
    };

    for (const bookmarkedCity of bookmarks) {
        const cityButton = document.createElement('button');
        cityButton.classList.add('bookmark');
        cityButton.innerText = bookmarkedCity;
        cityButton.addEventListener('click', 
        (e) => {
            const city = e.target.innerText;
            getWeater(city);
        });
        const deleteBtn = document.createElement('img');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('src', 'images/delete.svg');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            const newBookmarks = bookmarks.filter(bookmark => {
                return bookmark !== e.target.parentElement.innerText
            });
            localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
            renderBookmarks();
        });
        cityButton.appendChild(deleteBtn);
        bookmarksContainer.appendChild(cityButton);
    }
}
export {addBookmark, renderBookmarks};
