/* common */
function cart_modal_init(){
	$('.modal-up').find('.cart-add-form-modal1 select').each(function(){
		var ops = {}
		
		$(this).styler(ops);
	})
}
function hide_blocks_filter(){
	$('body').find('.filter-block1__list1-item .filter-block-multi .block-button').prop('checked',false);
	$('body').removeClass('js-block-opened');
}
window.filter_sended = false;
function filter_init() {
	var $b = $('body');
	var p = $b.find(".price-chose1__slide");
	var values = [570,5720];
	var min = Number(p.parent().find('.js-price-from').val());
	if (min > -1) values[0] = min;
	var max = Number(p.parent().find('.js-price-to').val());
	if (max > 0) values[1] = max;
	
	$b.find(".price-chose1__slide").slider({
		range: true,
		min: 0,
		max: 20000,
		step: 1,
		values: values,
		slide: function( event, ui ) {
			$('.price-chose1__title input').eq(0).val(ui.values[0]);
			$('.price-chose1__title input').eq(1).val(ui.values[1]);
			$('body').find('.js-form-filter').find('input[name="prices"]').val(ui.values[0]+";"+ui.values[1]);
			
		}, 
		stop: function( event, ui ) {
			 filter_send();
		}
	});
	$b.find('.price-chose1__title input').eq(0).val($b.find(".price-chose1__slide").slider("values",0));
	$b.find('.price-chose1__title input').eq(1).val($b.find(".price-chose1__slide").slider("values",1));
	$b.find('.price-chose1__title input').eq(0).keyup(function() {
		$b.find(".price-chose1__slide").slider("values",0,parseInt($(this).val()));
	});
	$b.find('.price-chose1__title input').eq(1).keyup(function() {
		$b.find(".price-chose1__slide").slider("values",1,parseInt($(this).val()));
	});
	$b.find('.filter-block').find('.check1 input,.check2 input,.check-list1 input,.check3 input, select').styler();
	
	$b.find('.filter-block .filter-block-multi').each(function() {
		var filter_block = $(this);
		
		if(filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked').length > 0){
			var items = [];
			console.log(filter_block.get(0), filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked'));
			filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked').each(function() {
				items.push($(this).parent().find('.label span').text().trim());
			});
			if(items.length > 0) {
				filter_block.find('.bcaption').text(items.join(', ')).addClass('active');
			}
			console.log(items);
		} else {
			filter_block.find('.bcaption').removeClass('active');
		}
	});
	$b.find('.filter-block .carousel-chose1').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    slidesToShow: 4,
	    infinite: false,
		responsive: [
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 2
			}
		}
		]
	});

}
window.filter_sended = false;
function filter_send(){	
		if(window.filter_sended) return;
		var f = $('body').find('.js-form-filter');
		f.find('.js-result-filter').hide();
		if(f.length > 0) {
			window.filter_sended = true;
			// var data = new FormData(f[0]);
			var data = f.serialize();
			console.log(data);
			$.ajax({
				url: '/ajax/get_products_count.php',
				data: data,
				type: "POST",
				success: function(response){
					window.filter_sended = false;
					if(response.count > 0)
						f.find('.js-result-filter').attr('href', response.url).show();
				},
				fail: function(){
					f.find('.js-result-filter').show();
					window.filter_sended = false;
				}
			});
		}
}
function reviews_init(){
	$('body').find('.carousel-review1').slick({
	    prevArrow:'<div class="prev"><span></span></div>',
	    nextArrow:'<div class="next"><span></span></div>',
	    adaptiveHeight: true,
	    slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1,
				fade: true,
				dots: true
			}
		}
		]
	});
}
function actions_init() {
	$('body').find('.carousel1').slick({
	    prevArrow:'<div class="prev"><span></span></div>',
	    nextArrow:'<div class="next"><span></span></div>',
	    adaptiveHeight: true,
	    slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}
		]
	});
}
function brands_init() {	
	$('body').find('.carousel-brand1').slick({
	    prevArrow:'<div class="prev"><span></span></div>',
	    nextArrow:'<div class="next"><span></span></div>',
	    adaptiveHeight: true,
	    slidesToShow: 4,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
}
function collections_init() {
	$('body').find('.carousel2').slick({
	    prevArrow:'<div class="prev"><span></span></div>',
	    nextArrow:'<div class="next"><span></span></div>',
	    adaptiveHeight: true,
	    slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1,
				dots: true,
				fade: true
			}
		}
		]
	});
}
function projects_init() {
	$('body').find('.carousel3').slick({
	    prevArrow:'<div class="prev"><span></span></div>',
	    nextArrow:'<div class="next"><span></span></div>',
	    adaptiveHeight: true,
	    slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1,
				fade: true,
				dots: true
			}
		}
		]
	});
}
function myLoad(t) {
	var d = { 
		target: t.attr('data-target'),
	}
	if(typeof t.attr('data-params') != 'undefined'){
		try {
			d.params = t.attr('data-params');
		} catch (er){
			console.log(er);
		}
	}
	if(typeof t.attr('data-success') != 'undefined'){
		try {
			d.after_load = t.attr('data-success')
		} catch (er){
			console.log(er);
		}
	}
	
	$.post('/ajax/section.php?target=' + d.target, d).done(function(data){
		if(typeof data.target != 'undefined'){
			$('body').find('.aload[data-target="' + data.target + '"]').html(data.html).removeClass('aload-hide');
			
			if(typeof data.after_load != 'undefined'){
				eval("(" + data.after_load + ")");
			}
		}
	}).fail(function(){
		
	});	
}
window.load_stack = [];
$(document).ready(function() {
	
	
	$('body').on("click", ".js-favourite", function() {	
		if ($(this).attr("wait") !== "" && typeof $(this).attr("wait") !== "undefined") {
			return false;	
		}	
		try {		
			var th = this;		
			var prod_id = $(this).closest('[data-product]').attr("data-product");		
			var collection_id = $(this).closest('[data-collection-id]').attr("data-collection-id");	
			var project_id = $(this).closest('[data-project-id]').attr("data-project-id");	
			var id = 0;		
			var type = 0;	
			if(prod_id > 0){	
				id = prod_id;		
			}		
			if(collection_id > 0){		
				id = collection_id;	 		
				type = 1;		
			}		
			if(project_id > 0){		
				id = project_id;			
				type = 2;		
			}
			if (id > 0) {
				$(th).attr("wait", 1);
				$.post("/ajax/update_favourites.php", {
					id: id,
					type: type,
				}).done(function(data) {
					$(th).attr("wait", "");
					if (data.res === 1) {
						$(th).addClass("active");
						$(th).find('.js-favourite').text('Уже в избранном');
					} else {
						$(th).find('.js-favourite').text('Добавить в избранное');
						$(th).removeClass("active");
						if ($(th).hasClass("js-remove-favourites")) {	
							$(th).closest("article").remove();			
						}
					}			
					if (typeof data.all !== "undefined") {
						$("body").find('a[href*="/favourites"] span').html(Number(data.all));					
						if (data.all > 0) {
						$("body").find(".favourites-nav").show();				
					} else {
						$("body").find(".favourites-nav").hide();			
					}			
				}			
				}).fail(function(e) {
					console.log("error favourite send", e);
				});
			}
		} catch (e) {
			console.log(e);	
		}	
		return false;
	}).on('click', '[data-related-tag]',function(){
		var t = $(this);
		var tag = t.attr('data-related-tag');
		t.closest('.aload').attr('data-tag', tag).find('.nav-tab2__item').removeClass('active');
		t.addClass('active');
		
		
		return false;
	});

	
	
	
	$('body').on('submit', '.js-to-cart', function(){
		var d = $(this).serialize();
		$.ajax({
			url: "/ajax/cart.php",
			data: d,
			dataType: 'json',
			type: 'POST',
			success: function(data){
				var s = $('body').find('[data-popup="popup-cart-success.html"]');
				if(s.length < 1){
					$('body').append('<a data-popup="popup-cart-success.html" style="display:none"></a>');
					s = $('body').find('[data-popup="popup-cart-success.html"]');
				}
				s.click();
				$('body').find('.aload[data-target*="auth"]').each(function(){
					myLoad($(this));
				});
				//if(link.attr('added_text'))
				//	link.html(link.attr('added_text'));
				//link.attr('href', '/cart');
				try {
					ym(86859262,'reachGoal','add_cart')
				} catch(er) {
					console.log(er);
				}
			}
		});
		
		return false;
	});
	$('body').on('click', '[data-popup]', function(e){
		e.preventDefault();
		var th = $(this); 
		console.log($(this).attr('data-popup'));
		showModal($(this).attr('data-popup'), th);
		return false;
	});
	function showModal(url, th){
		if(typeof th == 'undefined') th = $('<div/>');
		
		$.get(url, {fancybox: true}).done(function(html){
			var ob = $(html);
			$('body').find('.modal-up').remove();
			ob.appendTo($('body'));
			ob.find(".mask").mask("9 (999) 999-99-99");
			if($(th).attr('data-items') != 'undefined' && $(th).attr('data-items') != ''){
				var f = $($(th).attr('data-items'));
				if(f.length > 0) {
					var js = {};
					f.find('[name]').each(function(){
						js[$(this).attr('name')] = $(this).val();
					});
					
					var d = $('<input type="hidden" name="data" value="">');
					d.val(JSON.stringify(js));
					d.appendTo(ob.find('form'));
				}
			}
			ob.find('.check1 input,.check2 input,.check-list1 input,.check3 input').styler();
			scrolljs(0);
			ob.fadeIn(300);
			modalress();
			
			return ;
			
			if(th.attr('data-url') == 'popup-review.html'){
				if(typeof id != 'undefined') {
					$(t.current.$content).find('form').append('<input type=hidden name="brand_id" value="' + id + '">');
					var img = $b.find('.bank-header__img').attr('data-src');
					if(typeof img != 'undefined'){
						$(t.current.$content).find('.form__img').attr('src', img);
					}
				} else {
					if(typeof bank_target != 'undefined') {
						$(t.current.$content).find('form').append('<input type=hidden name="brand_id" value="' + $b.find(bank_target).val() + '">');
						var img = $b.find(bank_target).find('option:selected').attr('data-img');
						if(typeof img != 'undefined'){
							$(t.current.$content).find('.form__img').attr('src', img);
						}
					}
				}
				return;
			}
			
			
			console.log(t.current.$content);
			var p = th.closest('.product');
			if(p.length > 0){
				var items=[];
				items.push(p.find('.product__title').text());
				if(typeof id != 'undefined') {
					$(t.current.$content).find('form').append('<input type=hidden name="product_id" value="' + id + '">');						
				}
				
			}
			
			
			
		});
	}
	$('body').find('.aload.aload-hide').each(function(){
		var t = $(this);
		if(t.attr('data-load') == 'scroll'){
			window.load_stack.push(function(){				
				myLoad(t);
			});
		} else {
			myLoad(t);
		}
			
	});
	if($('.mask').length>0) {
		$(".mask").mask("9 (999) 999-99-99");
	}
	$('.cart-add-form-modal1 select,.check1 input,.filter-block1__list1 select,.carousel-chose1__label input,.title-text2__right select,.button-mobile1__right select,.chose-count1__list-item select,.check2 input,.list-cart-add1__content-left select,.list-radio1 input,.check3 input').each(function(){
		var ops = {}
		
		$(this).styler(ops);
	})
	/*
	$('html').on('click', 'body.js-block-opened', function(e){
		e.preventDefault();
		var t = $(e.target);
		var b = t.closest('.filter-block-multi');
		console.log('t 1', e.target);
		if(b.length < 0){
			console.log('t 1');
			hide_blocks_filter();
		} else {
			console.log('t 2.1 ', b.find('.block-button').length);
			if(b.find('.block-button:checked').length < 1) {
				console.log('t 2.2', b.find('.block-button').length);
				hide_blocks_filter();
			}
		}
		return true;
	});
	/**/
	$('body').on('change', '.filter-block-multi .block-button', function(){
		if($(this).prop('checked')){
			$('body').addClass('js-block-opened');
			$(this).closest('.filter-block1__list1-item').siblings('.filter-block1__list1-item').find('.filter-block-multi .block-button').prop('checked',false);
		} else {
			$('body').removeClass('js-block-opened');
		}
	}).on('change', '.block-multi-item input', function(){
		var filter_block = $(this).closest('.filter-block-multi');
		console.log(filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked'));
		if(filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked').length > 0){
			var items = [];
			filter_block.find('input[name*=blocks]:checked, input[name*=sizes]:checked').each(function(){
				items.push($(this).parent().find('.label span').text().trim());
			});
			if(items.length > 0) {
				filter_block.find('.bcaption').text(items.join(', ')).addClass('active');
			}
		} else {
			filter_block.find('.bcaption').removeClass('active');
		}
		filter_send();
	}).on('change', '.filter-block1__right input[name*=blocks], .filter-block1__right input[name*=sizes]:checked', function(){
		filter_send();
	});

	function ress() {
		$('.block-slider1__background-slider-item').height($('.block-slider1').innerHeight());
	}
	ress();
	$(window).resize(function() {
		ress();
	});
	$(window).load(function() {
		ress();
	});

	$('.submit span').click(function() {
		$(this).parent().find('input').click();
	});

	$('.block-slider1__background-slider').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    fade: true,
	    asNavFor: '.block-slider1__slider-text',
	    focusOnSelect: true
	});
	$('.block-slider1__slider-text').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    fade: true,
	    asNavFor: '.block-slider1__background-slider',
	    focusOnSelect: true,
	    dots: true
	});
	
	$('body').on('click','.up1',function() {
		$('body,html').animate({scrollTop:'0px'}, 300);
	});

	$('body').on('click','.drop-catalog1__current',function() {
		$(this).parent().toggleClass('active');
	});
	$(document).click(function(e){
	    if ($(e.target).closest(".drop-catalog1").length) return;
		$('.drop-catalog1').removeClass('active');
	    e.stopPropagation();
	});

	function modalress() {
		$('.modal-up__vertical').width($(window).width()).height($(window).height());
	}
	modalress();
	$(window).resize(function() {
		modalress();
	});
	$(window).load(function() {
		modalress();
	});
	var scrl1;
	var modalUp=0;
	function scrolljs(e) {
		if(e==0) {
			scrl1=$(window).scrollTop();
			if($(window).width()<1001) {
				$('body').css({'position':'fixed','top':-scrl1});
			}
			modalUp=1;
		}
		if(e==1) {
			$('body').css({'position':'static','top':'0px'});
			if($(window).width()<1001) {
				$(window).scrollTop(scrl1);
			}
			$('.modal-up').fadeOut(300);
			modalUp=0;
		}
	}
	$('*[data-modal]').click(function(e) {
		e.preventDefault();
		scrolljs(0);
		$('.'+$(this).attr('data-modal')).fadeIn(300);
		if($(this).attr('data-modal')=='modal1') {
			startSliderModal1()
		}
	});
	$('body').on('click','.modal-up__close,.modal-up__close2',function() {
		scrolljs(1);
	});
	$(document).click(function(e){
	    if ($(e.target).closest(".modal-up__content,.modal-up__content2,*[data-modal],.filter-block1,.button-mobile1__filter").length) return;
	    if(modalUp==1) {
	    	scrolljs(1);
	    }
	    e.stopPropagation();
	});

	var flag1=0;
	function startSliderModal1() {
		if(flag1==0) {
			flag1=1;
			$('.slider-collection1__top').slick({
			    prevArrow:'<div class="prev"></div>',
			    nextArrow:'<div class="next"></div>',
			    adaptiveHeight: true,
			    fade: true,
			    asNavFor: '.slider-collection1__nav',
			    focusOnSelect: true,
			    dots: true
			});
			$('.slider-collection1__nav').slick({
			    prevArrow:'<div class="prev"></div>',
			    nextArrow:'<div class="next"></div>',
			    adaptiveHeight: true,
			    slidesToShow: 3,
			    asNavFor: '.slider-collection1__top',
			    focusOnSelect: true
			});
		}
	}

	$('body').on('click', '.count-js1 span:last-child', function() {
		var inp = $(this).parent().parent().find('input');
		var sel = '.list-cart-add1__item';
		if($(this).closest(sel).length < 1) sel = 'form';
		console.log(sel);
		
		var step = 1;
		var unit = inp.closest(sel).find('[name*=unit]').val();
		if(unit != 'шт' && inp.attr('data-step') > 0) step = Number(inp.attr('data-step'));
		console.log(unit, step);
		var val= Number($(this).parent().parent().find('input').val())+step;
		
		val = val.toFixed(step == 1 ? 0 : 3);
		
		change_amount($(this).parent().parent().find('input').val(val).change());
	});
	$('body').on('click', '.count-js1 span:first-child', function() {
		var inp = $(this).parent().parent().find('input');
		var sel = '.list-cart-add1__item';
		if($(this).closest(sel).length < 1) sel = 'form';
		console.log(sel);
		var step = 1;
		var unit = inp.closest(sel).find('[name*=unit]').val();
		if(unit != 'шт' && inp.attr('data-step') > 0) step = Number(inp.attr('data-step'));
		
		console.log(unit, step);
		if(Number($(this).parent().parent().find('input').val())>step) {
			var val= Number($(this).parent().parent().find('input').val())-step;
			if(val < step) val = step;
			val = val.toFixed(step == 1 ? 0 : 3);
			$(this).parent().parent().find('input').val(val).change();
		}
	});
	$('body').on('keydown','.count-js1 input', function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	         (e.keyCode == 65 && e.ctrlKey === true) ||
	         (e.keyCode >= 35 && e.keyCode <= 39)) {
	         return;
	    }
	    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	    	e.preventDefault();
	    }
		$(this).change();
	});

	$('.content-over1__gallery-js').html($('.content-over1__gallery').clone());
	$('.mobile-menu1__over').html($('.header .menu1').clone());

	$('.mobile-header1__search').click(function() {
		$(this).toggleClass('active');
		$('.search-mobile1-over').toggleClass('active');
		if($('.search-mobile1-over.active').length>0) {
			$('.search-mobile1-over input[type=text]').focus();
		}

		$('.mobile-menu1,.menu-button1').removeClass('active');
	});
	$(document).click(function(e){
	    if ($(e.target).closest(".mobile-header1__search,.search-mobile1-over").length) return;
		$('.mobile-header1__search,.search-mobile1-over').removeClass('active');
	    e.stopPropagation();
	});
	if($(window).width()<761) {
		$('.menu1__link.sub').click(function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('active');
		});
	}

	$('.menu-button1').click(function() {
		$(this).toggleClass('active');
		$('.mobile-menu1').toggleClass('active');

		$('.mobile-header1__search,.search-mobile1-over').removeClass('active');
	});
	$('.mobile-menu1__close').click(function() {
		$('.mobile-menu1,.menu-button1').removeClass('active');
	});

	$(window).scroll(function() {
		if($(this).scrollTop()>240) {
			$('.scroll-header1').addClass('active');
		}
		else {
			$('.scroll-header1').removeClass('active');
		}
		for(var i in window.load_stack){
			if (typeof window.load_stack[i] == 'function')
				window.load_stack[i]();
			delete window.load_stack[i];
		}
	});

	$('body').on('click','.nav-tab1__item', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.content-tab1__item').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});

	$('.select-nav-link1__current').click(function() {
		$(this).parent().toggleClass('active');
	});
	$(document).click(function(e){
	    if ($(e.target).closest(".select-nav-link1").length) return;
		$('.select-nav-link1').removeClass('active');
	    e.stopPropagation();
	});

	$('.contact-information1__callback').click(function() {
		if($(this).attr('data-dt')=='0') {
			$(this).attr('data-dt','1').addClass('active');
			$('.hide-form1').slideDown(200);
		}
		else {
			$(this).attr('data-dt','0').removeClass('active');
			$('.hide-form1').slideUp(200);
		}
	});

	
	$('.popular-queries1-js').html($('.popular-queries1__list').clone());
	$(".content1").mCustomScrollbar({
	    axis:"x"
	});

	$('body').on('click','.button-mobile1__filter', function() {
		$('.filter-block1').addClass('active');
		scrolljs(0);
	});
	$('body').on('click','.filter-block1__close',function() {
		$('.filter-block1').removeClass('active');
		scrolljs(1);
	});

	$('.slider-collection2__top').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    fade: true,
	    asNavFor: '.slider-collection2__nav',
	    focusOnSelect: true,
		responsive: [
		{
			breakpoint: 761,
			settings: {
				dots: true
			}
		}
		]
	});
	$('.slider-collection2__nav').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    slidesToShow: 4,
	    asNavFor: '.slider-collection2__top',
	    focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 3
			}
		}
		]
	});
	$('.main-text3__show-more').click(function() {
		$(this).parent().parent().toggleClass('active');
	});
	$('.list-project1-js').html($('.list-project1').html());
	$('.list-project1-js').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    dots: true,
	    fade: true
	});

	$('.list-collection1-js').html($('.list-collection1').html());
	$('.list-collection1-js').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    dots: true,
	    fade: true
	});

	$('.carousel4').slick({
	    prevArrow:'<div class="prev"></div>',
	    nextArrow:'<div class="next"></div>',
	    adaptiveHeight: true,
	    slidesToShow: 5,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 761,
			settings: {
				slidesToShow: 1,
				fade: true
			}
		}
		]
	});
	
	$('body').on('change', '.filter-block [name="sort"]', function(){
		var url = $(this).val();
		location.href=url;
	});
	$('body').on('submit', '.js-order-form', function(){
		var f = $(this);
		var fz = f.find('input[name="privacy"]');
		
		if(fz.length > 0 && !fz.prop('checked')){
			fz.parent().css('color','red');
			setTimeout(function(){
				fz.parent().removeAttr('style');				
			},1500);
			return false;
		}
		var data = new FormData(this);
		
		var name = f.find('input[name="name"]').val();
		if(typeof name == 'undefined'){
			name = '';
		} else {
			name = name.trim();
			if(name == ''){
				f.find('input[name="name"]').focus();
				return false;
			}
		}
		var tel = f.find('input[name="phone"]').val().trim();
		
		if(tel == ''){
			f.find('input[name="phone"]').focus();
			return false;
		}
		if(f.prop('send')) return false;
		f.prop('send', true);
		var title = f.find('input[name=title]').val();
		if(typeof title == 'undefined'){
			title = f.closest('.popup').find('.popup__title').text();
			if(typeof title == 'undefined'){
				title = "Заказ звонка°";
			}
		}
		
		data.append('title', title);
		data.append('ajax', 1);
		$.ajax({
			url: "/ajax/mail.php",
			type: "POST",
			data: data,
			cache: !1,
			contentType: !1,
			processData: !1
		}).done(function (e) {
			try { gtag('event', 'Otpravka', {'event_category': 'Form'}); } catch(er) { };
			f[0].reset();
			showModal('popup-success.html');
			setTimeout(function() { $('body').find('.modal-up').remove(); }, 3500);
			try {
				ym(86859262,'reachGoal','order')
			} catch(er) {
				console.log(er);
			}
		}).fail(function (err) {			
			f.prop('send', false);
		});
		return false;
	}).on('submit', '.js-set-comment', function () {
		var th = $(this);
		if (th.prop('send')) {
			return !1
		}
		th.prop('send', !0);
		var e = new FormData(this);
		e.append("ajax", 1);
		$.ajax({
			url: '/ajax/save_comment.php',
			type: "POST",
			data: e,
			cache: !1,
			contentType: !1,
			processData: !1
		}).done(function (e) {
			th[0].reset();
			showModal('popup-review-success.html');
		}).fail(function () {
			th.prop('send', !1)
		});
		return !1
	});
	if(typeof page_init == 'function'){
		console.log( 'page_init() ');
		page_init();
	}
	function change_amount(t) {
		var f = t.closest('form');
		
		var amount = f.find('[name=amount]');
		var unit = f.find('[name=unit]');
		var fast = $('[data-popup*="popup-request.html"]');
		
		
		var k = 1;
		if(amount.attr('data-unit') != unit.val() && amount.attr('data-k') > 0){
			
			k = parseFloat(amount.attr('data-k'));
			
		}
		var price = k * amount.attr('data-price') * amount.val();
		console.log(price, k, amount.attr('data-price'), amount.val(), unit.val(), amount.attr('data-unit'));
		if (price > 0){
			var fi = 2;
			if(unit.val() == 'шт'){
				fi = 0;	
			}
			f.find('.js-full-price, .cart-add-form-modal1__title3 span').html(new Intl.NumberFormat({ maximumSignificantDigits: 0 }).format(price.toFixed(fi)) + ' руб.');
		}

	}

	$('body').on('change', '.modal5 [name="amount"],.modal5  [name=unit]', function(){
		change_amount($(this));
	});
	$('body').on('change', 'select[name*=unit]', function(e){
		e.preventDefault();
		var sel = '.list-cart-add1__item';
		if($(this).closest(sel).length < 1) sel = 'form';
		
		var amount =  $(this).closest(sel).find('[name*=amount]');
		if($(this).val() == 'шт') {
			var a = Math.floor(amount.val() / amount.attr('data-k'));
			if (a > 0 && a !== Infinity)
				amount.val(a);
		} else {
			var a = amount.val() * amount.attr('data-k');
			if(a < amount.attr('data-step')) a = Number(amount.attr('data-step'));
			if (a > 0 && a !== Infinity) {
				amount.val(a.toFixed(3));
			}
			 
		}
		if (a > 0 && a !== Infinity) {
			amount.change();
		}
	});
	
	
});







