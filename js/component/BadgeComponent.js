/**
 * Badges
 */
define(function (require, exports, module) {
    var BadgeComponent = {};

    BadgeComponent.Model = Backbone.Model.extend({
        defaults: {
            content: "Badges",
            num: 10
        }
    });

    BadgeComponent.View = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        model: BadgeComponent.Model,

        template: _.template('\
            <a href="#">\
                <%= content %> <% if (num) { %>\
                <span class="badge"><%= num %></span><% } %>\
            </a>\
        '),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    BadgeComponent.Collection = Backbone.Collection.extend({
        getByCid: function (cid) {
            return this._byId[cid];
        }
    });

    BadgeComponent.ListView = Backbone.View.extend({
        initialize: function () {
            if (this.collection) {
                this.byId = {};
                this.views = [];
                this.collection.each(this.registerView, this);
                this.listenTo(this.collection, 'reset', this.resetView);
                this.listenTo(this.collection, 'add', this.addView);
                this.listenTo(this.collection, 'remove', this.removeView);
                this.listenTo(this.collection, 'change', this.updateView);
                this.listenTo(this.collection, 'sort', this.resetView);
            }
        },

        registerView: function (model) {
            var view = new BadgeComponent.View({
                model: model,
                tagName: "li",
                className: "active"
            });
            this.byId[model.cid] = view;
            this.views.push(view);
        },

        addView: function (model) {
            var view = new BadgeComponent.View({
                model: model,
                tagName: "li",
                className: "active"
            });
            var at = this.collection.indexOf(model);
            this.byId[model.cid] = view;
            $before = this.views[at - 1].$el;
            $before.after(view.render().$el);
            this.views.splice(at, 0, view);
        },

        removeView: function (model) {
            var view = this.byId[model.cid];
            delete this.byId[model.cid];
            view.remove();
            var at = _.indexOf(this.views, view);
            this.views.splice(at, 1);
        },

        resetView: function () {
            this.byId = {};
            this.views = [];
            this.collection.each(this.registerView, this);
            this.render();
        },

        updateView: function (model) {
            var view = this.byId[model.cid];
            view.render();
        },

        render: function () {
            var _this = this;
            _this.$el.empty();
            _.each(this.views, function (view) {
                $_el = view.render().$el;
                _this.$el.append($_el);
            });

            return this;
        }
    });

    module.exports = BadgeComponent;
});