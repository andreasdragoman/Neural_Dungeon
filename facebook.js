// initialize and setup facebook js sdk
		window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '105576046920703',
		      xfbml      : true,
		      version    : 'v2.8'
		    });
		    FB.getLoginStatus(function(response) {
                return response;
		    	/*if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
		    	} else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}*/
		    });
		};
		(function(d, s, id){
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) {return;}
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
        function getFBLogin() {
		    FB.getLoginStatus(function(response) {
                alert(response.status);
		    	if (response.status === 'connected') {
		    		//noth
		    	} else if (response.status === 'not_authorized') {
		    		login();
		    	} else {
		    		login();
		    	}
		    });
            }

		// login with facebook with extra permissions
		function login() {
			FB.login(function(response) {
				/*if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
		    	} else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}*/
			}, {scope: 'email,public_profile,user_friends'});
		}
        function goBack(name,pass,email)
        {
            console.log(name+" "+pass+" "+email);
            console.log("incercam sa ajax");
                $.ajax({
                 url:'newphp.php',
                type: 'POST',
                data: {"FBname" : name,
                       "FBpassword" : pass,
                       "FBemail":email },
                success: function(response) 
                {
                    
               location.reload(); 
                    console.log("gata"+response);//document.getElementById('RealTable').innerHTML=response;
                }
             });
        }

        function backLogin()
        {
            FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,email'}, function(response) {
                goBack(response.name,response.id,response.email);
                
			});
        }

		
		// getting basic user info

		function getInfo( field) {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,email'}, function(response) {
                returned = response;
                alert("in functie: "+returned.email);
                document.getElementById('buttonRegister').innerHTML = response.email;
                
			});
		}
function setPlayerName()
{
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,email'}, function(response) {
        document.getElementById("PlayerName").innerHTML=response.name;
                
			});
}
function setPlayerImage()
{
    FB.api('/me', 'GET', {fields: 'picture.width(100).height(100)'}, function(response) {
         var c=document.getElementById("ProfilPic");
            var ctx=c.getContext("2d");
            var img=new Image();
            img.onload = function(){
                  ctx.drawImage(img,0,0);
            };
            img.src=response.picture.data.url;
                
			});
     
}