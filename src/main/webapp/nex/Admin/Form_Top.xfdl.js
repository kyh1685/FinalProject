(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("admin_alarm", this);
            obj._setContents("<ColumnInfo><Column id=\"confirm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("session", this);
            obj._setContents("<ColumnInfo><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::default/images/khLogo.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","200","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#0d6efd");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","220","13","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관리자님 환영합니다.");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home",null,"10","80","30","210",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_home");
            obj.set_text("HOME");
            this.addChild(obj.name, obj);

            obj = new Button("alarm_btn",null,"10","80","30","122",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_message");
            obj.set_text("쪽지");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"10","100","30","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_logout");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","alarm_btn","text","admin_alarm","confirm");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.objApp = nexacro.getApplication();

        //홈 버튼 클릭시 홈 화면 호출
        this.btn_home_onclick = function(obj,e)
        {

        	location.href="/";

        };


        this.btn_logout_onclick = function(obj,e)
        {
        	this.transaction(
        			"logout" //id
        			,"/logOut.log"//url
        			,""// inData
        			,""// outData
        			,""//strArg
        			,"fn_callback_logout"
        		);
        };
        this.fn_callback_logout=function(){
        this.objApp.gds_admin.clearData();
        	location.href="/";
        }
        this.alarm_btn_onclick = function(obj,e)
        {
        	var ObjCF = new ChildFrame();
        	ObjCF.init("pop_CorpDept", 0, 0, 800, 600);
        	ObjCF.set_formurl("admWork::alarm_admin.xfdl");

        	ObjCF.showModal(this.getOwnerFrame(), {}, this, "fn_callback_pop");
        };

        this.fn_callback_pop= function(){
        	this.transaction(
        			"alarm" //id
        			,"/alarm.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        }
        this.Form_Top_onload = function(obj,e)
        {
        			this.transaction(
        			"alarmAdmin" //id
        			,"/alarmAdmin.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);


        };



        this.Static00_onclick = function(obj,e)
        {
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_deleteTab();
        	this.fn_setFrameSize("home");
        };

        this.fn_setFrameSize = function(type)
        {
        	if(type == "home"){
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        	} else {
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.alarm_btn.addEventHandler("onclick",this.alarm_btn_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
