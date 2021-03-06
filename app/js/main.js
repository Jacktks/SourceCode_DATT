
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }


    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0);
    }
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop());
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0);
        }
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop());
        }
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });

        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    // s


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });

    });

    // init Isotope
    var $grid;
    // $(window).on('load', function () {
    //     $grid = $topeContainer.each(function () {
    //         $(this).isotope({
    //             itemSelector: '.isotope-item',
    //             layoutMode: 'fitRows',
    //             percentPosition: true,
    //             animationEngine : 'best-available',
    //             masonry: {
    //                 columnWidth: '.isotope-item'
    //             }
    //         });
    //     });
    // });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });

    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        var idPro = $(this).data('id');

        $.post("pre-view-product.php", {id_pro: idPro}, function(data){
            $('.js-modal1').html(data);
            $('.js-modal1').addClass('show-modal12');
            $('.js-hide-modal1').on('click',function(){
                $('.js-modal1').html("");
                $('.js-modal1').removeClass('show-modal12');
            });
        });
    });

    $('.load-more').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        var numbCurrent = Number($('#numbRow').val());
        var numbAll = Number($('#numbAll').val());
        var numLimit = 4;
        // alert(numbCurrent + ' - '+ numbAll);
        if(numbCurrent < numbAll){
            $.ajax({
                url: 'get-data.php',
                type: 'POST',
                data: {numCurrent: numbCurrent},
                beforeSend:function(){
                    $('.load-more').css('background-color', '#b8dff7');
                    $('.load-more').text('Loading ...');
                },
                success: function(response){
                    setTimeout(function(){
                        $('.isotope-grid').append(response);
                        if(numbCurrent + numLimit >= numbAll){
                        $('.load-more').hide('fast');
                        }else{
                            $('.load-more').css('background-color', '#e6e6e6');
                            $('.load-more').text('Load more').show().fadeIn('fast');

                            $('.js-show-modal1').on('click',function(e){
                                e.preventDefault();
                                var idPro = $(this).data('id');

                                $.post("pre-view-product.php", {id_pro: idPro}, function(data){
                                    $('.js-modal1').html(data);
                                    $('.js-modal1').addClass('show-modal12');
                                    $('.js-hide-modal1').on('click',function(){
                                        $('.js-modal1').html("");
                                        $('.js-modal1').removeClass('show-modal12');
                                    });
                                });
                            });
                        }
                    }, 500);
                    $('#numbRow').val(numbCurrent + numLimit);

                }
            });
        }else{
            $('.load-more').hide('fast');
        }


    });
    var filter_links = $('.filter-link');
    $(filter_links).each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            for(var i=0; i < filter_links.length; i++){
                $(filter_links[i]).removeClass('filter-link-active');
            }
            $(this).addClass('filter-link-active');
            var type = $(this).data('type');
            $.ajax({
                url: 'filter-product.php',
                type: 'POST',
                data: {type_filter: type},
                success: function (data) {
                    $('.isotope-grid').html(data).show().fadeIn('slow');
                    $('.js-show-modal1').on('click',function(e){
                        e.preventDefault();
                        var idPro = $(this).data('id');
                        $.post("pre-view-product.php", {id_pro: idPro}, function(data){
                            $('.js-modal1').html(data);
                            $('.js-modal1').addClass('show-modal12');
                            $('.js-hide-modal1').on('click',function(){
                                $('.js-modal1').html("");
                                $('.js-modal1').removeClass('show-modal12');
                            });
                        });
                    });
                }
            });
        });
    });

    //add class active-menu wwhen select item
    var menu_items = $('.main-menu li');
    $(menu_items).each(function() {
        $(this).on('click', function(event) {
            //event.preventDefault();
            for(var i=0;i<menu_items.length;i++){
                $(menu_items[i]).removeClass('active-menu');
            }
            $(this).addClass('active-menu');
        });
    });


    function searchByName(name){
      $.ajax({
          url: 'search-product.php?search_name='+ name,
          type: 'POST',
          data: {search_name: name},
          success: function(result){
            $('.isotope-grid').html(result).show().fadeIn('slow');
            $('.js-show-modal1').on('click',function(e){
                e.preventDefault();
                var idPro = $(this).data('id');
                $.post("pre-view-product.php", {id_pro: idPro}, function(result){
                    $('.js-modal1').html(data);
                    $('.js-modal1').addClass('show-modal12');
                    $('.js-hide-modal1').on('click',function(){
                        $('.js-modal1').html("");
                        $('.js-modal1').removeClass('show-modal12');
                    });
                });
            });
          }
      });
    }

    // load order-item
    $('.show-order-items').each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var id_order = $(this).attr('data-id');
            $.ajax({
                url: 'show-order-items.php',
                type: 'POST',
                data: {id_order: id_order},
                success: function function_name(data) {
                    // body...
                    // console.log(data);
                    $('.list-order-items').html(data);
                }
            })
        });
    });

})(jQuery);
