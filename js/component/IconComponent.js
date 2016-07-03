/**
 * Glyphicons 字体图标
 */
define(function (require, exports, module) {
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

        template: _.template('\
            <span class="glyphicon glyphicon-<%= className %>" aria-hidden="true"></span>\
        '),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = IconComponent;
});