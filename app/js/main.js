$(function() {

    var e = $("#services"),
        t = 0,
        a = $(document).scrollTop(),
        s = $(".services-menu .list-group"),
        i = 0,
        r = $("body > header");
        
    $.ajax({
        url: "templates/services.html",
        type: "GET",
        success: function(t) {
            e.html(t), $("h2, h3", e).each(function(e) {
                s.append('<a href="" data-id="service-' + e + '" class="list-group-item ' + $(this).prop("tagName") + '">' + $(this).text() + "</a>"), $(this).prop("id", "service-" + e)
            })
        }
    });

    $("body").on("click", ".services-menu .list-group a", function(e) {
        e.preventDefault();
        var t = $(this).data("id").replace("#", ""),
            a = $("html, body");
        a.animate({
            scrollTop: $("#" + t).offset().top - r.innerHeight() - 20
        }, "300", "swing")
    });

    $("#services > div"), $(window).scroll(function() {
        a = $(document).scrollTop(), t = e.innerHeight(), i = s.innerHeight(), i > t - a ? s.addClass("active") : s.removeClass("active")
    });

    $(".ask-question").click(function(e) {
        e.preventDefault(), $("#ask-question").modal("show")
    });

    $(".link-contacts").click(function(e) {
        e.preventDefault();
        var t = $("html, body");
        t.animate({
            scrollTop: $("#contacts").offset().top
        }, "300", "swing")
    });

    DG.then(function() {
        var e, t = {
                latitude: 55.813557,
                longitude: 52.53881
            },
            a = 15,
            s = "http://2gis.ru/nabchelny/routeSearch/center/52.477226%2C55.795057/zoom/13/routeTab/rsType/car/from/52.443634%2C55.762493%E2%95%8E26-%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81/to/52.538885%2C55.81349%E2%95%8E%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F%20%D0%A8%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%2C%20%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%20%28%D0%9C%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0%29%2C%20%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C/waypoints/52.520442%2055.811893",
            i = '<header class="dg-popup__header"><div class="dg-popup__header-title">Маленькая страна, управляющая компания</div></header><address class="dg-firm-card__address dg-firm-card__icon">Счастливая (Маленькая страна), дом 21<br><a href="' + s + '" target="_blank">проложить маршрут</a></address><div class="dg-firm-card__phone dg-firm-card__icon"><span class="dg-firm-card__phone-num">+7 (927) 241-01-80<span class="dg-firm-card__comment" title="Александр Зубков, директор">—&nbsp;&nbsp;Александр Зубков, директор</span></span></div><div class="dg-firm-card__link dg-firm-card__site dg-firm-card__icon"><a href="http://uk-europoselok.ru" target="_blank" class="dg-link_scheme_dark dg-firm-card__sitelink">www.uk-europoselok.ru</a></div>';
        e = DG.map("map", {
            center: [t.latitude, t.longitude],
            zoom: a,
            geoclicker: !0,
            scrollWheelZoom: !1
        }), popup = DG.popup({
            maxWidth: 385,
            sprawling: !0
        }).setLatLng([t.latitude, t.longitude]).setContent(i).openOn(e)
    })
});