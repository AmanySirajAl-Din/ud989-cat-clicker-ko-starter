// intialize my cats array of objects
var catsObjArray = [
    {
        numOfClicks: 0,
        name: "Bisho",
        imgSrc: "img/Bisho.jpg"
        },
    {
        numOfClicks: 0,
        name: "Boby",
        imgSrc: "img/Boby.jpg"
        },
    {
        numOfClicks: 0,
        name: "Bosy",
        imgSrc: "img/Bosy.jpg"
        },
    {
        numOfClicks: 0,
        name: "Mared",
        imgSrc: "img/Mared.jpg"
        },
    {
        numOfClicks: 0,
        name: "Misho",
        imgSrc: "img/Misho.jpg"
        }
    ];

// move all my data to newCat Object
// to be able to create a new cat 
// without repeating the same code

// pass data argument to pass the new cat's data
var newCat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = data.name;
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttr = ko.observable(data.imgAttr);
    this.nicknames = ko.observableArray(data.nicknames);


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
};

var ViewModel = function () {
    // var self = this;
    
    
    
    // add cat using newCat
    this.currentCat = ko.observable(new newCat({
        this.clickCount = ko.observable(0);
        this.name = ko.observable('Tabby');
        this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
        this.imgAttr = ko.observable('');
        this.nicknames = ['Tabtab', 'T-Bone', 'Mr.T'];
    }));
    // then update my data-bind according to it
    // use currentCat() to call its objects

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        // this. here represent the binding context
        // so to solve this in other way 
        // at the begining of the View model
        // var self = this;
        // then we can use this.currentCat().clickCount

        // this.currentCat().clickCount(this.currentCat().clickCount() + 1);

        // when ever you want to access the outer this
        // (in this case the ViewModel)
        // you can store it somewhere (here in self)
        // then use it inside the functions that nested :)
    };
}

ko.applyBindings(new ViewModel);
