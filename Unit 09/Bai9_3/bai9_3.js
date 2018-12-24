var btn = document.getElementsByTagName('button')
var div = document.getElementsByTagName('div')
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function(){
		this.style.backgroundColor = "#fff"
		this.style.color = 'black'
		// console.log(i)
		var a = parseInt(this.className)-1
		div[a].style.display = 'block'
	})
	btn[i].addEventListener('blur', function(){
		this.style.backgroundColor = "#8c9098"
		this.style.color = '#fff'
		var a = parseInt(this.className)-1
		div[a].style.display = 'none'
	})
}