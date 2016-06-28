var aBtn = {};
aBtn.model = new BtnComponent.Model();
aBtn.view = new BtnComponent.View({
    el: "#btnComponent",
    model: aBtn.model
});
aBtn.view.render();


var aLab = {};
aLab.model = new LabComponent.Model();
aLab.view = new LabComponent.View({
    el: "#labComponent",
    model: aLab.model
});
aLab.view.render();


var aBadge = {};
aBadge.model = new BadgeComponent.Model();
aBadge.view = new BadgeComponent.View({
    el: "#badgeComponent",
    model: aBadge.model
});
aBadge.view.render();

var aList = [
    { content: 'Badges1', num: 10},
    { content: 'Badges2', num: 20},
    { content: 'Badges3'}
];

aBadge.collection = new BadgeComponent.Collection(aList, {model: BadgeComponent.Model});
aBadge.listView = new BadgeComponent.ListView({el: "#badgesComponent", collection: aBadge.collection});
aBadge.listView.render();

var aIcon = {};
aIcon.model = new IconComponent.Model();
aIcon.view = new IconComponent.View({
    el: "#iconComponent",
    model: aIcon.model
});
aIcon.view.render();