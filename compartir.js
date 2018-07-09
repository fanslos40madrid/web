<!--
$( document ).ready(function() {

	$('.btn-share').on('click', function(e) {

		e.preventDefault();

		var ssnn = $(this).data('ssnn');
		var c_url = location.href.split('#')[0];
		c_url = c_url.replace(/.html.*$/gi, ".html");
		c_url = c_url.replace(/\/album-\d+\//gi, "/album/");
		c_url = c_url.replace(/\/m\//gi, "/");

		if( ( c_media == '' || typeof(c_media) == 'undefined') ) {
		var c_media = encodeURI(getDataFromProperty('og:image'));
}

		//var c_title = encodeURIComponent(document.title.split('|')[0]);
		var c_title = encodeURIComponent($('meta[property="og:title"]').attr('content'));

		if ( typeof(c_via) == 'undefined' || c_via == '' ){
			    var c_via = encodeURIComponent(getDataFromNames('twitter:creator'));
				if(c_via == '' ){
						c_via = '@los40';
					}
		}
		c_via = c_via.split('@');
		c_via = c_via[1] || c_via[0];



		switch (ssnn) {

			case 'facebook':

			EPETShare('https://www.facebook.com/sharer.php?u=' + c_url + '?ssm=FB_CC' + '&t=' + c_title);
				break;
			case 'twitter':
				c_title = encodeURIComponent($('meta[name="twitter:title"]').attr('content'));
				EPETShare('https://twitter.com/share?url=' + c_url + '?ssm=TW_CC' + '&text=' + c_title +'&via=' + c_via);
				break;
			case 'linkedin':
				EPETShare('https://www.linkedin.com/shareArticle?url=' + c_url + '?title=' + c_title);
				break;
			case 'googleplus':
				EPETShare('https://plus.google.com/share?url=' + c_url + '?ssm=GP_CC');
				break;
			case 'pinterest':
				EPETShare('http://www.pinterest.com/pin/create/button/?url=' + c_url + '?ssm=PI_CC' +'&description='+c_title+'&media='+c_media );
				break;
			case 'tumblr':
				EPETShare('https://www.tumblr.com/share?s=&v=3&t=' + c_title + '&u=' + c_url + '?ssm=TB_CC');
				break;
			case 'whatsapp':
				document.location.href='whatsapp://send?text=' + c_title + ' ' + c_url ;
				break;
			case 'sms':
				document.location.href='sms:&body='+c_title+' '+c_url;
				break;
			case 'email':

			//EPETMail(document.getElementById('enviar'), document.getElementById('capaEnviarCorreo'), nickname);
				break;
			default:
				return;

		}

	});


});

//ie8 y anteriores no soporta Array.isArray
if (typeof(Array.isArray) == "undefined")
{
	Array.isArray = function(obj)
	{
		return (typeof(obj) == "object") && (obj.constructor == Array);
	}
}

// Una simulacion de sprintf
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function getDataFromProperty(_metaName) {
    var metas = document.getElementsByTagName('meta');
    for (var i=0; i<metas.length; i++) {
        if (metas[i].getAttribute("property") == _metaName) {
            return metas[i].getAttribute("content");
        }
    }
    return "";
}
function getDataFromNames(_metaName) {
    var dataFromNames="";
    var sinArroba ="";
    var metas = document.getElementsByTagName('meta');
    var entro = 0;
    for (var i=0; i<metas.length; i++) {
        if (metas[i].getAttribute("name") == _metaName) {
		if(entro== 0){
	         	sinArroba = metas[i].getAttribute("content");
			sinArroba = sinArroba.split('@');
			dataFromNames = sinArroba[1] + dataFromNames;
			entro++;
	     	}else{
			dataFromNames = dataFromNames + " " + metas[i].getAttribute("content") ;

		}
        }
    }
    return dataFromNames;
}
function getTitleFromMeta() {
    return getDataFromProperty('og:title')
}


if ( typeof(c_via) == 'undefined' || c_via == '' ){
   var c_via = encodeURIComponent(getDataFromNames('twitter:creator'));
		if(c_via == '' ){
				c_via = '@los40';
			}

}
c_via = c_via.split('@');
c_via = c_via[1] || c_via[0];

if( ( c_media == '' || typeof(c_media) == 'undefined') ) {
    var c_media = encodeURI(getDataFromProperty('og:image'));
}

if( ( c_description == '' || typeof(c_description) == 'undefined') ) {
    var c_description = encodeURIComponent(getDataFromProperty('og:description'));
}

if( ( c_title == '' || typeof(c_title) == 'undefined') ) {
    var c_title = encodeURIComponent(getDataFromProperty('og:title'));
}

if ( typeof(c_url) == 'undefined' || c_url == '' ) {
    var c_url = getDataFromProperty('og:url');
    c_url = c_url.replace(/.html.*$/gi, ".html");
    c_url = c_url.replace(/\/album-\d+\//gi, "/album/");
}

var regex = /(^.+\.html)(\?|#).*$/;
if ( regex.test (c_url) ) {
    c_url = c_url.replace(regex, '$1' );
}

var params = {
    url         : c_url,
    text        : c_title,
    via         : c_via,
    media       : c_media,
    description : c_description
    };

var GlobRecvCount = {
    twitter:  new Array(),
    facebook: new Array(),
    linkedIn: new Array(),
    google:   new Array(),
    tuenti:   new Array(),
    tumblr:   new Array(),
    pinterest:new Array()
}

function EPETSocial(_red, _aElements, _countDivs, _params){
    this.red        = _red || 'void';
    this.aElements  = _aElements || [];
    this.countDivs  = _countDivs || [];
    this.objNum     = 0;
    if ( typeof(_params) != "undefined" ) {
        this.url        = _params['url']  || params ['url']
        this.text       = _params['text'] || params['text'];
        this.via        = _params['via']  || params['via'];
    } else {
        this.url        = params ['url']
        this.text       = params['text'];
        this.via        = params['via'];
    }

    this.ancho          = 550;
    this.alto           = 450;
    this.shareTitulo    = 'Recomendar';
    this.searchTitulo   = 'Buscar';
}

EPETSocial.prototype.shared = function (e) {
        return e.clicked(this.share,this.shareTitulo);
}

EPETSocial.prototype.searched = function (obj) {
        return obj.clicked(this.searchCall,this.searchTitulo);
}

EPETSocial.prototype.fillCount = function() {
    if (!this.countCall)
        return false;
    var scriptElement = document.createElement("script");
    scriptElement.type  = "text/javascript";
    scriptElement.src   = this.countCall.format(this.objNum);
    document.body.appendChild(scriptElement);
} // prototype fillCount


/* Separate thousands with dot */
EPETSocial.prototype.processCount = function (count) {
  /*  var cad = '';
    if (count > 999999) {
        count = count/1000000;
        cad = ' MM';
    } else if (count > 9999) {
        count = count/1000;
        cad = ' Mil';
    }
    count = Math.floor(count);
    count += '';
    var regex = /(\d+)(\d{3})/;
    while (regex.test(count)) {
        count = count.replace(regex, '$1' + '.' + '$2');
    }

    return count+cad;*/
    return count;
} // processCount

/* Receive count from the callback and fill in */
EPETSocial.prototype.recvCount = function(json) {
    var count = this.getJsonCount(json);
    var that = this;
    count = this.processCount(count);
    if (Array.isArray(this.countDivs)){
        for (var i in this.countDivs) {
            var element = document.getElementById(this.countDivs[i]);
		/*if((count == 'Twitter') || (count == 'Facebook') || (count == 'Google+') || (count == 'Pinterest')){
			element.className =  "no-counter";
		}*/
            if (element) {
                if (typeof this.searchCall != "undefined") { addEventById(this.countDivs[i],'click',function(e){ that.searched(that);e.stopPropagation();e.preventDefault()}); }
                element.innerHTML = count;
            }
        }
    } else {
        var element = document.getElementById(this.countDivs);
        if (element){
            if (typeof this.searchCall != "undefined") { addEventById(this.countDivs[i],'click',function(e){ that.searched(that);e.stopPropagation();}); }
            element.innerHTML = count;
        }
    }

} // recvCount

EPETSocial.prototype.run = function() {

    this.objNum = GlobRecvCount[this.red].push(this) - 1;

    /* Running actual code */
    var that = this;

    if (Array.isArray(this.aElements)){
      for (var i in this.aElements) {
        addEventById(this.aElements[i],'click',function(){ that.shared(that)});
      }
    } else {
      addEventById(this.aElements,'click',function(){ that.shared(that)});
    }

    this.fillCount(), 100;

} // run


/*
 * Objeto Facebook
 *
 */
function Facebook(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'facebook', _aElements, _countDivs, _params);
    this.share      = 'http://www.facebook.com/sharer.php?u='+encodeURI(this.url)+'&t='+this.text;
    this.countCall  = 'https://api.facebook.com/method/fql.query?query=select%20total_count%20from%20link_stat%20where%20url=%22' + encodeURI(this.url) + '%22&format=json&callback=GlobRecvCount.facebook[{0}].recvCount';

} // Facebook

Facebook.prototype = new EPETSocial;
Facebook.prototype.getJsonCount = function (json) { if (Array.isArray(json)) {return json[0].total_count || 'Compartir';} else {return 'Compartir'}}

/*
 * Objeto Pinterest
 *
 */
function Pinterest(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'pinterest', _aElements, _countDivs, _params);
	this.share		= 'http://www.pinterest.com/pin/create/button/?url='+encodeURI(this.url)+'&description='+this.text+'&media='+media;
	this.countCall	= 'http://api.pinterest.com/v1/urls/count.json?url='+encodeURI(this.url)+'&callback=GlobRecvCount.pinterest[{0}].recvCount';
} // Pinterest

Pinterest.prototype = new EPETSocial;
Pinterest.prototype.getJsonCount = function (json) { return json.count || 'Pin'}

/*
 * Objeto Tuenti
 *
 */
function Tuenti(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'tuenti', _aElements, _countDivs, _params);
    this.share      = 'http://www.tuenti.com/share?url='+encodeURI(this.url);
} // Tuenti
Tuenti.prototype = new EPETSocial;

/*
 * Objeto Tumblr
 *
 */
function Tumblr(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'tumblr', _aElements, _countDivs, _params);
	this.share      = 'https://www.tumblr.com/share?s=&v=3&t=' + this.text + '&u=' + encodeURI(this.url);
} // Tumblr
Tumblr.prototype = new EPETSocial;

