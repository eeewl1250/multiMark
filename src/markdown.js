// 取得视窗高度
function getPageHeight() {
    var h = window.innerHeight,
        dm = document;
    if (typeof h != "number") {
        if (dm.compatMode == "CSS1Compat") {
            h = dm.documentElement.clientHeight;
        } else {
            h = dm.body.clientHeight;
        }
    }
    return h;
}
// 设置对象高度
function setHeight(obj, h) {
    for (var i = 0, len = obj.length; i < len; i++) {
        obj[i].style.height = h - 80 + "px";
    }
}
// 自动调整编辑器高度
function resetColumnHeight() {
    var dm = document,
        ed = dm.getElementById("editor"),
        pv = dm.getElementById("preview");
    setHeight([ed, pv], getPageHeight());
    window.onresize = function () {
        setHeight([ed, pv], getPageHeight());
    };
}
resetColumnHeight();
// 自定义滚动条（待编辑）
    // 滚动条组件
// 即时显示
    // markdown语法对应转换
var mc = function () {
    // private variables and functions
    var mapping = { // 对应关系

    };
    // 语法对应转化
    function  regMatch(t) {
        var regs = {
                'h6': /######\s+/g,
                'h5': /#####\s+/g,
                'h4': /####\s+/g,
                'h3': /###\s+/g,
                'h2': /##\s+/g,
                'h1': /#\s+/g,
                'ul': /\-\s+/g
            },
            types = '';
        for (var reg in regs) {
            var v = regs[reg];
            if(v.test(t)){
                t = t.replace(v, '');
                types = reg;
                break;
            }
        }
        console.log('t = ' + t);
        return [t, types];
    }
    // initialization
    // public methods and attributes
    return {
        // 语法转换
        converter: function(cont) {
            var rel = regMatch(cont),
                types = rel[1];
            cont = rel[0];
            switch (types) {
                case 'h6':
                    cont = '<h6>' + cont + '</h6>';
                    break;
                case 'h5':
                    cont = '<h5>' + cont + '</h5>';
                    break;
                default:
                    cont = '1111';
            }
            return cont;
        },
    };
}();
document.getElementById("preview").innerHTML += (mc.converter('######   hhh'));