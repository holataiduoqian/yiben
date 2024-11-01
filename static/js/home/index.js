"use strict"; !
function(i, e) {
    i(document).ready(function() {
        function e(e) {
            var n = {};
            e.serializeArray().forEach(function(i) {
                n[i.name] = i.value
            });
            n.ip = returnCitySN.cip;
            for (var o in n) if (!n[o]) return void notie.alert({
                type: "warning",
                text: "所有字段都要填喔~"
            });
            console.log(n);
            /^1[34578]\d{9}$/.test(n.phone) ? i.ajax({
                type: "post",
                data: n,
                url: "/e/DoInfo/ecms.php",
                success: function() {
                    notie.alert({
                        type: "success",
                        text: "提交成功，客服稍后会联系您"
                    })
                },
                error: function() {
                    notie.alert({
                        type: "error",
                        text: "系统忙，请稍后再试..."
                    })
                }
            }) : notie.alert({
                type: "error",
                text: "手机号码格式不正确"
            })
        }
        var n = i(".nav-first").find(">li"),
        o = i(".nav-second").find(">li");
        n.each(function(e, n) { (n = i(n)).hasClass("home-nav") || n.hover(function() {
                i(this).find(".nav-second").show()
            },
            function() {
                i(this).find(".nav-second").hide()
            })
        }),
        o.each(function(e, n) { (n = i(n)).hover(function() {
                i(this).find(".nav-third").show()
            },
            function() {
                i(this).find(".nav-third").hide()
            })
        });
        new Swiper(".people-main", {
            slidesPerView: "auto",
            observer: !0,
            observeParents: !0,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev"
        }),
        new Swiper(".school-container", {
            slidesPerView: "auto",
            observer: !0,
            observeParents: !0,
            stretch: 10,
            loop: !0,
            sliderMove: function(i) {
                console.log(i)
            }
        }),
        new Swiper(".swiper-banner", {
            slidesPerView: "auto",
			loop: true,
			autoplay : 5000,
			autoplayDisableOnInteraction : false,
            speed: 500,
            nextButton: ".swiper-banner-next",
            prevButton: ".swiper-banner-prev"
        });
        i(function() {
            var e = 0,
            n = 0;
            i(".main-div ul li").mouseover(function() {
                e = i(this).index(),
                i(this).stop().animate({
                    width: 1020
                },
                600).siblings(".main-div ul li").stop().animate({
                    width: 85
                },
                600),
                n !== e && (i(".accordion-img").eq(n).removeClass("accordion-slide"), i(".accordion-img").eq(e).addClass("accordion-slide")),
                n = e
            }),
            i(".main-div ul li").mouseout(function() {
                i(".main-div ul li").eq(0).stop().animate({
                    width: 1020
                },
                600).siblings(".main-div ul li").stop().animate({
                    width: 85
                },
                600),
                i(".accordion-img").eq(n).removeClass("accordion-slide"),
                i(".accordion-img").eq(0).addClass("accordion-slide"),
                n = 0,
                e = 0
            })
        }),
        i(function() {
            var i, e = 0,
            n = document.getElementById("dock");
            window.addEventListener("scroll",
            function(o) {
                i = window.scrollY,
                4200 > i && i > 651 ? n.classList.add("dockVisible") : n.classList.remove("dockVisible"),
                e = i
            })
        }),
       
        i(".receiveBtn").on("click",
        function() {
            e(i("#top-form"))
        })
    })
} (jQuery);
