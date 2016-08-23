/**
 * Glyphicons 字体图标
 */
define("IconComponent", ["text!tpl/IconComponentTpl.html"], function (require, exports, module) {
    var IconComponent = {};

    IconComponent.Model = Backbone.Model.extend({
        defaults: {
            className: "search"
        }
    });

    IconComponent.View = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        model: IconComponent.Model,

        template: _.template(require("text!tpl/IconComponentTpl.html")),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = IconComponent;
});