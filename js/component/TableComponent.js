/**
 * Tables
 */
define("TableComponent", ["text!tpl/TableComponentTpl.html"], function (require, exports, module) {
    var TableComponent = {};

    TableComponent.Model = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            username: ''
        }
    });

    TableComponent.View = Backbone.View.extend({
        tagName: 'tr',

        model: TableComponent.Model,

        template: _.template(require("text!tpl/TableComponentTpl.html")),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        events: {
            'click .tr-del': 'doDel'
        },

        render: function () {
            this.$el.html(this.template(_.extend(this.model.toJSON(), {id: this.model.cid})));
            return this;
        },

        remove: function () {
            this.$el.remove();
        },

        doDel: function (e) {
            $this = $(e.currentTarget);
            var id = $this.data('id');

            this.model.destroy();
        }
    });

    TableComponent.Collection = Backbone.Collection.extend({
        model: TableComponent.Model,

        comparator: 'firstName' //让模型按照firstName的顺序排序
    });

    TableComponent.ListView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.collection, 'add', this.addView);
            this.listenTo(this.collection, 'reset', this.resetView);
            this.listenTo(this.collection, 'sort', this.resetView);
        },

        render: function () {
            this.collection.each(this.addView, this);
        },

        addView: function (model) {
            var view = new TableComponent.View({model: model});
            this.$el.append(view.render().$el);
        },

        resetView: function () {
            this.$el.empty();
            this.render();
        }
    });

    module.exports = TableComponent;
});