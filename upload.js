function upld() {
			let photo = document.getElementById("f1").files[0];
			let req = new XMLHttpRequest();
			let formData = new FormData();
			formData.append("photo", photo);
			req.open("POST","upld.php",true);
			req.send(formData);
			req.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					alert(this.responseText);
				}
			}
}