/*
 * Objeto Twitter
 *
 */

function Twitter(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements  )
        return false;

    if ( !_countDivs )
        return false;
    this.share      = 'http://twitter.com/share?url=' + encodeURI(this.url) + '&text=' + this.text + '&via=' + this.via;
    this.searchCall = 'http://twitter.com/share?url=' + encodeURI(this.url) + '&text=' + this.text + '&via=' + this.via;

    EPETSocial.call(this,'twitter', _aElements, _countDivs, _params);

} // Twitter

Twitter.prototype = new EPETSocial;
Twitter.prototype.getJsonCount = function (json) {

return json.count || 'Tweet';}



/*
 * Objeto LinkedIn
 *
 */

function LinkedIn(_aElements, _countDivs, _params) {
    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements  )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'linkedIn', _aElements, _countDivs, _params);
    var ts          = new Date().getTime();
    this.share      = 'http://www.linkedin.com/cws/share?url=' + encodeURI(this.url) + '&original_referer=' + encodeURI(this.url) + '&token=&isFramed=false&lang=es_ES&_ts=' + ts;
    this.countCall  = 'http://www.linkedin.com/countserv/count/share?url=' + encodeURI(this.url) + '&callback=GlobRecvCount.linkedIn[{0}].recvCount';

} // LinkedIn

