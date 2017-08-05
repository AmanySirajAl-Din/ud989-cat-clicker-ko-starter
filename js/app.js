var ViewModel = function (){
    // add my model data here
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttr = ko.observable('');
    // the peices are functionally separate
    // even though the model is defined inside the ViewModel
    // the functionality is separate
    
    

    
    
    
}

ko.applyBindings(new ViewModel);