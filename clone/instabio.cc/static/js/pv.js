(function () {
    var pv = 1,uv =1;
    var r = window, u = document, v = function(a, b) {
        u.addEventListener ? u.addEventListener(a, b, !1) : u.attachEvent && u.attachEvent("on" + a, b)
    },k=function(name) {
        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2])
        } else {
            return null
        }
    };
    function pk() {
        var exp = new Date();
        var exp_time = exp.getTime();
        var d1 = new Date(exp.getFullYear(), exp.getMonth(), exp.getDate());
        exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000 - (exp - d1));
        document.cookie = '_k_puv = ' + exp_time + ';expires=' + exp.toUTCString()+';path=/;'
    }
    if(k('_k_puv')){
        pv = 1;uv = 0;
    }else{pk();}
    var f = function (m,d) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.mp.instabio.cc/apiv1.7/anl/adata/'+(location.pathname.split('/')[1]||location.host.split('.')[0])+'/1/'.replace('1',m));
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.responseType = 'text';
        xhr.onload = function() {
        };
        xhr.onerror = function() {
        };
        try {
            d.push('_uid='+k('_u_K_id'));
            xhr.send(encodeURI(d.join('&')));
        } catch (e) {
        }
    };
    var a = function (b) {
        if(b.href && b.nodeName=='A'){
            if (b.dataset&&b.dataset.html) {
                f('service', ['referer='+u.referrer,'t='+(b.dataset.type||1),'l='+b.dataset.html,'n='+b.dataset.title,'u='+b.dataset.id,'i='+b.dataset.kid])
            }
        }
        if(b.nodeName=='IMG'||b.nodeName=='SPAN'||b.nodeName=='I'||b.nodeName=='P'){
            b=b.parentElement;
            if (b.dataset&&b.dataset.html) {
                f('service', ['referer='+u.referrer,'t='+(b.dataset.type||1),'l='+b.dataset.html,'n='+b.dataset.title,'u='+b.dataset.id,'i='+b.dataset.kid])
            }
        }
    };
    var c = function(e) {
        a(e.target || e.srcElement || {})
    };
    v("click", c);
    r.onload=function () {
        var adid=!u.querySelector('.instabio-ad')?'':'instabio';
        f('link',['referer=' +u.referrer,'pv='+pv,'uv='+uv,'_k_sid='+k('_k_puv'),'ad='+adid]);
    }
})(window);
