var ViewModel = function () {
    // add my model data here
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttr = ko.observable('');
     // Add Nicknames for the cat
    this.nicknames = ['Tabtab', 'T-Bone', 'Mr.T'];
    // the peices are functionally separate
    // even though the model is defined inside the ViewModel
    // the functionality is separate


    // then we need the function to increase my counter
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
    // the only time we need to write ViewModel methods are 
    // when we need to actually change something ourselves
    // we don't need the other get snd set functions
    // because KO will handle the view to model
    // and model to view sync for us

    // Add cat levels 
    // using computed observable
    this.catLevel = ko.computed(function (){
        if(this.clickCount < 10){
            return "New Born";
        }else if(this.clickCount >= 10){
            return "Infant";
        }
    }, this);
    
   


}

ko.applyBindings(new ViewModel);
