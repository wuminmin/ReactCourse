https://www.yuque.com/ant-design/course/wybhm9



构建和部署
你可以通过 cnpm run build 来构建出最终的产物，执行该命令后会生成最终的 HTML、CSS 和 JS 到 dist 目录下。它们是浏览器可以直接识别并运行的代码，这样你就可以将它们部署到你想要的服务器上了。
需要注意的是，如果你直接用浏览器打开 HTML 那是无法正确展示的，因为直接打开无法识别出 HTML 引入的 JS 和 CSS 的路径。你需要确保的的 HTML 在一个 HTTP 的 web 容器中，并保证对应的页面的访问路径正确。比如使用 serve：
更多关于部署的问题可以查看 umi 的部署文档。