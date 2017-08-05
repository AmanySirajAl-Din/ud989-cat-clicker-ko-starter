// intialize my cats array of objects
var catsObjArray = [
    {
        numOfClicks: 0,
        name: "Tabby",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ['Tabtab', 'T-Bone', 'Mr.T']
        },
    {
        numOfClicks: 0,
        name: "Tiger",
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        nicknames: ['Tigger']
        },
    {
        numOfClicks: 0,
        name: "Scaredy",
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nicknames: ['Casper']
        },
    {
        numOfClicks: 0,
        name: "Shadow",
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ['Shooby']
        },
    {
        numOfClicks: 0,
        name: "Sleepy",
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        nicknames: ['Zzzzzzz']
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
    var self = this;
    
    
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
        // this.clickCount(this.clickCount() + 1);
        // this. here represent the binding context
        // so to solve this in other way 
        // at the begining of the View model
        // var self = this;
        // then we can use self.currentCat().clickCount

        self.currentCat().clickCount(self.currentCat().clickCount() + 1);

        // when ever you want to access the outer this
        // (in this case the ViewModel)
        // you can store it somewhere (here in self)
        // then use it inside the functions that nested :)
    };
}

ko.applyBindings(new ViewModel);
