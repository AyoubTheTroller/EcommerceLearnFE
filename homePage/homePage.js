// NAVBAR 
document.getElementById('home').addEventListener('click', showHome);
document.getElementById('deals').addEventListener('click', showDeals);
document.getElementById('categories').addEventListener('click', showCategories);
document.getElementById('profile').addEventListener('click', showProfile);

function showHome() {
    /*Handle visibility of pages*/
    document.getElementById('home').classList.add('selected');
    document.getElementById('deals').classList.remove('selected');
    document.getElementById('categories').classList.remove('selected');
    document.getElementById('profile').classList.remove('selected');
}

function showDeals() {
    /*Handle visibility of pages*/
    document.getElementById('deals').classList.add('selected');
    document.getElementById('home').classList.remove('selected');
    document.getElementById('categories').classList.remove('selected');
    document.getElementById('profile').classList.remove('selected');
}

function showCategories() {
    /*Handle visibility of pages*/
    document.getElementById('categories').classList.add('selected');
    document.getElementById('deals').classList.remove('selected');
    document.getElementById('home').classList.remove('selected');
    document.getElementById('profile').classList.remove('selected');
}

function showProfile() {
    /*Handle visibility of pages*/
    document.getElementById('profile').classList.add('selected');
    document.getElementById('deals').classList.remove('selected');
    document.getElementById('categories').classList.remove('selected');
    document.getElementById('home').classList.remove('selected');
}