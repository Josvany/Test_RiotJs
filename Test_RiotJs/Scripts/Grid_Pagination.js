function Grid_boton(a) {
    a =
        {
            contenido: void 0 !== a.contenido ? a.contenido : "",
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "",
            attr: void 0 !== a.attr ? a.attr : [],
            type: void 0 !== a.type ? a.type : "button",
            value: void 0 !== a.value ? a.value : ""
        };
    var t = "";

    return $.each(a.attr, function (a, n) {
        t += n
    }),
        a.attr = t,
        '<button type="' + a.type + '" style="' + a.style + '" class="btn ' + a["class"] + '" value="' + a.value + '" ' + a.attr + ">" + a.contenido + "</button>"
}

function Grid_link(a) {
    a =
        {
            contenido: void 0 !== a.contenido ? a.contenido : "",
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "", attr: void 0 !== a.attr ? a.attr : [],
            href: void 0 !== a.href ? a.href : "_self",
            target: void 0 !== a.target ? a.target : ""
        };
    var t = "";
    return $.each(a.attr, function (a, n) {
        t += n
    }),
        a.attr = t,
        '<a href="' + a.href + '" target="' + a.target + '" class="' + a["class"] + '" ' + a.attr + ">" + a.contenido + "</a>"
}

function Grid_dropdown(a) {
    a =
        {
            contenido: void 0 !== a.contenido ? a.contenido : "",
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "",
            attr: void 0 !== a.attr ? a.attr : [],
            id: void 0 !== a.id ? a.id : "",
            data: void 0 !== a.data ? a.data : []
        };
    var t = "";
    $.each(a.attr, function (a, n) {
        t += n
    }), a.attr = t;
    var n = '<button id="' + a.id + '" style="' + a.style + '" class="btn ' + a["class"] + '" type="button" ' + a.attr + ' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + a.contenido + ' <span class="caret"></span></button>',
        o = '<ul class="dropdown-menu" aria-labelledby="' + a.id + '">';
    return $.each(a.data, function (a, t) {
        o += '<li><a href="' + t.href + '">' + t.contenido + "</a></li>"
    }), o += "</ul>", '<div class="dropdown">' + n + o + "</div>"
}

function Grid_input(a) {
    a =
        {
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "",
            attr: void 0 !== a.attr ? a.attr : [],
            type: void 0 !== a.type ? a.type : "text",
            value: void 0 !== a.value ? a.value : ""
        };
    var t = "";
    return $.each(a.attr, function (a, n) {
        t += n
    }), a.attr = t,
        '<input type="' + a.type + '" style="' + a.style + '" class="form-control input-sm ' + a["class"] + '" value="' + a.value + '" ' + a.attr + " />"
}

function Grid_imagen(a) {
    a =
        {
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "",
            attr: void 0 !== a.attr ? a.attr : [],
            src: void 0 !== a.src ? a.src : ""
        };
    var t = "";
    return $.each(a.attr, function (a, n) {
        t += n
    }), a.attr = t, '<img src="' + a.src + '" class="' + a["class"] + '" style="' + a.style + '" ' + a.attr + "/>"
}

function Grid_select(a) {
    a =
        {
            "class": void 0 !== a["class"] ? a["class"] : "",
            style: void 0 !== a.style ? a.style : "",
            attr: void 0 !== a.attr ? a.attr : [],
            selected: void 0 !== a.selected ? a.selected : "",
            data: void 0 !== a.data ? a.data : []
        };
    var t = "";
    $.each(a.attr, function (a, n) {
        t += n
    }), a.attr = t;
    var n = $('<select style="' + a.style + '" class="form-control input-sm ' + a["class"] + '" ' + a.attr + "></select>");
    return $.each(a.data, function (t, o) {
        n.append("<option " + (o.valor == a.selected ? "selected" : "") + ' value="' + o.valor + '">' + o.contenido + "</option>")
    }), n
}

