/**
 * Navbar
 */
define('NavbarComponent', ["text!tpl/NavbarComponentTpl.html"], function(require, exports, module) {
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

        template: _.template(require("text!tpl/NavbarComponentTpl.html")),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    module.exports = NavbarComponent;
});
