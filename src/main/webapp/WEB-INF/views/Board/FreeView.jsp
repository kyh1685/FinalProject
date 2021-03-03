<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- include libraries(jQuery, bootstrap) -->
<link
	href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script
	src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- include summernote css/js -->
<link
	href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script>

<!-- ckeditor 사용을 위해 js 파일 연결 -->
<script src="/ckeditor/ckeditor.js"></script>


<style>
div {
	border: 1px solid black
}
.container {
	width: 1000px;
	height: 600px;
	position: relative;
	text-align: center;
	background-color: #CCFFCC;
}
.title {
	width: 100%;
	hight: 30px;
	float: left;
	background-color: white;
}
.bar1 {
	float: left;
	width: 5%;
		background-color: white;
}
.bar2 {
	float: left;
	width: 50%;
		background-color: white;
}
.bar3 {
	float: left;
	width: 20%;
		background-color: white;
}
.bar4 {
	float: left;
	width: 20%;
		background-color: white;
}
.bar5 {
	float: left;
	width: 5%;
		background-color: white;
}
.main {
	float: left;
	width: 100%;
	height: 500px;
	background-color: white;
	overflow:scroll;
}
.rev {
	width: 1000px;
	height: 150px;
	position: relative;
	left: 17%;
}
.revBTN {
	width: 1000px;
	height: 300px;
	position: relative;
	left: 17%;
	text-align: right;
}
.revlist {
	width: 1000px;
	position: relative;
	left: 17%;
	border:1px solid white;
}
.rUpdModal {
	width: 600px;
	height: 200px;
	position: relative;
	left: 30%;
}
#btn2,#btn,#upt,#modUpdBtn,#modCanBtn{
	border-radius : 10px;
	width:100px;
	height:30px;
	color: white;
	background-color: #435a7c;
	border: 1px solid white;
}
#write{
	border-radius : 10px;
	width:100px;
	height:30px;
	color: black;
	background-color: #CCFFCC;
	border: 1px solid white;
}
.replyLine{
	background-color: green;
	width: 1000px;
	height: 30px;
	position: relative;
	left: 17%;
	text-align: center;
	color: white;
	line-height:30px;
}
.replyLine2{
	background-color: green;
	width: 1000px;
	height: 50px;
	position: relative;
	left: 17%;
	text-align: right;
	color: white;
}
.replyLine3{
	background-color: #66CC66;
	width: 1000px;
	height: 50px;
	position: relative;
	left: 17%;
	text-align: center;
	color: white;
	line-height:50px;
	font-size:20px;
}
a{
	color:white;
	text-underline:none;
}
.BtnsArea{
	text-align:right;
}
</style>
</head>
<body>
	<div class="container">

	
		<div class=title>자유게시판</div>

		<div class=bar1>${dto.seq }</div>
		<div class=bar2>${dto.title }</div>
		<div class=bar3>${dto.writer }</div>
		<div class=bar4>${dto.write_date }</div>
		<div class=bar5>${dto.view_count }</div>

		<div class=main>${dto.contents }</div>



		<div class=title>
			<form action="/free/delete" method="post">
				<input type=hidden id=seq name=seq value=${dto.seq }> <input
					type=hidden id=cpage name=cpage value=1>
				<c:if test="${id == dto.writer}">
					<input type=submit id=btn value="삭제">
					<input type=button id=upt value="수정하기">
					<script>
						document.getElementById("upt").onclick=function(){
						  	location.href="/free/updatePage?seq="+seq.value;
					  	 }
					</script>
				</c:if>
				<input type=button id=btn2 value="돌아가기">
			</form>
		</div>
	</div>

	<div class= replyLine>
		댓글 등록 하기
	</div>
	
	<form action=/fcomment/insert method="post"
		enctype="multipart/form-data">
		<div class=rev>
			<textarea id=description name=rev_contents></textarea>
		</div>
		<div class= replyLine2>
			<input type="hidden" id=main_seq name=main_seq value=${dto.seq }>
			<input type="submit" id=write value="글 쓰기">
		</div>
	</form>

	<div class= replyLine3>
		댓글
	</div>

	<div class="revlist" id=revList>
		<input type=hidden id=mSeq value=${dto.seq }>
		<input type=hidden id=hiddenId value=${id }>
		
		<c:forEach var="i" items="${list}">
			<div class='comment'>
				<span class='revWriter'><작성자> : ${i.rev_writer}</span> <span class='revDate'><작성일> : ${i.rev_write_date}</span>
				<p class='revContents'>${i.rev_contents}</p>
				<c:if test="${id == i.rev_writer}">
				<button type='button' class='rUpdBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>수정</button>
				<button type='button' class='rDelBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>삭제</button>
				</c:if>
			</div>
		</c:forEach>
	</div>
	
	<div class="rUpdModal">
			<div class="rUpdContent">
				<div>
					<textarea class="modalRevCon" name="modalRevCon"></textarea>
				</div>
				<div class="BtnsArea">
					<button type="button" class="modalRevBtns" id="modUpdBtn">수정</button>
					<button type="button" class="modalRevBtns" id="modCanBtn">취소</button>
				</div>
			</div>
	</div>


			<div class=replyLine3 id =navi><a href=/free/view?page=${ppage }&seq=${seq}><-</a> ${navi } <a href=/free/view?page=${npage}&seq=${seq}>-></a></div>

	<script>      

	document.getElementById("btn2").onclick=function(){
           location.href="/free/boardList?cpage=1"
       }
   
	$(function(){
	    //id가 description인 태그에 summernote 적용
	    $("#description").summernote({
	        height : 100,
	        width : 1000
	    });
	    $(".modalRevCon").summernote({
	    	height:200,
	    	width:600
	    });
	});
	$(".rUpdModal").hide();
	
	//-----------------------------------
	           $("#revList").on("click",".rUpdBtn",function(){
                    $(".rUpdModal").show();
                    $(".revlist").hide();
                    $("#navi").hide();
                    let rCon = $(this).parent().children(".revContents").text();
                    $(".modalRevCon").val(rCon);
                    let revSeq = $(this).attr("data-revSeq");
                    let mSeq = $(this).attr("data-mainSeq");
                    console.log(revSeq);
                    console.log(mSeq);
                    $("#modUpdBtn").attr("data-revSeq",revSeq);
                    $("#modUpdBtn").attr("data-mainSeq",mSeq);
                });

                $("#revList").on("click",".rDelBtn",function(){
                    let delConfirm = confirm("삭제하시겠습니까?");
                    if(delConfirm){
                   	$(this).parent().remove();
                        $.ajax({
                        	url:"/fcomment/delete",
            				type:"post",
            				data:{revSeq:$(this).attr("data-revSeq"),mainSeq:$(this).attr("data-mainSeq")},
            				dataType:"json"
                        })
                    $.ajax({
                        url:"/fcomment/getNavi",
                        type:"post",
                        data : {mSeq:$("#mSeq").val()},                    
                }).done(function(resp){
                	$("#revPage").html(resp);
                	$(".rUpdModal").hide();
                		})
                    }
                });
  
                $("#modCanBtn").on("click",function(){
                    $(".rUpdModal").attr("style", "display:none;");
                });

                $("#modUpdBtn").on("click",function(){
                    let updConfirm = confirm("수정하시겠습니까?");
                    if(updConfirm) {
                        $.ajax({
                        	url:"/fcomment/update",
		   		   				type:"post",
		   		   				data:{revSeq:$(this).attr("data-revSeq"),mSeq:$(this).attr("data-mainSeq"),revContents:$(".modalRevCon").val()},
		   		   				dataType:"json"
                        }).done(function(obj){
                       		console.log(obj);
                            if(obj.length > 0 ){
                                alert("업데이트 성공");
                                $(".comment").remove();
  		   		   					for (let i=0; i<obj.length;i++){
  		   		   						let div = $("<div class='comment'>");
  		   		   						if(hiddenId.value==obj[i].rev_writer){
  		   		   						 str= "<span class='revWriter'>"+"<작성자> : "+obj[i].rev_writer+"</span>"+
	              	         	 			  "<span class='revDate'>"+"<작성일> : "+obj[i].rev_write_date+"</span>"+
	   		                      	  		   "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
	   		                          		  "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
	   		                         		   "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
	   		                         	   "</div>"
  		   		   						}else{
  		   		   							str= "<span class='revWriter'>"+"<작성자> : "+obj[i].rev_writer+"</span>"+
  		              	         	 		  "<span class='revDate'>"+"<작성일> : "+obj[i].rev_write_date+"</span>"+
  		   		                      	     "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
  		   		                            "</div>"
  		   		   						}
  		   		                        
  		   		                        div.html(str);
  		   		                        $("#revList").append(div);
  		   		                    }
  		   		   				 $("#navi").show();
  		                       $(".revlist").show();
  		   		   				$(".rUpdModal").hide();
                            }
                            $(".rUpdModal").attr("style", "display:none;");
                            
                        })
                    }
                });


            </script>
   	

</body>
</html>