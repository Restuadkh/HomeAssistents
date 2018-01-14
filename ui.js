$(function () {
    var WEBSOCKET_ROUTE = "/ws";
    if (window.location.protocol == "http:") {
        //localhost
        var ws = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
    }
    else if (window.location.protocol == "https:") {
        //Dataplicity
        var ws = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
    }
    ws.onopen = function (evt) {
        $("#ws-status").html("Online");
    };
    ws.onmessage = function (evt) {
    };
    ws.onclose = function (evt) {
        $("#ws-status").html("Offline");
    };
    $("#set_0").click(function (events) {
        
        $("#set_0").click(function () {
            $("#info_set_0").collapse('show');
        });

        $("#info_set_0").on('shown.bs.collapse', function () {
            $("#info_set_0").collapse('hide');
        });
    })
    //tombol warna
    var btn0 = 0;
    $("#btn_0").click(function (events) {
        btn0 = btn0 + 1;
        if (btn0 >= 2) { btn0 = 0; }
        if (btn0 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_0").text("Hidup");
            ws.send("btn_0_on");
        }
        else if (btn0 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_0").text("Mati");
            ws.send("btn_0_off");
        }
        $("#btn_0").click(function () {
            $("#info_00").collapse('show');
        });

        $("#info_00").on('shown.bs.collapse', function () {
            $("#info_00").collapse('hide');
        });
    })
    var btn1 = 0;
    $("#btn_1").click(function (events) {
        btn1 = btn1 + 1;
        if (btn1 >= 2) { btn1 = 0; }
        if (btn1 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_1").text("Hidup");
            ws.send("btn_1_on");
        }
        else if (btn1 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_1").text("Mati");
            ws.send("btn_1_off");
        }
        $("#btn_1").click(function () {
            $("#info_11").collapse('show');
        });

        $("#info_11").on('shown.bs.collapse', function () {
            $("#info_11").collapse('hide');
        });
    })
    var btn2 = 0;
    $("#btn_2").click(function (events) {
        btn2 = btn2 + 1;
        if (btn2 >= 2) { btn2 = 0; }
        if (btn2 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_2").text("Hidup");

        }
        else if (btn2 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_2").text("Mati");
        }
        $("#btn_2").click(function () {
            $("#info_22").collapse('show');
        });

        $("#info_22").on('shown.bs.collapse', function () {
            $("#info_22").collapse('hide');
        });
    })
    var btn3 = 0;
    $("#btn_3").click(function (events) {
        btn3 = btn3 + 1;
        if (btn3 >= 2) { btn3 = 0; }
        if (btn3 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_3").text("Hidup");
        }
        else if (btn3 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_3").text("Mati");
        }
        $("#btn_3").click(function () {
            $("#info_33").collapse('show');
        });

        $("#info_33").on('shown.bs.collapse', function () {
            $("#info_33").collapse('hide');
        });
    })
    var btn_ac01 = 0;
    $("#btn_ac-1").click(function (events) {
        btn_ac01 = btn_ac01 + 1;
        if (btn_ac01 >= 2) {
            btn_ac01 = 0;
        }
        if (btn_ac01 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_ac-1").text("Hidup");
            ws.send("btn_ac_0_on");
        }
        else if (btn_ac01 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_ac-1").text("Mati");
            ws.send("btn_ac_0_off");
        }
        $("#btn_ac-1").click(function () {
            $("#info_ac1").collapse('show');
        });

        $("#info_ac1").on('shown.bs.collapse', function () {
            $("#info_ac1").collapse('hide');
        });
    })
    var btn_ac02 = 0;
    $("#btn_ac-2").click(function (events) {
        btn_ac02 = btn_ac02 + 1;
        if (btn_ac02 >= 2) {
            btn_ac02 = 0;
        }
        if (btn_ac02 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_ac-2").text("Hidup");
            setInterval(startTime, 5000);
        }
        else if (btn_ac02 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_ac-2").text("Mati");
        }
        $("#btn_ac-2").click(function () {
            $("#info_ac2").collapse('show');
        });

        $("#info_ac2").on('shown.bs.collapse', function () {
            $("#info_ac2").collapse('hide');
        });
    })
    var btn_ac03 = 0;
    $("#btn_ac-3").click(function (events) {
        btn_ac03 = btn_ac03 + 1;
        if (btn_ac03 >= 2) {
            btn_ac03 = 0;
        }
        if (btn_ac03 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_ac-3").text("Hidup");
        }
        else if (btn_ac03 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_ac-3").text("Mati");
        }
        $("#btn_ac-3").click(function () {
            $("#info_ac3").collapse('show');
        });

        $("#info_ac3").on('shown.bs.collapse', function () {
            $("#info_ac3").collapse('hide');
        });
    })
    var btn_tr0 = 0;
    $("#btn_tr-0").click(function (events) {
        btn_tr0 = btn_tr0 + 1;
        if (btn_tr0 >= 2) { btn_tr0 = 0; }
        if (btn_tr0 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_tr-0").text("Hidup");
            ws.send("btn_tr_0_on");
        }
        else if (btn_tr0 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_tr-0").text("Mati");
            ws.send("btn_tr_0_off");
        }
        $("#btn_tr-0").click(function () {
            $("#info_tr0").collapse('show');
        });

        $("#info_tr0").on('shown.bs.collapse', function () {
            $("#info_tr0").collapse('hide');
        });
    })
    var btn_tr1 = 0;
    $("#btn_tr-1").click(function (events) {
        btn_tr1 = btn_tr1 + 1;
        if (btn_tr1 >= 2) {
            btn_tr1 = 0;
        }
        if (btn_tr1 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_tr-1").text("Dibuka");
        }
        else if (btn_tr1 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_tr-1").text("Ditutup");
        }
        $("#btn_tr-1").click(function () {
            $("#info_tr1").collapse('show');
        });

        $("#info_tr1").on('shown.bs.collapse', function () {
            $("#info_tr1").collapse('hide');
        });
    })
    var btn_tr2 = 0;
    $("#btn_tr-2").click(function (events) {
        btn_tr2 = btn_tr2 + 1;
        if (btn_tr2 >= 2) {
            btn_tr2 = 0;
        }
        if (btn_tr2 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_tr-2").text("Dibuka");
        }
        else if (btn_tr2 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_tr-2").text("Ditutup");
        }
        $("#btn_tr-2").click(function () {
            $("#info_tr2").collapse('show');
        });

        $("#info_tr2").on('shown.bs.collapse', function () {
            $("#info_tr2").collapse('hide');
        });
    })
    var btn_tr3 = 0;
    $("#btn_tr-3").click(function (events) {
        btn_tr3 = btn_tr3 + 1;
        if (btn_tr3 >= 2) {
            btn_tr3 = 0;
        }
        if (btn_tr3 == 1) {
            $(this).toggleClass("btn-success");
            $(this).removeClass("btn-danger");
            $("#info_tr-3").text("Dibuka");
        }
        else if (btn_tr3 == 0) {
            $(this).toggleClass("btn-danger");
            $(this).removeClass("btn-success");
            $("#info_tr-3").text("Ditutup");
        }
        $("#btn_tr-3").click(function () {
            $("#info_tr3").collapse('show');
        });

        $("#info_tr3").on('shown.bs.collapse', function () {
            $("#info_tr3").collapse('hide');
        });
    })
    

    
        
        
    })
    