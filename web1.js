const menu1=document.querySelector(".menu-on")
menu1.addEventListener("click", function(){
	menu1.classList.toggle("active");
	document.querySelector(".menu-out").classList.toggle("active")
})
const to = document.querySelector(".top");
window.addEventListener("scroll", function(){
	const x = this.pageYOffset;
	if(x>100){to.classList.add("active")}
		else{to.classList.remove("active")}
	
})
const milk = document.querySelector(".setbt");
milk.addEventListener("click", function(x){
	if(x.target.classList.contains("bt")){
		const tg = x.target.getAttribute("data-title");
		milk.querySelector(".active").classList.remove("active");
		x.target.classList.add("active");
		const mi = document.querySelector(".setup");
		mi.querySelector(".content.active").classList.remove("active");
		mi.querySelector(tg).classList.add("active")
	}
})
const ad = document.querySelector('.ph')
ad.addEventListener("click", function(){
	document.querySelector('.fo-fa').style.display = "flex"
})
const fan = document.querySelector('.pr')
fan.addEventListener("click", function(){
	document.querySelector('.fo-fa').style.display = "none"
})