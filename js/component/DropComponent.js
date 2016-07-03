/**
 * 下拉菜单
 */
define(function (require, exports, module) {
    var DropComponent = {};

    DropComponent.Model = Backbone.Model.extend({
        defaults: {
            dropMode: 'up',
            name: '省份',
            items: [
                {value: '上海市', href: '#'},
                {value: '江苏省', href: '#'},
                {value: '浙江省', href: '#'},
                {value: '湖南省', href: '#'}
            ]
        }
    });

    DropComponent.View = Backbone.View.extend({
        model: new DropComponent.Model,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        template: _.template('\
        <div class="drop<%= dropMode %>">\
            <button class="btn btn-default dropdown-toggle"\
                    type="button" id="dropdownMenu_<%= id %>"\
                    data-toggle="dropdown"\
                    aria-haspopup="true"\
                    aria-expanded="false">\
                    <%= name %>\
                <span class="caret"></span>\
            </button>\
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu_<%= id %>">\
                <% _.each( items, function ( item ) { %>\
                <li><a href="<%= item.href %>"><%= item.value %></a></li>\
                <% }) %>\
            </ul>\
        </div>\
    '),

        render: function () {
            this.$el.html(this.template(_.extend(this.model.toJSON(), {id: this.model.cid})));
            return this;
        }
    });

    module.exports = DropComponent;
});