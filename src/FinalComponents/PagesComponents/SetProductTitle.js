const setCollectionTitleAndDescription = (titleText, descriptionText, keyWordText) => { 
    document.title = titleText; 
    document.querySelector('meta[name="description"]').content=descriptionText; 
    document.querySelector('meta[name="keywords"]').content = keyWordText;
}

export {
    setCollectionTitleAndDescription
};

