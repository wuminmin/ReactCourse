export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      antd: true,
      dva:true
    }],
  ],

  routes: [
    // {
    //   path: '/',
    //   component: './index',
    // },
    {
      path: '/register',
      component: './register',
    },
    {
      path: '/inputDemo',
      component: './inputDemo',
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: 'helloworld',
          component: './HelloWorld'
        },
      ]
    }
  ],
};