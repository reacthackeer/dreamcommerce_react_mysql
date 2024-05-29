export const toggleItem =  (itemSelector) => {
    const homePage = document.querySelector('.mobile__view__container');
    if(homePage){
        homePage.classList.toggle('active');
    }

    let selectedItem = document.querySelector(itemSelector);
    if(selectedItem){
        selectedItem.classList.toggle('active')
    }
}