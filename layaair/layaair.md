#layaair简介：
*	LayaAir是Layabox旗下第二代HTML5开源引擎，是全球性能最高的HTML5引擎之一。
*	LayaAir突破性的将2D、3D、AR、VR和页游、Native手游、HTML5游戏等诸多需求通过一个引擎得以统一。
##引擎特点
*	性能卓越：
	*	拥有远超越业界水准的性能体验，经性能评测媲美APP引擎Unity3D
*	三端发布：
	*	一次开发，零成本同时发布**HTML5、APP、Flash**页游三种版本。
*	多类型：
	*	已支持2D、3D、VR、AR游戏类型。
*	多语言：
	*	已支持ActionScript3(AS3)、TypeScript、**JavaScrip**t三种开发语言。
*	运行库小巧：
	*	核心库功能强大，体积极轻，核心库+2D+UI+动画特效粒子+3D+VR小于500K。
*	IDE完善：
	*	拥有完整的IDE集成开发环境，主要包括代码编辑器、UI编辑器、粒子编辑器、动画编辑器、场景编辑器、资源转换器（支持Spine与DragonBones骨骼动画、swf动画、Unity3D资源等）
	
##layaair使用
###安装layaair
*	1.选择：layaair IDE下载
*	2.解压后将ayaAir.exe右键发送到桌面快捷方式

###新建项目
*	1.打开LayaAirIDE，如果是首次打开，直接点击“新建项目”开始创建新项目。
*	2.在“新建项目”的窗口里，选择 “JavaScript项目”。
*	3.点击确定，自动生成了一个UI示例项目，包括了一个简单的DEMO。
###目录结构介绍
*	**1.项目运行配置文件（.laya文件夹**）
	*	 .laya 文件夹下存放的是项目在开发运行中的一些配置信息。
	*	 .laya/launch.json 文件保存了项目调试的一些配置信息,分别是LayaAirIDE的调试配置和chrome浏览器调试配置。
*	**2.项目的输出目录（bin）**
	*	bin目录下存放的就是当前项目的输出文件。
	*	bin/libs 文件夹存放的是 LayaAir 引擎各模块的js 文件，在项目中需要使用哪个模块就需要在 index.html 引入对应的 模块包JS 文件。
*	**3.UI项目目录（laya）**
	*	laya 目录是当前项目的UI 项目目录。
		*	其中的 assets 目录用来存放编辑UI页面、粒子等组件所需的资源文件。
		*	其中的 pages 目录用来存放编辑器生成的页面配置文件。
		*	其中的 .laya 文件是UI项目配置文件。
*	**4.项目脚本代码目录（src）**
	*	项目中的脚本代码文件默认将存放在 src 目录。
*   **5.项目配置文件（项目名.laya）**
	*   注意与上面的**运行配置文件区分**开，上面的是 **.laya文件夹下的launch.json**,这里的是**项目名.laya**

###layaair引擎的工具链：
*	第一是用于骨骼动画的编辑器Spine、第二是地图编辑器TiledMap、第三是3D编辑器Unity3D
###测试项目
*	显示文字“Hello Layabox”
	*	1.选中bin右键单击，然后左键点击“新建文件”，在bin目录下建立一个HelloLayabox.js的文件。
	*	2.按建步骤一的方式，还在bin目录下，创建一个HelloLayabox.html的文件，点击打开该文件编写如下图的HTML代码。这里包括了引擎库与程序代码的引用。（Tips:如果项目代码里涉及中文，需要在HTML里设置好utf-8编码



###laayaair指令：
*	初始化画布
		
		Laya.init()
*	创建文本标签

		let txt = new Laya.Text();
*	设置文本内容
		txt.text = "hello,World"
*	设置字体颜色
	
		txt.color = "red"
*	设置字体大小,单位是px

		txt.fontSize = "66"
*	将文本内容添加到舞台

		Laya.stage.addChild(txt);
*	设置字体描边

		txt.stroke = 5;//描边为5像素
*	设置字体描边颜色
	
	   txt.strokeColor = "#FFFFFF";
*	粗体

		txt.bold = true;  	
*	设置文本的显示起点位置X,Y
	
		txt.pos(60,100);	
*   设置舞台背景色
	
		Laya.stage.bgColor  = '#23238E'; 