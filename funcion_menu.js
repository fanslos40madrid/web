jQuery(document).ready(function($) {


$(".los40-dropdown-menu-open").hide(0100);

//var altura =  $(".los40-content-menu").offset().top;
$(window).on("scroll" , function(){
	if ($(window).scrollTop() > 0){
		//$("#los40_gpt-SKY1, #los40_gpt-SKY2 ").addClass("publi_fixed");
		if($('.los40-content-radios').css('display') == 'block' || $('.los40-content-program').css('display') == 'block' || $('.los40-content-podcast').css('display') == 'block'){

				$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '170px');
		}	else{
				$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '65px');
		}
		$(".los40-content-menu, .los40-content-actions ").addClass("menu_fixed");
		$(".los40-content-radios,.los40-content-program,.los40-content-podcast").addClass("radio_fixed");
		// $(".los40-content-podcast").addClass("hover-fixed");
		$(".los40-dropdown-menu-open").addClass("open-fixed");
		$(".publicidad_plantilla").attr('id', 'publicidad_header_funcion_menu');
		$(".los40-background-menu").addClass('fondo_top_z1');
		$(".los40-dropdown-menu-open").css('top', '0');

		// Despliegue de la capa de eschuchar con datos de la cancion
	//	$("#escucharahoraon").hide();
		//$("#escucharahoraoff").show();
	} else {
		//$("#los40_gpt-SKY1, #los40_gpt-SKY2 ").removeClass("publi_fixed");
		if($('.los40-content-radios').css('display') == 'block' || $('.los40-content-program').css('display') == 'block' || $('.los40-content-podcast').css('display') == 'block'){
				$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '210px');
		}	else{
				$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '100px');
		}
		$(".los40-content-menu, .los40-content-actions").removeClass('menu_fixed');
		$(".los40-content-radios,.los40-content-program,.los40-content-podcast").removeClass('radio_fixed');
		// $(".los40-content-podcast").removeClass("hover-fixed");
		$(".los40-dropdown-menu-open").removeClass("open-fixed");
		$(".publicidad_plantilla").removeAttr('id', 'publicidad_header_funcion_menu');
		$(".los40-background-menu").removeClass('fondo_top_z1');
		$(".los40-dropdown-menu-open").css('top', '34px');

    // Despliegue de la capa de eschuchar sin datos de la cancion
	//	$("#escucharahoraoff").hide();
		//$("#escucharahoraon").show();
	}
});

/*Cerrar radios online*/
$("#los40-radio-close").click(function(event){
	$(".los40-content-radios").css('display', 'none');
	if ($(window).scrollTop() > 0){
			$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '65px');
	}else{
				$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '100px');
	}
	$("#los40-radio-open").removeClass('los40-active-menu');
});
$("#los40-program-close").click(function(event){
	$(".los40-content-program").css('display', 'none');
	$("#los40-program-open").removeClass('los40-active-menu');

});
$("#los40-podcast-close").click(function(event){
	$(".los40-content-podcast").css('display', 'none');
	$("#los40-podcast-open").removeClass('los40-active-menu');

});


$("#los40-radio-open").click(function(event){
	$(".los40-content-radios").css('display', 'block');
	$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '210px');
	$(".los40-content-program").css('display', 'none');
	$(".los40-content-podcast").css('display', 'none');
	$("#los40-radio-open").addClass('los40-active-menu');
	$("#los40-program-open").removeClass('los40-active-menu');
	$("#los40-podcast-open").removeClass('los40-active-menu');

});

$("#los40-program-open").click(function(event){
	$(".los40-content-program").css('display', 'block');
	$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '210px');
	$(".los40-content-radios").css('display', 'none');
	$(".los40-content-podcast").css('display', 'none');
	$("#los40-radio-open").removeClass('los40-active-menu');
	$("#los40-program-open").addClass('los40-active-menu');
	$("#los40-podcast-open").removeClass('los40-active-menu');
/*	var status = $(this).attr('data-status');
  if(status === "hide") {
		$(".los40-content-podcast").css('display', 'block');
		$(".los40-content-radios").css('display', 'none');
		//$(".los40-hover-podcast").css('display', 'none');
		$(this).attr('data-status', 'show');
		$("#los40-menu-podcast").attr('data-status', 'hide');
	} else {
		$(".los40-hover-podcast").css('display', 'none');
		$(".los40-hover-program").css('display', 'none');
		$(".los40-content-radios").css('display', 'block');
    $(this).attr('data-status', 'hide');
  }*/
});


