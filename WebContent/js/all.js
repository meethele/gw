$(document).ready(function() {
	//头部样式变化
	$(".courtbcdoc-bottom>li").click(function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$(".courtbcdoc-bottom>li").mousemove(function() {
		$(this).find("div").removeClass("dyn").addClass("dyb");
	});
	$(".courtwzq-drop").mousemove(function() {
		$(this).removeClass("dyn").addClass("dyb");
	});
	$(".courtbcdoc-bottom>li").mouseout(function() {
		$(this).find("div").removeClass("dyb").addClass("dyn");
	});
	//判断点击删除之后是否有选中项
	$(".deltable").click(function() {
		delshtk("是否确认删除？", "请选择删除项");
	});
});
//查看
function dflooktkshow(str2, id) {
	var checklength = $('.unitcheck:checked').length;
	if(checklength == 0) {
		promptin(str2, 2000);
	} else if(checklength > 1) {
		promptin('只能选择一项', 2000);
	} else {
		console.log($('.unitcheck:checked').parents("tr").index());
		linkbt(id)
	}
};
//删除弹框
function delshtk(str1, str2) {
	var checklength = $('.unitcheck:checked').length;
	var indexarr = new Array();
	$(".courtbcdoc-conttr").each(function() {
		if($(this).find(".unitcheck").attr("checked")) {
			indexarr.push($(this).index());
		}
	});
	if(checklength == 0) {
		promptin(str2, 3000);
	} else {
		deltk(str1);
		$(".tstkdetermine").click(function() {
			tkhide("#adddoc_tstk");
			for(x in indexarr) {
				console.log(indexarr[x])
			}
		});
	}
};
//删除框
function deltk(str) {
	$("#adddoc_tstk>.cnt").html(str);
	$("#adddoc_tstk").removeClass("dyn").addClass("dyb");
}
//提示
function promptin(str, time) {
	$(".prompt").html(str)
	$(".prompt").fadeIn(1000);
	setTimeout(promptout, time)
}

function promptout() {
	$(".prompt").fadeOut(1000);
}
//显示隐藏
function tkshowf(id) {
	$(id).removeClass("dyn").addClass("dyb");
}

function tkhide(id) {
	$(id).removeClass("dyb").addClass("dyn");
}
//点击按钮跳转
function linkbt(id) {
	window.location.assign(id)
}