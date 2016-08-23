/**
 * Buttons
 */
define("BtnComponent", ["text!tpl/BtnComponentTpl.html"], function (require, exports, module) {
    var BtnComponent = {};

    BtnComponent.Model = Backbone.Model.extend({
        defaults: {
            content: "按钮",
            className: "default",
            size: ""
        }
    });

    BtnComponent.View = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        model: BtnComponent.Model,

        template: _.template(require("text!tpl/BtnComponentTpl.html")),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = BtnComponent;
});