$("#los40-podcast-open").click(function(event){
	/*var status = $(this).attr('data-status');
  if(status === "hide") {
		$(".los40-content-podcast").css('display', 'block');
		$(".los40-content-program").css('display', 'none');
	//	$(".los40-content-radios").css('display', 'none');
    $(this).attr('data-status', 'show');
		$("#los40-menu-program").attr('data-status', 'hide');
  } else {
		$(".los40-content-podcast").css('display', 'none');
		$(".los40-content-program").css('display', 'none');
		$(".los40-content-radios").css('display', 'block');
    $(this).attr('data-status', 'hide');
  }*/
		$(".los40-content-podcast").css('display', 'block');
		$("#los40_gpt-SKY1,#los40_gpt-SKY2").css('top', '210px');
		$(".los40-content-program").css('display', 'none');
		$(".los40-content-radios").css('display', 'none');
		$("#los40-radio-open").removeClass('los40-active-menu');
		$("#los40-program-open").removeClass('los40-active-menu');
		$("#los40-podcast-open").addClass('los40-active-menu');

});


/* DEPLEGAR MENU DE CADA PROGRAMA */
var submenu = 1;
$(".icono_puntos_menu").click(function(event){
	if (submenu == 1){
		$(".base_submenu_40_principales_z1").animate({"top":"890px"}, 0300);
		$(".desplegar_z2").css('display', 'none');
		$(".cerrar_submenu_z2").css('display', 'block');
		submenu =0;
	} else {
		submenu =1;
		$(".base_submenu_40_principales_z1").animate({"top":"625px"}, 0500);
		$(".desplegar_z2").css('display', 'block');
		$(".cerrar_submenu_z2").css('display', 'none');
	}
});

/* DESPLEGAR MENU DERECHA */
var comprobar = 1;
$(".los40-menu-burger, .los40-icon-alert, .los40-menu-burger-close").click(function(event){
	//se ha deshabilitado la validación por la variable comprobar pues no controla la doble ejecución del proceso
	if (comprobar == 1){
		//if($(".los40-menu-burger-close").css('display')=='none'){
		$(".los40-dropdown-menu-open").show(0300);
		$(".los40-dropdown-menu-open").animate({"right":"0px"}, 0300, function() {
			$(".los40-menu-burger-close").css('display', 'block');
			$(".contenido_botones_resgitro_ingreso").css('display', 'block');
			$(".contenido_boton_login_menu").css('display', 'block');
			$(".los40-background-menu").css('display', 'block');
		});

		comprobar =0;
	} else {
		comprobar =1;
		$(".los40-dropdown-menu-open").animate({"right":"-550px"}, 0500);
		$(".los40-dropdown-menu-open").hide(0300);
		$(".los40-menu-burger-close").css('display', 'none');
		$(".contenido_botones_resgitro_ingreso").css('display', 'none');
		$(".contenido_boton_login_menu").css('display', 'none');
		$(".los40-background-menu").css('display', 'none');
	}
});

/* DESPLEGAR MENU PROGRAMAS MENU DERECHA */
var numero = 1;
$(".los40-program-button").click(function(event){
	if (numero == 1){
	  $(".los40-submenu-programs").toggle(160);
	  $(".los40-program-button").css('color', '#fdca2e');
		  $(".los40-less").css('color', '#fff');
	  $(".los40-more").css('display', 'none');
	  $(".los40-less").css('display', 'block');
	  numero = 0;
	} else {
	  numero = 1;
	  $(".los40-submenu-programs").toggle(160);
	  $(".los40-program-button").css('color', '#fff');
	  $(".los40-more").css('display', 'block');
	  $(".los40-less").css('display', 'none');
  }
});

/* DESPLEGAR MENU HOY EN 40 MENU DERECHA */
var numerohoy40 = 1;
$(".los40-today-button").click(function(event){
	if (numerohoy40 == 1){
		$(".los40-today-menu").toggle(160);
		$(".los40-today-button").css('color', '#fdca2e');
		$(".los40-more").css('display', 'none');
		$(".los40-less").css('display', 'block');
		numerohoy40 = 0;
	} else {
		numerohoy40 = 1;
		$(".los40-today-menu").toggle(160);
		$(".los40-today-button").css('color', '#fff');
		$(".los40-more").css('display', 'block');
		$(".los40-less").css('display', 'none');
	}
});

});