var Foo = Vue.extend({
  template: '<p>This is Foo</p>'
})

var Bar = Vue.extend({
  template: '<p>This is Bar</p>'
})

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

router.start(App, '#app')
