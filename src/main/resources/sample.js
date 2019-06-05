/**
 * 
 */
console.log("牧田 和也");

var firstName="牧田";
var lastName="和也";

console.log(firstName);
console.log(lastName);
var age=22;

if(age<20){
	console.log("未成年です");
}else{
	console.log("成人です");
}

if(0<=age && age<5){
	console.log("幼年期です");
}else if(5<=age && age<15){
	console.log("少年期です");
}else if(15<=age && age <25){
	console.log("青年期です");
}else if(25<=age && age <45){
	console.log("仕事期です");
}else if(45<=age && age <65){
	console.log("高年期です");
}else{
	
}

var answer=0;

for(var i=0;i<=10;i++){
	answer+=i;
}

console.log(answer);

var answer2=0;
var answer7=["0","0","0","0","0","0","0","0","0"];

for(var i=1;i<10;i++){
	for(var j=1;j<10;j++){
		if(i*j<10){
			var str="  "+i*j;
			answer7[j-1]=str;
		}else{
			var str=" "+i*j;
			answer7[j-1]=str;
		}
	}
	console.log(answer7);							
}

function printName(){
	console.log("牧田 和也");
}

var answer3=[1,2,3,4,5,6,7,8,9,10];

for(var i=0;i<10;i++){
	console.log(answer3[i]);
}

for(var i=0;i<10;i++){
	if(answer3[i]%2 != 0){		
		console.log(answer3[i]);
	}
}

var city={"日本":　"東京",
		　"スリランカ":　"スリジャヤワルダナプラコッテ",
		　"タイ":　"クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラアユッタヤー・マハーディロッカポップ・ノッパラッターナラーチャタニーブリーロム・ウドンラーチャニウェットマハーサターン・アモーンラピーンアワターンサティット・サッカタットティヤウィサヌカムプラシット"
};

city["タイ"]="バンコク";

console.log(city["日本"]);
console.log(city["タイ"]);

function printName(){
	console.log("牧田 和也");
}

function add(num1,num2){
	return num1+num2;
}
function sub(num1,num2){
	return num1-num2;
}
function multi(num1,num2){
	return num1*num2;
}
function div(num1,num2){
	return num1/num2;
}
console.log(add(6,3));
console.log(sub(6,3));
console.log(multi(6,3));
console.log(div(6,3));

function global_use() {
	food="カレー";
}

global_use();
console.log(food);
var food="ごはん";
function local_food1(){var food="カレー";console.log(food);}
function local_food2(){var food="うどん";console.log(food);}

local_food1();
local_food2();
console.log(food);

if (true) {
    var x = 5;
}
console.log(x);

//if (true) {
//    let y = 5;
//}
//console.log(y);

var skyline={
	speed: 0,
	bodyColor: "blue",
	run:function run(){
	    skyline.speed += 40;
	}
}

skyline.run();
skyline.run();
skyline.run();
console.log(skyline.speed);

var birthday=new Date(1996,7,12);
console.log(birthday);

birthday.setYear(birthday.getFullYear() + 20);

console.log(birthday);

var answer5=Math.pow(2,3);

console.log(answer5);

function sample1(){
	document.sampleForm.nowText.value = new Date();
}

imgRotate = 0;
function sample2(){
	var targetText = document.getElementById("blueOrRedText");
	if(targetText.style.color == "blue"){
		targetText.style.color = "red";
	}else{
		targetText.style.color = "blue";
	}
	
	var targetImg = document.getElementById("jsImg");
	imgRotate += 90;
	targetImg.style.transform = "rotate(" + imgRotate + "deg)";
	
}

function sample3(target){
	var triathlonDiv = document.getElementById("triathlon");
	var otherDiv = document.getElementById("other");
	if(target.value == "1"){
		triathlonDiv.style.display = "block";
		otherDiv.style.display = "none";
	}else if(target.value == "2"){
		triathlonDiv.style.display = "none";
		otherDiv.style.display = "block";
	}else{
		triathlonDiv.style.display = "none";
		otherDiv.style.display = "none";
	}	
}

function sample4(){
	var namValue = document.sample4Form.name.value;
	if(nameValue == ""){
		alert("名前を入れえてください！");
	}else{
		document.sample4Form.submit();
	}
}

function sample5(buttonObj){
	buttonObj.disabled = "disabled";
}

function sample6(){
	alert("投稿ではなく削除のダミーフォームをセット！");
	document.sample6Form.submit();
}