$.fn.ResponseGrid = function (a) {
    "use strict";
    function t() {
        var a = P.tabla.find("." + x.columnas);
        a.html("<tr></tr>"), P.filtrable && a.append('<tr class="' + x.filtro + '"></tr>'),
            $(P.columnas).each(function (a, t) {
                var n = _(r(t.style, "")),
                    o = $('<th class="' + r(t["class"], "") + '" style="' + n + '"></th>');
                if (P.columnas_ancho.push(o.css("width")),
                    t.leyenda = r(t.leyenda, ""),
                    void 0 !== t.formato ? o.html(t.formato()) : o.text(t.leyenda),
                    t.ordenable) {
                    var i = $('<a href="#" class="' + x.columna_ordenar + '" data-columna="' + r(t.columna, "") + '"></a>');
                    i.html(o.html()), o.html(i)
                }
                if (P.tabla.find("thead tr:first").append(o), P.filtrable) {
                    if (o = $("<th></th>"),
                        void 0 !== t.filtro)
                        if ("function" == typeof t.filtro) {
                            var e = $(t.filtro());
                            if (e.attr("data-columna", t.columna).removeClass("input-sm input-lg").addClass("input-sm").addClass(x.filtro_control),
                                $(e).is("input")) {
                                var l = $('<div class="input-group"><div class="' + x.filtro_control_container + '"></div><span class="input-group-btn"><button class="btn btn-default btn-sm ' + x.filtro_limpiar + '" type="button">Go!</button></span>'),
                                    s = '<i class="glyphicon glyphicon-remove"></i>';
                                l.find("." + x.filtro_control_container).html(e),
                                    l.find("." + x.filtro_limpiar).html(s), o.html(l)
                            }
                            $(e).is("select") && o.html(e)
                        }
                        else if (t.filtro) {
                            var e = $(Grid_input({}));
                            e.attr("data-columna", t.columna).removeClass("input-sm input-lg").addClass("input-sm").addClass(x.filtro_control);
                            var l = $('<div class="input-group"><div class="' + x.filtro_control_container + '"></div><span class="input-group-btn"><button title="' + y.filtro_limpiar + '" class="btn btn-default btn-sm ' + x.filtro_limpiar + '" type="button">Go!</button></span>'),
                                s = '<i class="glyphicon glyphicon-remove"></i>';
                            l.find("." + x.filtro_control_container).html(e),
                                l.find("." + x.filtro_limpiar).html(s),
                                o.html(l)
                        }
                    P.tabla.find("thead tr." + x.filtro).append(o)
                }
            })
    }
    function n() {
        0 === P.data.length && P.tabla.find("." + x.filas).html('<tr><td colspan="' + P.columnas.length + '" class="text-center">' + y.sin_registros + "</td></tr>");
        var a = P.tabla.find("." + x.filas);
        $(P.data).each(function (t, n) {
            var o = $('<tr data-fila="' + t + '" class="' + x.fila + t + '"></tr>');
            $(P.modelo).each(function (a, t) {
                var e = _(r(t.style, "")),
                    l = $('<td class="' + r(t["class"], "") + '" style="' + e + '"></td>'),
                    s = ""; void 0 !== t.propiedad && (s = t.propiedad.indexOf(".") > -1 ? i(n, t.propiedad) : n[t.propiedad]),
                        void 0 !== t.formato ? l.html(t.formato(o, n, s)) : l.text(s),
                        o.append(l)
            }), a.append(o)
        }),
            v(!1), m(!1), P.cargarPaginacion()
    }
    function o() {
        var a = P.tabla.find("." + x.paginador);
        if (d(), a.data("cargado")) h() || (a.find("." + x.paginador_paginas).text(P.paginas), a.find("." + x.paginador_registros_encontrados).html(u()), a.find("." + x.paginador_pagina_actual).val(P.pagina)), f(!1);
        else {
            if (a.html(""), h()) P.contenedor.append('<select class="form-control input-lg ' + x.paginador_responsive + '"></select>');
            else {
                var t = $('<tr class="active"></tr>');
                if (t.html('<td colspan="' + P.columnas.length + '" style="height:40px;line-height:30px;"></td>'), P.paginable) {
                    var n = "";
                    n = "number" != typeof P.limite ? '<div class="col-xs-3">' + y.registros_mostrando + ' <select style="width:80px;display:inline-block;" class="form-control input-sm ' + x.paginador_paginas_por_pagina + '">' + g() + "</select></div>" : '<div class="col-xs-3">' + y.registros_mostrando + " " + P.porPagina + " " + y.registros + "</div>";
                    var o = '<div class="col-xs-6 text-center"><i title="' + y.primera_pagina + '" style="font-size:0.8em;cursor:pointer;" class="glyphicon glyphicon-step-backward ' + x.paginador_primero + '"></i><i title="' + y.anterior_pagina + '" style="font-size:0.8em;margin-right:4px;cursor:pointer;" class="glyphicon glyphicon-backward ' + x.paginador_anterior + '"></i> ' + e(y.pagina) + ' <input class="text-center form-control input-sm ' + x.paginador_pagina_actual + '" type="text" value="' + P.pagina + '" style="width:50px;display:inline-block;" /> / <b class="' + x.paginador_paginas + '">' + P.paginas + '</b> <i title="' + y.siguiente_pagina + '" style="font-size:0.8em;margin-left:4px;cursor:pointer;" class="glyphicon glyphicon-forward ' + x.paginador_siguiente + '"></i><i title="' + y.ultima_pagina + '" style="font-size:0.8em;cursor:pointer;" class="glyphicon glyphicon-step-forward ' + x.paginador_final + '"></i></div>', i = '<div class="col-xs-3 text-right ' + x.paginador_registros_encontrados + '">' + u() + "</div>";
                    t.find("td").html('<div style="margin:0;" class="row">' + n + o + i + "</div>")
                } else t.find("td").addClass("text-center " + x.paginador_registros_encontrados).html(u())
            } a.html(t).attr("data-cargado", !0)
        } p()
    }
    function i(a, t) {
        var n = t.split(".");
        if (n.length > 1) {
            var o = "";
            return $.each(n, function (a, t) {
                a > 0 && (o += t + (n.length - 2 == a ? "." : ""))
            }), i(a[n[0]], o)
        }
        return a[n[0]]
    }
    function r(a, t) {
        return void 0 === a ? t : a
    }
    function e(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function l(a) {
        return parseInt(a) ? !0 : !1
    }
    function s(a) {
        P.filtros.length > 0 ? $.each(P.filtros, function (t, n) {
            n.columna == a.columna ? (P.filtros[t].columna = a.columna, P.filtros[t].valor = a.valor) : t == P.filtros.length - 1 && P.filtros.push(a)
        }) : P.filtros.push(a)
    }

    function c(a) {
        var t = [];
        $.each(P.filtros, function (n, o) {
            o.columna != a && t.push(o)
        }), P.filtros = t
    }
    function d() {
        P.paginas = Math.ceil(P.total / P.porPagina)
    }
    function p() {
        if (h()) {
            var a = P.contenedor.find("." + x.paginador_responsive);
            a.html("");
            for (var t = 1; t <= P.paginas; t++) {
                var n = $('<option value="' + t + '">' + t + " / " + P.paginas + "</option>");
                t === P.pagina && n.attr("selected", !0),
                    a.append(n)
            }
        }
    }
    function u() {
        return y.registro_encontrados.replace("{t}", P.total).replace("{r}", 0 == P.total || P.total > 1 ? y.registros : y.registro)
    }

    function g() {
        var a = "";
        return $.each(P.limite, function (t, n) {
            a += '<option value="' + n + '">' + n + "</option>"
        }), a
    }

    function f(a) {
        P.tabla.find("." + x.paginador_pagina_actual).attr("disabled", a),
            P.tabla.find("." + x.paginador_paginas_por_pagina).attr("disabled", a),
            P.tabla.find("." + x.paginador_primero).attr("disabled", a),
            P.tabla.find("." + x.paginador_anterior).attr("disabled", a),
            P.tabla.find("." + x.paginador_siguiente).attr("disabled", a),
            P.tabla.find("." + x.paginador_final).attr("disabled", a),
            P.contenedor.find("." + x.paginador_responsive).attr("disabled", a)
    }

    function m(a) {
        P.tabla.find("." + x.filtro_control).attr("disabled", a)
    }
    function v(a) {
        P.tabla.find("." + x.columnas + " a").attr("disabled", a)
    }
    function _(a) {
        var t = "";
        if ("object" == typeof a)
            for (var n in a) t += n + ":" + a[n] + ";";
        else t = a;
        return t
    }
    function h() {
        return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)
    }
    a.texto = void 0 !== a.texto ? a.texto : {};
    var y = {
        error_cargando: r(a.texto.error_cargando, "Ocurrio un error al cargar la data."),
        filtro_limpiar: r(a.texto.filtro_limpiar, "Retirar filtro"),
        paginas: r(a.texto.paginas, "páginas"),
        pagina: r(a.texto.pagina, "páginas"),
        primera_pagina: r(a.texto.primera_pagina, "Primera página"),
        ultima_pagina: r(a.texto.ultima_pagina, "Página final"),
        anterior_pagina: r(a.texto.anterior_pagina, "Página anterior"),
        siguiente_pagina: r(a.texto.anterior_pagina, "Página siguiente"),
        registro_encontrados: r(a.texto.anterior_pagina, "Se han encontrado {t} {r}"),
        registros: r(a.texto.registros, "registros"),
        registro: r(a.texto.registro, "registro"),
        registros_mostrando: r(a.texto.registros_mostrando, "Por página:"),
        encontrados: r(a.texto.encontrados, "encontrados"),
        sin_registros: r(a.texto.encontrados, "Sin registros que mostrar"),
        cargando: r(a.texto.cargando, ".. cargando ..")
    },
        b = "ResponseGrid-" + this.attr("id").replace("#", ""),
        x = {
            columnas: b + "-columnas",
            filas: b + "-filas",
            filtro: b + "-filtro",
            filtro_control_container: b + "-filtro-control-container",
            filtro_control: b + "-filtro-control",
            filtro_limpiar: b + "-filtro-limpiar",
            paginador: b + "-paginador",
            paginador_pagina_actual: b + "-paginador-pagina-actual",
            paginador_paginas_por_pagina: b + "-paginador-por-pagina",
            paginador_paginas: b + "-paginador-paginas",
            paginador_registros_encontrados: b + "-paginador-registros-encontrados",
            paginador_responsive: b + "-paginador-responsive",
            paginador_siguiente: b + "-paginador-siguiente",
            paginador_final: b + "-paginador-final",
            paginador_anterior: b + "-paginador-anterior",
            paginador_primero: b + "-paginador-primero",
            columna_ordenar: b + "-columna-ordenar",
            columna_ordenar_control: b + "-columna-ordenar-control",
            fila: b + "-fila-"
        },
        P = {
            "class": r(a["class"], ""),
            style: r(a.style, ""),
            columnas: a.columnas,
            columnas_ancho: [],
            modelo: a.modelo,
            url: a.url, type: r(a.type, "POST"),
            dataType: r(a.dataType, "JSON"),
            data: [],
            parametros: r(a.parametros, {}),
            columna: a.columna,
            columna_orden: a.columna_orden,
            columna_defecto: a.columna,
            columna_defecto_orden: a.columna_orden,
            pagina: 1,
            paginas: 1,
            total: 0,
            limite: r(a.limite, 20),
            porPagina: 0,
            paginable: r(a.paginable, !1),
            filtrable: r(a.filtrable, !1),
            filtros: [],
            responsive: r(a.responsive, !1),
            tabla: null,
            contenedor: this,
            creaGrilla: function () {
                P.tabla = $('<table id="' + b + '" style="' + P.style + '" class="table ' + P["class"] + '"><thead class="' + x.columnas + '"><tr></tr></thead><tbody class="' + x.filas + '"></tbody><tfoot class="' + x.paginador + '"></tfoot></table>'),
                    P.porPagina = "number" == typeof P.limite ? P.limite : P.limite[0]
            },
            cargarColumnas: function () {
                t()
            },
            cargarData: function () {
                f(!0), m(!0), v(!0);
                var a = P.tabla.find("." + x.filas);
                a.css("opacity", .4);
                
                var t = {
                    limite: P.porPagina,
                    pagina: P.pagina,
                    columna: P.columna,
                    columna_orden: P.columna_orden,
                    filtros: P.filtros,
                    parametros: P.parametros
                };
                debugger;
                $.ajax({
                    dataType: P.dataType,
                    type: P.type,
                    url: P.url,
                    data: t,
                    success: function (t) {
                        a.html("").css("opacity", 1), P.data = t.data, P.total = t.total, n()
                    },
                    error: function (t, n, o) {
                        f(!1),m(!1),v(!1),a.html('<tr class="danger"><td colspan="' + P.columnas.length + '" class="danger text-center">' + y.error_cargando + "</td></tr>"),console.log(o + " | " + n)
                    }
                })
                
            },
            obtener: function (a) {
                return P.data[a]
            },
            cargarPaginacion: function () { o() }
        };
    P.creaGrilla(),
        P.cargarColumnas(),
        P.cargarData();
    var k = $('<div class="table-responsive" />');
    return k.html(P.tabla),
        P.contenedor.html(k), P.tabla.on("click", "." + x.columna_ordenar, function () {
            var a = $(this);
            if (a.attr("disabled")) return !1; $("." + x.columna_ordenar_control, a.closest("tr")).remove(), P.pagina = 1;
            var t = $('<i style="margin-left:4px;font-size:0.8em;" class=""></i>');
            return P.columna != a.data("columna") && (P.columna = a.data("columna"),
                P.columna_orden = ""),
                "" == P.columna_orden ? (P.columna_orden = "ASC", t.attr("class", "glyphicon glyphicon-chevron-up " + x.columna_ordenar_control),
                    a.append(t)) : "ASC" == P.columna_orden ? (P.columna_orden = "DESC",
                        t.attr("class", "glyphicon glyphicon-chevron-down " + x.columna_ordenar_control),
                        a.append(t)) : "DESC" == P.columna_orden && (P.columna_orden = "",
                            P.columna = P.columna_defecto,
                            P.columna_orden = P.columna_orden),
                P.cargarData(), !1
        }),
        P.tabla.on("keyup", "." + x.filtro_control, function (a) {
            var t = $(this);
            13 == a.keyCode && (s({ columna: t.data("columna"), valor: t.val() }),
                P.pagina = 1, P.cargarData())
        }),
        P.tabla.on("change", "." + x.filtro_control, function (a) {
            var t = $(this);
            t.is("select") && (t.find("option:selected").index() > 0 ? s({
                columna: t.data("columna"),
                valor: t.val()
            }) : c(t.data("columna")), P.pagina = 1, P.cargarData())
        }),
        P.tabla.on("click", "." + x.filtro_limpiar, function (a) {
            var t = $(this).closest(".input-group").find("." + x.filtro_control);
            t.val(""), c(t.data("columna")), P.pagina = 1, P.cargarData()
        }),
        P.tabla.on("keyup", "." + x.paginador_pagina_actual, function (a) {
            if (13 == a.keyCode) {
                if (!l($(this).val()))
                    return void $(this).val(P.pagina);
                if ($(this).val() == P.pagina) return;
                if ($(this).val() > P.paginas) return;
                if (0 === $(this).val()) return;
                P.pagina = parseInt($(this).val()), P.cargarData()
            }
        }),
        P.tabla.on("focus", "." + x.paginador_pagina_actual, function (a) {
            $(this).val("")
        }),
        P.tabla.on("change", "." + x.paginador_paginas_por_pagina, function () {
            P.pagina = 1, P.porPagina = parseInt($(this).val()), P.cargarData()
        }),
        P.tabla.on("click", "." + x.paginador_primero, function () {
            $(this).attr("disabled") || l(P.pagina) && 1 != $("." + x.paginador_pagina_actual).val() && (P.pagina = 1, P.cargarData())
        }),
        P.tabla.on("click", "." + x.paginador_anterior, function () {
            $(this).attr("disabled") || l(P.pagina) && 1 != $("." + x.paginador_pagina_actual).val() && (P.pagina -= 1, P.cargarData())
        }),
        P.tabla.on("click", "." + x.paginador_final, function () {
            $(this).attr("disabled") || l(P.pagina) && $("." + x.paginador_pagina_actual).val() != P.paginas && (P.pagina = P.paginas, P.cargarData())
        }),
        P.tabla.on("click", "." + x.paginador_siguiente, function () {
            $(this).attr("disabled") || l(P.pagina) && $("." + x.paginador_pagina_actual).val() != P.paginas && (P.pagina += 1, P.cargarData())
        }),
        P.contenedor.on("change", "." + x.paginador_responsive, function () {
            P.pagina = parseInt($(this).val()), P.cargarData()
        }),
        {
            total: function () {
                return P.total
            },
            tabla: function () {
                return P.tabla
            },
            refrescar: function () {
                return P.pagina = 1, P.cargarData()
            },
            parametros: function (a) {
                P.parametros = a
            },
            obtener: function (a) {
                return P.obtener(a)
            }
        }
};