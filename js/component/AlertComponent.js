/**
 * Alert
 */
define('AlertComponent', ['text!tpl/AlertComponentTpl.html'], function(require, exports, module) {
    var AlertComponent = {};

    AlertComponent.Model = Backbone.Model.extend({
        defaults: {
            dismissible: 1,
            className: 'success',
            content: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
        }
    });

    AlertComponent.View = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        template: _.template(require('text!tpl/AlertComponentTpl.html')),

        model: new AlertComponent.Model,

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = AlertComponent;
});