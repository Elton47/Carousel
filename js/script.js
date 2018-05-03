const slidesWrapper = document.querySelector('.slides-wrapper');
const paginationPages = document.querySelector('.pagination-bullets-wrapper').children;
var currentPage = 1;
function init() {
    slidesWrapper.style['margin-left'] = '0';
    for(var i = 0; i < paginationPages.length; i++) {
        paginationPages[i].setAttribute('onclick', 'page(parseFloat(this.id));');
    }
    document.querySelector('.previous-button-wrapper').setAttribute('onclick', 'previousPage();');
    document.querySelector('.next-button-wrapper').setAttribute('onclick', 'nextPage();');
    window.addEventListener('keydown', function(e) {
        if(e.keyCode == 37 || e.keyCode == 40)
            previousPage();
        else if(e.keyCode == 39 || e.keyCode == 38)
            nextPage();
    });
    page(1);
};
function page(pageNr) {
    if(pageNr < 1)
        pageNr = 1;
    else if(pageNr > 10)
        pageNr = 10;
    slidesWrapper.style['margin-left'] = '-' + (pageNr - 1) + '00%';
    Array.from(paginationPages).forEach(element => {
        element.style.color = 'inherit';
    });
    paginationPages[pageNr - 1].style.color = '#5e97f6';
    currentPage = pageNr;
    if(pageNr == 1)
        document.querySelector('.previous-button-wrapper').style.opacity = '0';
    else
        document.querySelector('.previous-button-wrapper').style.opacity = '1';
    if(pageNr == 10)
        document.querySelector('.next-button-wrapper').style.opacity = '0';
    else
        document.querySelector('.next-button-wrapper').style.opacity = '1';
}
function previousPage() {
    page(currentPage - 1);
}
function nextPage() {
    page(currentPage + 1);
}