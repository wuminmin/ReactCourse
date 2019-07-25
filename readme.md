https://www.yuque.com/ant-design/course/wybhm9



初始化项目
现在你已经了解了前端开发的基本概念，开始要进入实际项目了。这一节将教会大家如何初始化一个项目，开发出一个可以展示 hello world 的项目。
这堂课程中的相关代码你都可以在 https://github.com/ant-design/react-tutorial 中拿到，当你无法参考文档完成你自己的代码时你可以以它作为一个参考。不过我们建议你尽可能的自己完成课程相关的代码，如果遇到了问题或者对课程有疑问可以在文档下方留言告知我们。
为什么需要脚手架
一个普通的网页基本都会包含 HTML，CSS 和 JS 三个关键的元素。这一点多年以来都是没有改变的，但是前端的开发模式已经发生了很大的变化。以往我们写的网页前端代码都是可以通过浏览器打开后能够直接运行的，但是现在对于大部分前端项目来说，我们写的代码其实并不是原生的 JS，HTML 和 CSS，而是基于它们扩展出来的更上层的语法。
本课程，我们将会大量编写 React 组件（实际上 antd 就是 Ant Design 的 React 组件的实现），这些组件需要通过编译为最终的 JS 和 CSS，然后引入到 HTML 网页中才能够被浏览器正确地执行。
由于存在一个编译过程，这就需要基于编译工具搭建一个项目的脚手架，使得我们可以通过工具实现代码的编译。通过编译后的代码才是浏览器能够执行的代码，这样我们才能进行项目的开发和最终的部署。
编译工具
前端开发不只涉及到 JS，同时还有 CSS、HTML、图片等资源，以及其他一些文件类型。比如：LESS 脚本可以提高 CSS 的编写效率，TypeScript 可以让你以一种全新的语法去编写你的逻辑。所有这些文件类型，都被纳入了前端研发体系。大部分编译工具都能够处理这些不同类型的资源文件。
开源社区的繁荣，一方面让我们可以有很多工具，但是同时也让项目初始化变得繁琐。
本课程选择使用 umi 作为编译工具。其实 umi 不仅仅是一个编译工具，它同时也是一个前端框架。它对社区的 webpack，react-router 等进行的封装，使得我们可以基于它快速搭建一个 React 项目。
umi 有各种类型的脚手架，方便你快速启动项目。本课程为了让读者能够更好地理解 umi 背后的逻辑，将从零开始初始化一个能够运行的脚手架。
下面，请大家跟着一起操作，完成之后将会得到一个最简单的应用：网页显示 hello world。
初始化
目录结构
在初始化完成后你将会得到如下的一个目录结构：
该目录结构只是作为你后面的一个参考，你不必着急创建，只需要按照下面的步骤一步一步操作就可以创建出这最终的结构。
开发环境
首先，请安装 NodeJS。NodeJS 是一个 JS 执行环境，umi 基于 JS 编写，并且需要在你的开发机上运行，所以依赖于它。
安装完成后，执行下面的命令确认是否安装成功。
在 umi 中我们采用了一些 NodeJS 的新特性，请确保你的 NodeJS 版本大于等于 8.5.0。
在国内，你可以安装 cnpm 获得更快速、更安全的包管理体验。使用如下命令安装：
然后你可以通过如下的命令确认是否成功：
通过 cnpm 你可以很方便的安装和管理一些第三方的包。比如 umi 就将通过它来安装到你的项目。
安装 umi 依赖
首先，新建一个空的文件夹，用来存放本课程后续所有的代码。
然后，调用 cnpm init 来初始化 package.json，它是 NodeJS 约定的用来存放项目的信息和配置等信息的文件。
上面命令中，参数 -y 表示对 npm 要求提供的信息，都自动按下回车键，表示接受默认值。
接着，安装 umi 的依赖。
安装完成之后你会发现 package.json 中多出了一项 devDependencies 的配置。这是由于在上面命令中，参数 --save 可以让依赖信息保存到 package.json 中，这样其它开发者下载代码后就只需要执行 cnpm install 后就会自动安装项目依赖的包。
另外项目中还多出了一个 node_modules 的文件夹，它包含了大量的内容。里面存放的是项目依赖的包，umi 的代码也是被下载并安装到其中的。如果你想要了解更多，可以参考 npm 的文档。
第一个页面
接下来，让我们创建我们的第一个页面。在创建第一个页面之前，我们需要先初始化 umi 的配置。
在 umi 中，大量的使用了配置和约定来帮助你快速开发代码。首先，我们先来创建配置文件。配置文件被约定为 config/config.js。为了让后面的开发更加高效，我们推荐你下载一款适合你的编辑器或者 IDE 来创建和编写代码。本课程中我们推荐你使用 VS Code。
在 umi 中，你也可以简单的使用 .umirc.js 来作为配置文件。当然它和 config/config.js 是二选一的。更多说明可以参考 umi 的文档。
config/config.js 中初始化的内容如下：
一开始它只是 export 了一个默认的空的对象 {}，并没有什么作用，但是在后面我们会用到。
我们所说的页面是指由一个独立路由对应的 UI 界面，关于路由你后续可以在《路由配置》中了解更多。在这一章节中你只需要知道对于这个例子，就是指我们期望通过浏览器访问 /helloworld 的时候可以得到一个显示 hello world 的页面。
首先我们新建一个 src 目录，它用来存放项目的除了配置以及单测以外的主要代码。
在 umi 中，约定的存放页面代码的文件夹是 pages，是复数，不过如果你喜欢单数的话你配置项中你可以添加 singular 为 true 来让 page 变为约定的文件夹。在本课程中我们使用单数来作为约定目录。所以你需要修改配置文件为：
接下来让我们创建第一个页面组件，新建 src/page/HelloWorld.js 文件，代码如下：
这样第一个页面就创建完成了，代码的具体含义我们会在后面的章节介绍。接下来你就可以通过 umi 来启动你的代码了。首先你需要在 package.json 中的 scripts 里面添加两个命令：
scripts 中定义的命令，可以在项目根目录中通过 cnpm run [scriptname] 来运行。接下来请执行：
修改 package.json 的时候要注意它是一个标准的 JSON 格式的文件，如果失败请检查是不是逗号或者引号的问题。如果顺利，项目将会运行起来。你将会在命令行中看到如下的日志：
复制日志中的地址，比如 http://localhost:8000/（这里的端口可能会因为被占用或者其他原因而不同，请参考你的机器中实际打印出来的地址）。并在后面加上 helloworld 的路径后（比如 http://localhost:8000/helloworld）在浏览器中打开，然后你将会看到：
在 umi 中，你可以使用约定式的路由，在 page 下面的 JS 文件都会按照文件名映射到一个路由，比如上面这个例子，访问 /helloworld 会对应到 HelloWorld.js。
除了约定式的路由，你也可以使用配置式的路由。至于使用哪种路由取决于你的喜好，这不是本课程的重点。在本课程中为了让开发者更好的理解路由组件嵌套，我们会使用配置式的路由。
要使用配置式的路由，你需要在配置文件 config/config.js 中添加如下配置：
其中 component 是一个字符串，它是相对于 page 目录的相对路径。在上面的配置中我们将路由的路径配置成为了 /，这样你访问 http://localhost:8000/ 首页就能看到 hello world 了。
当有了 routes 的配置之后 umi 就不会再执行约定式对应的路由逻辑了，而是直接使用你通过配置声明的路由。关于路由的更多信息你可以参考《路由配置》这一章节的说明。
添加 umi-plugin-react 插件
umi 是一个可插拔的企业级 react 应用框架，它的很多功能都是通过插件实现。尤其是 umi 官方的 umi-plugin-react 这个插件集成了常用的一些进阶的功能，为了后面的课程需要，我们需要添加该插件集到项目中。
首先通过 cnpm install umi-plugin-react --save-dev 来安装该插件集。然后在配置文件 config/config.js 中引入该插件：
.gitignore
cnpm 安装的依赖会被默认安装到项目的 node_modules 目录下。这个目录通常是不需要提交到代码仓库中的。如果你使用的是 git 来作为代码的管理工具，那么你可以添加 .gitignore 文件到项目根目录中，避免将不必要的代码提交到 git 仓库中。
.gitignore 如下：
其中 .umi 是 umi 在开发过程中产生的临时入口文件，便于开发调试，同样也不需要提交到代码仓库中。dist 是构建出来的产物，通常也不需要提交。
我们建议你可以在本地通过 git 管理起你的代码，方便在后面的课程中更好的操作你的代码。
构建和部署
你可以通过 cnpm run build 来构建出最终的产物，执行该命令后会生成最终的 HTML、CSS 和 JS 到 dist 目录下。它们是浏览器可以直接识别并运行的代码，这样你就可以将它们部署到你想要的服务器上了。
需要注意的是，如果你直接用浏览器打开 HTML 那是无法正确展示的，因为直接打开无法识别出 HTML 引入的 JS 和 CSS 的路径。你需要确保的的 HTML 在一个 HTTP 的 web 容器中，并保证对应的页面的访问路径正确。比如使用 serve：
更多关于部署的问题可以查看 umi 的部署文档。