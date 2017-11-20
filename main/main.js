window.onload = function(){
    document.getElementById("fin").onclick=function(){
       main();
    };
};
function main(){
    var fs=(part1_1()+part1_2()+part2()+part3()+part4()+part5());
    if(fs<0){
        alert("仍有题目未完成，请回答完所有题目再提交计算分数。");
        document.getElementById("finalscore").value = " ";
    }

    else{

        document.getElementById("finalscore").value = fs;
    }
}
var answer=["封装性","继承性","多态性"];

function part1_1(){
    var score=0;
    var test=document.getElementById("填空1");
    if(test.value=="")
        score=score-200;
    else if(test.value=="统一建模语言")
    {
        score=score+5;
    }
    return score;
}
function part1_2() {
    var score=0;
    var count=0;
    var result=[];
    var test1=document.getElementById("填空2-1");
    var test2=document.getElementById("填空2-2");
    var test3=document.getElementById("填空2-3");

    result.push(test1.value);
    result.push(test2.value);
    result.push(test3.value);
    if(result[0]!="" && result[1]!="" && result[2]!=""){
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++){
                if(result[i]==answer[j])
                {
                    count=count+1;
                    break;
                }
            }
        }
        score=score+count*5;
    }
    else{
        score=score-200;
    }
    return score;
}
function part2(){
    var score=0;
    var test4=document.getElementById("1_4");
    if(test4.checked)
    {
        score=score+10;
    }
    var test4=document.getElementById("2_4");
    if(test4.checked)
    {
        score=score+10;
    }
    return score;
}
function part3(){
    var score=0;
    var test1=document.getElementById("3_1");
    var test2=document.getElementById("3_2");
    var test3=document.getElementById("3_3");
    var test4=document.getElementById("3_4");
    if(test1.checked && test2.checked && test4.checked && !test3.checked)
    {
        score=score+10;
    }else if(!test1.checked && !test2.checked && !test3.checked && !test4.checked)
    {
        score=score-200;
    }
    var test1=document.getElementById("4_1");
    var test2=document.getElementById("4_2");
    var test3=document.getElementById("4_3");
    var test4=document.getElementById("4_4");
    if(test1.checked && test2.checked && test3.checked && !test4.checked)
    {
        score=score+10;
    }
    else if(!test1.checked && !test2.checked && !test3.checked && !test4.checked)
    {
        score=score-200;
    }
    return score;
}
function part4(){
    var score=0;
    var test1=document.getElementById("5_2");
    var test2=document.getElementById("6_1");
    if(test1.checked)
    {
        score=score+10;
    }
    if(test2.checked)
    {
        score=score+10;
    }
    return score;
}
function part5(){
    var score=0;
    var contest="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。";
    var test=document.getElementById("7");

    if(test.value==contest){
        score=score+20;
    }else if(test.value=="")
    {
        score=score-200;
    }
    return score;
}
/*

function main(){
    let sum;
    let res=document.getElementById("tn").value;
    alert(res);
};
var answer=["封装性","继承性","多态性"];

function part1_1(){
    var score=0;
    var test=document.getElementById("填空1");
    if(test.value=="")
        score=score-200;
    else if(test.value=="统一建模语言")
    {
        score=score+5;
    }
    return score;
}
function part1_2() {
    var score=0;
    var count=0;
    var result=[];
    var test1=document.getElementById("填空2-1");
    var test2=document.getElementById("填空2-2");
    var test3=document.getElementById("填空2-3");

    result.push(test1.value);
    result.push(test2.value);
    result.push(test3.value);
    if(result[0]!="" && result[1]!="" && result[2]!=""){
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++){
                if(result[i]==answer[j])
                {
                    count=count+1;
                    break;
                }
            }
        }
        score=score+count*5;
    }
    else{
        score=score-200;
    }
    return score;
}
function part2(){
    var score=0;
    var test4=document.getElementById("1_4");
    if(test4.checked)
    {
        score=score+10;
    }
    var test4=document.getElementById("2_4");
    if(test4.checked)
    {
        score=score+10;
    }
    return score;
}
function part3(){
    var score=0;
    var test1=document.getElementById("3_1");
    var test2=document.getElementById("3_2");
    var test3=document.getElementById("3_3");
    var test4=document.getElementById("3_4");
    if(test1.checked && test2.checked && test4.checked && !test3.checked)
    {
        score=score+10;
    }else if(!test1.checked && !test2.checked && !test3.checked && !test4.checked)
    {
        score=score-200;
    }
    var test1=document.getElementById("4_1");
    var test2=document.getElementById("4_2");
    var test3=document.getElementById("4_3");
    var test4=document.getElementById("4_4");
    if(test1.checked && test2.checked && test3.checked && !test4.checked)
    {
        score=score+10;
    }
    else if(!test1.checked && !test2.checked && !test3.checked && !test4.checked)
    {
        score=score-200;
    }
    return score;
}
function part4(){
    var score=0;
    var test1=document.getElementById("5_2");
    var test2=document.getElementById("6_1");
    if(test1.checked)
    {
        score=score+10;
    }
    if(test2.checked)
    {
        score=score+10;
    }
    return score;
}
function part5(){
    var score=0;
    var contest="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。";
    var test=document.getElementById("7");

    if(test.value==contest){
        score=score+20;
    }else if(test.value=="")
    {
        score=score-200;
    }
    return score;
}
/*
function finalscore(){
    var fs=(part1_1()+part1_2()+part2()+part3()+part4()+part5());
    if(fs<0){
        alert("仍有题目未完成，请回答完所有题目再提交计算分数。");
        document.getElementById("finalscore").value = " ";
    }

    else{
        document.getElementById("finalscore").value = fs;

    }
}*/
