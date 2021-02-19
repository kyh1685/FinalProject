(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("scholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"percentage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">일반</Col><Col id=\"percentage\">0</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">선행</Col><Col id=\"percentage\">0.3</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">추천장학</Col><Col id=\"percentage\">0.5</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">재정지원</Col><Col id=\"percentage\">0.8</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">성적우수</Col><Col id=\"percentage\">1.0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("scholorship_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"s_kind\" type=\"INT\" size=\"256\"/><Column id=\"s_rec\" type=\"INT\" size=\"256\"/><Column id=\"s_smt\" type=\"INT\" size=\"256\"/><Column id=\"s_spt\" type=\"INT\" size=\"256\"/><Column id=\"s_etc\" type=\"INT\" size=\"256\"/><Column id=\"sSum\" type=\"INT\" size=\"256\"/><Column id=\"t_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchEtc","258","36","25","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_etcSearch","120","36","130","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("학번 또는 이름 검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_std","32","71","377","330",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("students_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"학과\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_scholar","329","36","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("장학금 입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_scholar","439","71","550","330",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("scholorship_ds");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"선행\"/><Cell col=\"2\" text=\"추천\"/><Cell col=\"3\" text=\"성적우수\"/><Cell col=\"4\" text=\"생활지원\"/><Cell col=\"5\" text=\"기타\"/><Cell col=\"6\" text=\"합계\"/><Cell col=\"7\" text=\"작성날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:std_code\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:s_kind\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:s_rec\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:s_smt\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:s_spt\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:s_etc\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:sSum\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:t_date\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","909","411","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_entire","909","36","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("전체 보기");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_cate","30","36","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb_cate_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_cate_innerdataset", obj);
            Div00_form_cmb_cate_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">학번</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_cate_innerdataset);
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("장학금 관리");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship.xfdl", function() {
        this.scholarship_onload = function(obj,e)
        {
        	this.transaction(
        		"selectAllStd.students",//id
        		"/students/selectAllStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_std"
        		)

        		this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)



        };


        this.std_code="";
        this.Div00_grd_std_oncellclick = function(obj,e)
        {
        	this.std_code = this.students_ds.getColumn(e.row,"s_seq");
        	this.scholorship_ds.filter("std_code=='"+this.std_code+"'");
        };

        this.Div00_btn_scholar_onclick = function(obj,e)
        {
        	//등록금 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("scholar_insert_pop",400,100,400,400);
        	objCF.set_titletext(this.std_code+"장학금 입력");
        	objCF.set_formurl("admWork::scholar_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{std_code:this.std_code}, // 학번
        		this,
        		"fn_callback_insertScholar"
        	);
        };


        this.fn_callback_insertScholar = function()
        {
        		this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)
        }

        this.Div00_grd_scholar_oncelldblclick = function(obj,e)
        {
        	var seq = this.scholorship_ds.getColumn(e.row,"seq");
        	//등록금 수정을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("scholar_read_pop",400,100,400,400);
        	objCF.set_titletext("장학금 확인하기");
        	objCF.set_formurl("admWork::scholar_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq}, // 학번+작성날짜
        		this,
        		"fn_callback_updateScholar"
        	);
        };




        this.fn_callback_updateScholar=function()
        {
        		this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)
        }


        this.seq="";
        this.Div00_grd_scholar_oncellclick = function(obj,e)
        {
        	this.seq=this.scholorship_ds.getColumn(e.row,"seq");
        };


        this.Div00_btn_del_onclick = function(obj,e)
        {
        	alert(this.seq)
        	var nRow = this.scholorship_ds.findRow("seq",this.seq);
        	this.scholorship_ds.deleteRow(nRow);
        	this.transaction(
        		"deleteOne.scholarship",//id
        		"/scholarship/deleteOne.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"out_ds=scholorship_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };

        this.Div00_btn_searchEtc_onclick = function(obj,e)
        {
        	var cate = this.Div00.form.cmb_cate.value;
        	var value = this.Div00.form.edt_etcSearch.value;
        	if(cate == '01')
        	{
        		this.students_ds.filter("");
        	}
        	else if(cate == '02')
        	{
        		this.students_ds.filter("s_seq=='"+value+"'");
        	}
        	else if(cate == '03')
        	{
        		this.students_ds.filter("name=='"+value+"'");
        	}

        	cate="";
        };

        this.Div00_btn_entire_onclick = function(obj,e)
        {
        	this.scholorship_ds.filter("");
        };











        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_onload,this);
            this.Div00.form.btn_searchEtc.addEventHandler("onclick",this.Div00_btn_searchEtc_onclick,this);
            this.Div00.form.grd_std.addEventHandler("oncellclick",this.Div00_grd_std_oncellclick,this);
            this.Div00.form.grd_std.addEventHandler("oncelldblclick",this.Div00_grd_std_oncelldblclick,this);
            this.Div00.form.btn_scholar.addEventHandler("onclick",this.Div00_btn_scholar_onclick,this);
            this.Div00.form.grd_scholar.addEventHandler("oncelldblclick",this.Div00_grd_scholar_oncelldblclick,this);
            this.Div00.form.grd_scholar.addEventHandler("oncellclick",this.Div00_grd_scholar_oncellclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.btn_entire.addEventHandler("onclick",this.Div00_btn_entire_onclick,this);
        };

        this.loadIncludeScript("scholarship.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();