//此js用于保存本地存储时，用到的key值

var storageKeyName = (function(mod) {

	mod.key = 0; //0,开发;1,部署外网
	mod.pay = 1; //0,单个商家接口;1,多商家接口
	var exLog = console.log;
	console.log = function(hint, object) {
		if(mod.key === 0) {
			var argus = hint;
			if(typeof(object)!=='undefined') {
				argus = hint + JSON.stringify(object);
			}
			exLog.apply(this, [argus]);
		}
	}
	switch(mod.key) {
		case 0: //开发
			mod.SCHOOLID = 100008;
			mod.USERTYPE = 0;//用户类型，0老师,1家长,2学生
			mod.INTERFACEGU = 'https://zhxy.jiaobaowang.net:8515/schadminwebapi/api/data/';//顾工接口
			mod.INTERFACEKONG = 'https://jbyj.jiaobaowang.net:8443/SchoolCommunicationService/';//孔工接口
			mod.TEACHERIMG = 'https://zhxy.jiaobaowang.net:8515/schadminwebadmin/upuserimg.ashx?userid='; //老师上传头像
			mod.ANDROIDUPDATEURL='http://zhxy.jiaobaowang.net:8015/appupdate/xxt/versionCode.xml';//安卓升级地址

			mod.ALIPAYSERVER='http://192.168.1.121:8081/app/versionCode.xml';//支付宝支付地址
			if(mod.pay==0) {//单商家
				mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
				mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
			}else if(mod.pay==1){//多商家
				mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
				mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
			}

			//---七牛空间和接口---开发---start---
//			mod.QNPB = 'https://qn-educds.jiaobaowang.net/'; //公开空间域名
			mod.QNGETUPLOADTOKEN = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen';
			mod.QNGETUPTOKENHEADIMGE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传个人头像，群头像，资料头像到七牛的token的url
//			mod.QNGETUPTOKENFILE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传文件（云存储）到七牛的token的url
//			mod.QNGETDOWNTOKENFILE = 'http://114.215.222.186:8004/Api/QiNiu/GetAccess'; //获取下载文件（云存储）的token的url，url+七牛文件url
//			mod.QNGETTOKENDELETE = 'http://114.215.222.186:8004/Api/QiNiu/Delete'; //获取批量（或者一个）删除七牛文件的token的url
			//	---七牛空间和接口---开发---end---
			
			//益测益学服务端地址
			//本地：http://192.168.0.125:8080/yiceyixue; 开发：http://139.129.252.49:8080/yiceyixue;
			// mod.YCYXHOST = "http://192.168.0.125:8080/yiceyixue";
			mod.YCYXHOST = "http://139.129.252.49:8080/yiceyixue";
			break;
		
		case 1://正式
			mod.SCHOOLID = 100131;
			mod.USERTYPE = 2;//用户类型，0老师,1家长,2学生
			mod.INTERFACEGU = "https://boss.zhuxue101.net:444/api/Data/"; //用户信息接口
			mod.YCYXHOST = "http://zhxyx.jiaobaowang.net/yiceyixue";//益测益学服务端地址
			
			mod.INTERFACEKONG = 'https://jbyj.jiaobaowang.net:8443/SchoolCommunicationService/';//孔工接口
			mod.TEACHERIMG = 'https://zhxy.jiaobaowang.net:8515/schadminwebadmin/upuserimg.ashx?userid='; //老师上传头像
			mod.QNGETUPLOADTOKEN = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen';
			mod.QNGETUPTOKENHEADIMGE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传个人头像，群头像，
			break;
			
		default:
			break;
	}
	
	//套餐功能类型，多个之间用英文逗号隔开
	mod.FUNCTYPES = 'ycyx'; 
	
	mod.BADGENUMBER = 'badgeNumber';//app角标
	mod.PUBLICPARAMETER = 'publicParameter';//共用参数
	mod.ISFIRST = 'isFitst'; //是否是第一次登陆
	mod.ICONNUM = 0; //角标数量
	mod.PERSONALINFO = 'personalInfo1111'; //个人信息，登录成功后返回值
	mod.SHAKEHAND = 'ShakeHand'; //公钥，登录时，返回的握手信息，
	mod.AUTOLOGIN = 'autoLogin'; //登录信息
	// mod.DOCUMENTSPATH = 'DOCUMENTSPATH'; //记录document的地址
//	mod.SEHISTORY = 'seHistory'; //科教历史记录
//	mod.SECITY = 'seCity'; //科教订制的城市
//	mod.SHOWCITY = 'showCity'; //展现订制的城市

//	mod.VIDEOSIZE = -1;//视频大小限制 -1为不限制   30 * 1024 * 1024 =30M
//	mod.VIDEOLENGTH = 301; //视频时长限制 -1为不限制

	mod.WAITING = '加载中...'; //
	mod.UPLOADING = '上传中...';
	mod.SIGNKEY = 'jsy309'; //签名密钥
	//---七牛---start---
	//七牛上传空间key值
	//资源平台
	mod.QNPUBZYKEY = "jsy8004";
	//教宝云作业
	mod.QNPUBJBYZYKEY = "zy309309!";
	//教宝云盘
	mod.QNPUBJBYPKEY = "jbyp@2017";
	//教宝云用户管理
	mod.QUPUBJBMANKEY = "jbman456";
	//家校圈
	mod.QNPUBJXQKEY = "jxq789!@";
	//求知
	mod.QNPUBQZKEY = "qz123qwe";
	//校讯通
	mod.QNPUBXXT = "jsy@180526";

	//七牛存储子空间（文件二级文件名）
	mod.QNPUBSPACE = "pb"; //七牛公开空间
	mod.QNPRISPACE = "pv"; //七牛私有空间
	mod.XXTNOTICE = 'notice/'; //笔校讯通、通知
	//---七牛---end---

	//---默认图片---start---
//	mod.DEFAULTPERSONALHEADIMAGE = '../../img/utils/default_personalimage.png'; //默认的个人头像
//	mod.DEFAULTSCIEDUIMAGELOAD = '/img/utils/default_load_2.gif'; //科教首页，懒加载显示加载中的图片
//	mod.DEFAULTIMAGELOAD = '/img/utils/default_load_2_1.gif';
	//---默认图片---end---

	
	/**
	 * 在本地存永久数据
	 * @param {Object} key
	 * @param {Object} value
	 */
	mod.setLocalStorage = function(key, value) {
		localStorage.setItem(key, value);
	}

	/**
	 * 取永久数据
	 * @param {Object} key
	 */
	mod.getLocalStorage = function(key) {
		return localStorage.getItem(key);
	}

	/**
	 * 删除单个永久数据
	 * @param {Object} key
	 */
	mod.removeLocalStorage = function(key) {
		localStorage.removeItem(key);
	}

	/**
	 * 删除所有的永久数据
	 */
	mod.clearLocalStorage = function() {
		localStorage.clear();
	}

	/**
	 * 在本地存临时数据
	 * @param {Object} key
	 * @param {Object} value
	 */
	mod.setSessionStorage = function(key, value) {
		sessionStorage.setItem(key, value);
	}

	/**
	 * 取临时数据
	 * @param {Object} key
	 */
	mod.getSessionStorage = function(key) {
		return sessionStorage.getItem(key);
	}

	/**
	 * 删除单个临时数据
	 * @param {Object} key
	 */
	mod.removeSessionStorage = function(key) {
		sessionStorage.removeItem(key);
	}

	/**
	 * 删除所有的临时数据
	 */
	mod.clearSessionStorage = function() {
		sessionStorage.clear();
	}

	return mod;

})(storageKeyName || {});