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