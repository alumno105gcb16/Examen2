// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistorial('la app se pausó');
		},false);
		document.addEventListener("resume",function(){
			escribehistorial('la app se reinicio');
		},false);
		document.addEventListener("online",function(){
			escribehistorial('la app se conecto a la red');
		},false);
	},false);
});
function escribehistorial(accion){
	$('eHistoria').append('<li>'+accion+'</li>')
}