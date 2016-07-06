/**
 * Alert
 */
define('AlertComponent', [], function(require, exports, module) {
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

        template: _.template('\
        <div class="alert alert-<%= className %> <% if (dismissible) { %> alert-dismissible <% } %>" role="alert">\
            <% if (dismissible) { %>\
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
            <% } %>\
            <%= content %>\
        </div>\
        '),

        model: new AlertComponent.Model,

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = AlertComponent;
});