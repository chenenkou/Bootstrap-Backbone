define('index', [
    'BtnComponent',
    'LabComponent',
    'BadgeComponent',
    'IconComponent',
    'TableComponent',
    'DropComponent',
    'NavbarComponent',
    'AlertComponent'
], function (require, exports, module) {
    var BtnComponent = require('BtnComponent');
    var aBtn = {};
    aBtn.model = new BtnComponent.Model();
    aBtn.view = new BtnComponent.View({
        el: "#btnComponent",
        model: aBtn.model
    });
    aBtn.view.render();

    $(".btn-change-style").change(function () {
        var style = $(this).val();
        aBtn.model.set('className', style);
    });

    $(".btn-change-size").change(function () {
        var size = $(this).val();
        aBtn.model.set('size', size);
    });
    ////////////////////////////////////////////////////////////

    var LabComponent = require('LabComponent');
    var aLab = {};
    aLab.model = new LabComponent.Model();
    aLab.view = new LabComponent.View({
        el: "#labComponent",
        model: aLab.model
    });
    aLab.view.render();
    //////////////////////////////////////////////////////////

    var BadgeComponent = require('BadgeComponent');
    var aBadge = {};
    aBadge.model = new BadgeComponent.Model();
    aBadge.view = new BadgeComponent.View({
        el: "#badgeComponent",
        model: aBadge.model
    });
    aBadge.view.render();

    aBadge.aList = [
        {content: 'Badges1', num: 10},
        {content: 'Badges2', num: 20},
        {content: 'Badges3'}
    ];
    aBadge.collection = new BadgeComponent.Collection(
        aBadge.aList,
        {model: BadgeComponent.Model}
    );
    aBadge.listView = new BadgeComponent.ListView({
        el: "#badgesComponent",
        collection: aBadge.collection
    });
    aBadge.listView.render();
    //////////////////////////////////////////////////////////


    var IconComponent = require('IconComponent');
    var aIcon = {};
    aIcon.model = new IconComponent.Model();
    aIcon.view = new IconComponent.View({
        el: "#iconComponent",
        model: aIcon.model
    });
    aIcon.view.render();
    //////////////////////////////////////////////////////////

    var TableComponent = require('TableComponent');
    var aTable = {};
    aTable.list = [
        {firstName: '周', lastName: '杰伦', username: 'Jay'},
        {firstName: '蔡', lastName: '依林', username: 'Jolin'},
        {firstName: '林', lastName: '俊杰', username: 'JJ Lin'}
    ];
    aTable.collection = new TableComponent.Collection(aTable.list);
    aTable.listView = new TableComponent.ListView({
        el: '#tableComponent tbody',
        collection: aTable.collection
    });
    aTable.listView.render();
    $("#addTableForm").submit(function (e) {
        e.preventDefault();

        var data = $(this).serializeJSON();
        aTable.collection.add(data, {sort: false});

        $(this)[0].reset();
    });
    //////////////////////////////////////////////////////////

    var DropComponent = require('DropComponent');
    var aDrop = {};
    aDrop.view = new DropComponent.View({el: '#dropComponent'});
    aDrop.view.render();
    //////////////////////////////////////////////////////////

    var NavbarComponent = require('NavbarComponent');
    var aNavbar = {};
    aNavbar.view = new NavbarComponent.View({el: '#navbarComponent'});
    aNavbar.view.render();

    $(".navbar-change-style").click(function () {
        var style = $(this).data("style");
        aNavbar.view.model.set("navStyle", style);
    });

    $(".navbar-change-index").change(function () {
        var index = $(this).val();
        aNavbar.view.model.set("activeIndex", index);
    });
    //////////////////////////////////////////////////////////

    var AlertComponent = require('AlertComponent');
    var aAlert = {};
    aAlert.model = new AlertComponent.Model();
    aAlert.view = new AlertComponent.View({el: '#alertComponent', model: aAlert.model});
    aAlert.view.render();

    $(".alert-change-style").change(function() {
        var className = $(this).val();
        aAlert.model.set('className', className);
    });

    $("#alert-change-close").click(function() {
        if ($(this).prop("checked")) {
            aAlert.model.set('dismissible', 1);
        }else{
            aAlert.model.set('dismissible', 0);
        }
    });

    $("#alert-change-content").blur(function() {
        var content = $(this).val();
        aAlert.model.set('content', content);
        $(this).val('');
    });
    //////////////////////////////////////////////////////////

});

//seajs.use("index");
