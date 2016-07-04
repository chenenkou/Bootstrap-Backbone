/**
 * Navbar
 */
define('NavbarComponent', [], function(require, exports, module) {
    var NavbarComponent = {};

    NavbarComponent.Model = Backbone.Model.extend({
        defaults: {
            logoName: 'LogoName',
            navList: [
                {index: 1, name: '首页', href: '#'},
                {index: 2, name: '文章', href: '#'},
                {index: 3, name: '咨询', href: '#'},
                {index: 4, name: '生活', href: '#'},
                {index: 30, name: '更多', subList: [
                    {index: 31, name: '关于我们', href: '#'},
                    {index: 32, name: '关于应用', href: '#'}
                ]}
            ],
            activeIndex: 1,
            navStyle: 1
        }
    });

    NavbarComponent.View = Backbone.View.extend({
        model: new NavbarComponent.Model,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        template: _.template('\
            <nav class="navbar navbar-<% if (navStyle) { %>default<% } else { %>inverse<% } %>">\
                <div class="container">\
                    <div class="navbar-header">\
                        <button data-target=".navbar-collapse" \
                                data-toggle="collapse" \
                                class="navbar-toggle collapsed" \
                                type="button">\
                            <span class="sr-only">Toggle navigation</span>\
                            <span class="icon-bar"></span>\
                            <span class="icon-bar"></span>\
                            <span class="icon-bar"></span>\
                        </button>\
                        <a href="#" class="navbar-brand"><%= logoName %></a>\
                    </div>\
                    <div class="navbar-collapse collapse">\
                        <ul class="nav navbar-nav">\
                            <% _.each(navList, function (item) { %>\
                                <% if (!item.subList) { %>\
                                    <% if (item.index == activeIndex) { %>\
                                    <li class="active">\
                                    <% } else { %>\
                                    <li>\
                                    <% } %>\
                                        <a href="<%= item.href %>"><%= item.name %></a>\
                                    </li>\
                                <% } else { %>\
                                    <li class="dropdown"> \
                                        <a aria-expanded="false" \
                                            aria-haspopup="true" \
                                            role="button" data-toggle="dropdown"\
                                            class="dropdown-toggle"\
                                            href="#">\
                                            <%= item.name %> <span class="caret"></span>\
                                        </a>\
                                        <ul class="dropdown-menu">\
                                            <% _.each(item.subList, function (i){ %>\
                                            <li><a href="<%= i.href %>"><%= i.name %></a></li>\
                                            <% }) %>\
                                        </ul>\
                                    </li>\
                                <% } %>\
                            <% }) %>\
                        </ul>\
                    </div>\
                </div>\
            </nav>\
        '),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = NavbarComponent;
});
