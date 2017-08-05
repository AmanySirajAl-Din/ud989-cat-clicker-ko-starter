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

    // Add cat levels 
    // using computed observable
    this.catLevel = ko.computed(function () {
        var numOfClicks = this.clickCount();
        if (numOfClicks < 10) {
            return "New Born";
        } else if (numOfClicks < 50) {
            return "Infant";
        } else if (numOfClicks < 100) {
            return "Child";
        } else if (numOfClicks < 200) {
            return "Teen";
        } else if (numOfClicks < 500) {
            return "Adult";
        } else {
            return "Ninja";
        }
    }, this);

    // then we need the function to increase my counter
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
    // the only time we need to write ViewModel methods are 
    // when we need to actually change something ourselves
    // we don't need the other get snd set functions
    // because KO will handle the view to model
    // and model to view sync for us

}

ko.applyBindings(new ViewModel);
