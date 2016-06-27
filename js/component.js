/**
 * Buttons
 */
var BtnComponent = {};

BtnComponent.Model = Backbone.Model.extend({
    defaults: {
        content: "（默认样式）Default",
        className: "default",
        size: ""
    }
});

BtnComponent.View = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    model: BtnComponent.Model,

    template: _.template('\
        <button type="button" class="btn btn-<%= className %> <% if (size) {%>btn-<%= size %><% } %>"><%= content %></button>\
    '),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


/**
 * Labels
 */
var LabComponent = {};

LabComponent.Model = Backbone.Model.extend({
    defaults: {
        content: "Default",
        className: "default"
    }
});

LabComponent.View = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    model: BtnComponent.Model,

    template: _.template('\
        <span class="label label-<%= className %>"><%= content %></span>\
    '),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


/**
 * Badges
 */
var BadgeComponent = {};

BadgeComponent.Model = Backbone.Model.extend({
    defaults: {
        content: "Badges",
        num: 10
    }
});

BadgeComponent.View = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    model: BadgeComponent.Model,

    template: _.template('\
        <a href="#"><%= content %> <% if (num) { %><span class="badge"><%= num %></span><% } %></a>\
    '),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});