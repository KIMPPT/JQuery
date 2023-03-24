//HTML head에 CDN으로 값을 가져온 후
//다른 JS에서도 JQuery에 접근 할 수 있다.
//모두 문자열로 작성해야 한다. 계산식을 넣어야 한다면 `${}` 사용가능
//.css() 를 이용해서 style 값을 바꿀 수 있다.
$("#header").css("color","blue");
//스타일을 여러개 바꾸고 싶을 때는 객체형태로 작성 
//속성이름 중 - 가 있다면 - 다음 문자의 첫글자를 대문자로 하면 된다.
$("#header").css(
    {
        "backgroundColor":"gray","fontSize":"5rem"
    }
    );

    //버튼을 클릭했을 때 hidden 클래스 추가
$("#btn").on("click",
function()
{
    //형제태그를 통해서 p태그를 찾고 클래스 추가
    $(this).prev().addClass("hidden");
    //this를 통해서 현재 이벤트가 실행된 태그를 가져 올 수 있다.
    console.log($(this));
});
$("#toggle-button").on("click",
function()
{
    $("#header").toggleClass("hidden");
});
//todo의 input 에 접근해서 그 값에 따라서 디자인 변경
$("#todo input[type='checkbox']").on("click",function(e)
{
    console.log(e.target.checked);

    
    if(e.target.checked){
        $("#todo").css("color","gray");
        $("#todo").addClass("checked");
    }
    else{
        $("#todo").css("color","").removeClass("checked");
        //2개로 써도 되고 위처럼 1개에 겹쳐서 써도 상관없다.
    }
    //this를 통해서 이벤트가 발생한 태그를 가져 올 수 있다.
    console.log($(this).prop("checked"));
    //.porp(속성이름)을 통해서 속성값을 가져 올 수 있다.
});

/*
let checkbox=$("#todo");

$("#todo").children().first().on("click",
function()
{
    $("#todo").css("color","green");
});
*/

console.log($("#number-btns>tbody>tr>td>button"));
$("#number-btns tbody tr td button").on("click",
function(e)
{
    $(this).css("color","red").prop("disabled","true");
});
