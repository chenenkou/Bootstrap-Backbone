/**
 * 下拉菜单
 */
define("DropComponent", ["text!tpl/DropComponentTpl.html"], function (require, exports, module) {
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

        template: _.template(require("text!tpl/DropComponentTpl.html")),

        render: function () {
            this.$el.html(this.template(_.extend(this.model.toJSON(), {id: this.model.cid})));
            return this;
        }
    });

    module.exports = DropComponent;
});