LinkedIn.prototype = new EPETSocial;
LinkedIn.prototype.getJsonCount = function (json) { return json.count || 0;}


/*
 * Objeto GooglePlus
 *
 */

function GooglePlus(_aElements, _countDivs, _params) {

    /* The ref to the caller and the countDiv element is a must */
    if ( !_aElements )
        return false;

    if ( !_countDivs )
        return false;

    EPETSocial.call(this,'google', _aElements, _countDivs, _params);
    this.share       = 'https://plus.google.com/share?url='+encodeURI(this.url);
    this.countCall  = 'https://clients6.google.com/rpc';
    this.postFields = '[{"method":"pos.plusones.get","id":"p","params":{"nolog":true,"id":"' + this.url + '","source":"widget","userId":"@viewer","groupId":"@self"},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]';
} // GooglePlus

GooglePlus.prototype = new EPETSocial;
GooglePlus.prototype.getJsonCount = function (json) {
    if ( typeof json.responseText.length == 'undefined')
        return 'Google+';
    var objJSON = JSON.parse(json.responseText);
    var totalG = objJSON[0].result.metadata.globalCounts.count;
    if (totalG == 0){
	return 'Google+';
    }else{
	return totalG;
    }


}
GooglePlus.prototype.fillCount = function() {
    var that = this;
    EPETUtils_makeHttpRequest_(function (_json) { that.recvCount(_json); },this.countCall,this.postFields,'');
} // GooglePlus.fillCount

