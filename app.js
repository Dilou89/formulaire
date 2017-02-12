$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		console.log('send');


		var users=[];	

		var tel=$("#tel").val();
		var nom=$("#nom").val();
		var prenom=$("#prenom").val();
		var password=$("#password").val();
		var login=$("#login").val();
		var feminin=$("#feminin:checked").val();
		var masculin=$("#masculin:checked").val();
		var email=$("#email").val();
		var hobbys=$("#hobbys").val();
		var textcolor=$("#textcolor").val();

		
		if(login===nom){
			alert("login différent du nom")
		}
		if(login===prenom){
			alert("login différent du prenom")
		}
		
		console.log(tel+nom+prenom)
		var objet={
			nom:nom,
			prenom:prenom,
			login:login,
			password:password,
			tel:tel,
			email:email,
			feminin:feminin,
			masculin:masculin,
			hobbys:hobbys,
			textcolor:textcolor,

		}	
		console.log(objet);
		users.push(objet);
		console.log(users);
		localStorage.setItem('users',JSON.stringify(users));
		var usager=localStorage.getItem('users');
		var parseUsager=JSON.parse(usager);
		for(var i = 0; i<parseUsager.length; i++){
			console.log(parseUsager[i]);
			$('#app').append(parseUsager[i].nom + "<br />")
			$('#app').append(parseUsager[i].prenom + "<br />")
		}


	})



});