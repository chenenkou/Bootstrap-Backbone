/**
 * Labels
 */
define("LabComponent", ["text!tpl/LabComponentTpl.html"], function (require, exports, module) {
    var LabComponent = {};

    LabComponent.Model = Backbone.Model.extend({
        defaults: {
            content: "Default",
            className: "default"
        }
    });

    LabComponent.View = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        model: LabComponent.Model,

        template: _.template(require("text!tpl/LabComponentTpl.html")),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = LabComponent;
});