function EPETShare(call, _ancho, _alto) {
    if ( !call )
        return false;

    var width   = _ancho || 550;
    var height  = _alto  || 450;

    var sheight = screen.height;
    var swidth  = screen.width;

    var left = Math.round((swidth/2)-(width/2));
    var top  = (sheight>height)? Math.round((sheight/2)-(height/2)) : 0;

    var win  = window.open(call, "Recomendar", "left="+left+",top="+top+",width="+width+",height="+height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
    if (win) {
        win.focus();
    }

    return true;
}


// contador para crear id's únicos
addEvent.guid = 1;

// Añadir un evento a un Objeto dado
function addEvent(element, type, handler) {
  // asignamos a cada manejador de evento un id único
  if (!handler.$$guid) handler.$$guid = addEvent.guid++;

  // inicializar el hash de tipos de eventos para cada elemento
  if (!element.events) element.events = {};

  // recoger el hash de eventos para cada elemento
  var handlers = element.events[type];
  if (!handlers) {
    handlers = element.events[type] = {};
    // almacenar si hay los manejadores existentes
    if (element["on" + type]) {
      handlers[0] = element["on" + type];
    }
  }
  // almancenar el nuevo manejador
  handlers[handler.$$guid] = handler;

  // asignar un manejador de eventos global para hacer todo el trabajo
  element["on" + type] = handleEvent;
}

function removeEvent(element, type, handler) {
  if (element.events && element.events[type]) {
    delete element.events[type][handler.$$guid];
  }
}

function handleEvent(event) {
  // para la compatibilidad con IE
  event = event || window.event;
  // recuperar el hash de manejadores del evento
  var handlers = this.events[event.type];
  // Ejecutar cada uno de los manejadores
  for (var i in handlers) {
    this.$$handleEvent = handlers[i];
    this.$$handleEvent(event);
  }
}

// Añadir evento a un objeto vía ID
function addEventById(elementId, type, handler) {
    var myElement = document.getElementById(elementId);
    if (myElement) {
        addEvent(myElement, type, handler);
        return 1;
    }else{
        return 0
    }
}

// funcion que asocia eventos para desplegar capas y pintar botones en distintas zonas de la noticia. Es solo para una unica noticia.
function initNoticia(_zonasOnClick, _zonasCount, _redesIds){

    // Si se quieren otras zonas, hay que construir el array fuera y pasarlo como parametro.
	var zonas_onclick   = (Array.isArray(_zonasOnClick) ) ? _zonasOnClick : new Array('superior');
    var zonas_count     = (Array.isArray(_zonasCount) ) ? _zonasCount : new Array('superior');
    var redes_ids       = (Array.isArray(_redesIds) ) ? _redesIds : new Array('twit','twit2','fb','gp','tuenti','tumblr','pinterest');
    var countDivs       = new Array();
    var aElements       = new Array();
    var i = 0;

    for (i in redes_ids) {

        aElements.push(redes_ids[i]);
        countDivs.push(redes_ids[i]);
        aElements[redes_ids[i]] = new Array();
        countDivs[redes_ids[i]] = new Array();
        var j = 0;
        var k = 0;

		for (j in zonas_onclick) {
            aElements[redes_ids[i]].push(zonas_onclick[j]+'_'+redes_ids[i]);
        }
        for (k in zonas_count) {
            countDivs[redes_ids[i]].push(redes_ids[i]+'_num_'+zonas_count[k]);
        }
        switch (redes_ids[i]) {
            case 'fb':
                var fb   = new Facebook   (aElements['fb'], countDivs['fb']);
                fb.run();
                break;
            case 'twit':
                var twit = new Twitter    (aElements['twit'], countDivs['twit']);
                twit.run();
                break;
            case 'twit2':
                var twit2 = new Twitter    (aElements['twit2'], countDivs['twit2']);
                twit2.run();
                break;
            case 'linkedin':
                var ln   = new LinkedIn   (aElements['linkedin'], countDivs['linkedin']);
                ln.run();
                break;
			case 'pinterest':
                var pinterest = new Pinterest (aElements['pinterest'], countDivs['pinterest']);
                pinterest.run();
                break;
            case 'gp':
                var gp   = new GooglePlus (aElements['gp'], countDivs['gp']);
                gp.run();
                break;
			case 'tuenti':
                var tuenti   = new Tuenti (aElements['tuenti'], countDivs['tuenti']);
                tuenti.run();
                break;
			case 'tumblr':
                var tumblr = new Tumblr (aElements['tumblr'], countDivs['tumblr']);
                tumblr.run();
                break;
        }
    }
}

function EPETUtils_makeHttpRequest_(callbackFunction, url, postData, contentType) {
	var EPETUtils_xmlHttpRequest = EPETUtils_createHttpRequestObj(contentType);
	if (!EPETUtils_xmlHttpRequest)
		return;
	EPETUtils_xmlHttpRequest.onreadystatechange = function () {
		if (EPETUtils_xmlHttpRequest.readyState != 4)
			return;
		callbackFunction(EPETUtils_xmlHttpRequest);
	}
	EPETUtils_xmlHttpRequest.open('POST', url, true);
	EPETUtils_xmlHttpRequest.setRequestHeader('Content-type','application/json');
	EPETUtils_xmlHttpRequest.send(postData);
}


var text_twitter="";

function mostrarOp(){
	var selText;
	text_twitter="";

	if (window.getSelection){
		var selRange = window.getSelection ();
		selText = selRange.toString ();
	}
	else {
		if (document.selection.createRange) { // Internet Explorer
			var selRange = document.selection.createRange ();
			selText = selRange.text;

			}
	}
	var markerEl, markerId = "sel_" + new Date().getTime() + "_" + Math.random().toString().substr(2);
	var sel, range;
	var markerTextChar = "\ufeff";
	var markerTextCharEntity = "&#xfeff;";
	if (document.selection && document.selection.createRange && selText.length > 2) {
		// Clone the TextRange and collapse
		range = document.selection.createRange().duplicate();
		range.collapse(false);

		// Create the marker element containing a single invisible character by creating literal HTML and insert it
		range.pasteHTML('<span id="' + markerId + '" style="position: relative;">' + markerTextCharEntity + '</span>');
		markerEl = document.getElementById(markerId);
	} else if (window.getSelection) {
		sel = window.getSelection();

		if (sel.getRangeAt) {
			range = sel.getRangeAt(0).cloneRange();
		} else {
			// Older WebKit doesn't have getRangeAt
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);

			// Handle the case when the selection was selected backwards (from the end to the start in the
			// document)
			if (range.collapsed !== sel.isCollapsed) {
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}

		range.collapse(false);

		// Create the marker element containing a single invisible character using DOM methods and insert it
		if (selText.length> 1){

			markerEl = document.createElement("span");
			markerEl.id = markerId;
			var a=document.createTextNode(markerTextChar);
			markerEl.appendChild(a);
			range.insertNode(markerEl);
		}
	}

	if (markerEl) {
		var con = document.getElementById("id_contenedor_capa_flotante_twitter");
		document.body.appendChild(con);

		var obj = markerEl;
		var left = 0, top = 0;
		do {
			left += obj.offsetLeft;
			top += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	var posY=top;
	var posX=left;

	//con.style.left = left + "px";
	//con.style.top = top + "px";

	//posicion
	if (selText !="" && selText.length > 2) {
		document.getElementById("id_contenedor_capa_flotante_twitter").style.display="block";
		document.getElementById('id_contenedor_capa_flotante_twitter').setAttribute("style","display:yes;top:"+posY+"px;left:"+posX+"px;z-index:700");
		text_twitter=selText.substr(0, 95);
		text_twitter= encodeURIComponent('"'+text_twitter+'..."');
		c_prefijo_titulo="text";
	}
	else{
		document.getElementById("id_contenedor_capa_flotante_twitter").style.display="none";
		text_twitter="";
		c_prefijo_titulo="";
	}

}

/**
  * Funcion que comparte a partir de una seleccion de texto
  *
  */
function Twitter_select(_urlClick, _titulo) {

	var _urlClick = location.href.split('#')[0];
	_urlClick = _urlClick.replace(/.html.*$/gi, ".html");
	_urlClick = _urlClick.replace(/\/album-\d+\//gi, "/album/");
	_urlClick = _urlClick.replace(/\/m\//gi, "/");
	var _titulo = encodeURIComponent($('meta[property="og:title"]').attr('content'));
	if ( typeof(c_via) == 'undefined' || via == '' ){
			var c_via = encodeURIComponent(getDataFromNames('twitter:creator'));
			if(c_via == '' ){
					c_via = '@los40';
			}

	}
	c_via = c_via.split('@');
	c_via = c_via[1] || c_via[0];

	var selText;
	text_twitter="";

	if (window.getSelection){
		var selRange = window.getSelection ();
		selText = selRange.toString ();
	}
	else {
		if (document.selection.createRange) { // Internet Explorer
			var selRange = document.selection.createRange ();
			selText = selRange.text;

			}
	}

	text_twitter=selText.substr(0, 95);
		text_twitter= encodeURIComponent('"'+text_twitter+'..."');

        var sheight = screen.height;
        var swidth  = screen.width;

        var left = Math.round((swidth/2)-(550/2));

        var top  = (sheight>440)? Math.round((sheight/2)-(440/2)) : 0;


		if (text_twitter!== "") {

			var via =c_via;
			var url = window.location.href;
			var regex = /(^.+\.html)(\?|#).*$/;
			if ( regex.test (url) ) {
				url = url.replace(regex, '$1' );
			}
			var _urlClick  = 'http://twitter.com/share?url=' + url + '?ssm=TW_CC' + '&text=' + text_twitter + '&via=' + via;
			document.getElementById("id_contenedor_capa_flotante_twitter").style.display="none";
			text_twitter="";
		}

        var win  = window.open(_urlClick, _titulo, "left="+left+",top="+top+",width=550,height=440,personalbar=0,toolbar=0,scrollbars=1,resizable=1");
        if (win) {
            win.focus();
        }
}

window.onload = function() {
	//document.getElementsByClassName("cuerpo_noticia")[0].onmouseup = mostrarOp;
	if ($('.parrafo_de_articulos_z2').length) {
	var con_noticia = document.getElementsByClassName("parrafo_de_articulos_z2");
	}
	if ($('.texto_articulo_salida_audio').length) {
	var con_noticia = document.getElementsByClassName("texto_articulo_salida_audio");

	}
	if (con_noticia != null) {
		if ( con_noticia[0] != null ){
			con_noticia[0].onmouseup = mostrarOp;
		}
	}
	var con_f=document.getElementsByClassName("cont_foto");
	for(var i = 0; i < con_f.length; i++){
		con_f[i].onmouseup = mostrarOp;
	}
}

-->