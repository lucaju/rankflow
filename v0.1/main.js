// RankFlow visualization, by Bernhard Rieder
// RBD calculations based on this python implementation: https://github.com/maslinych/linis-scripts/blob/master/rbo_calc.py
// md5 implementation from https://github.com/blueimp/JavaScript-MD5

var _data = {};
var _singlerow;
var _limitlabel;

function getPaste(raw) {
    
    data = {};
    
    // get interface variables and textarea contents
    // var _raw = $("#vis_textarea").val();

    var _raw = raw;

    var _makelog = $("#vis_log").is(":checked");
    _limitlabel = $("#vis_limitlabel").is(":checked");
    
    var _rows = _raw.split("\n");
    
    var _w = $("#vis_width").val();
    var _h = $("#vis_height").val();
    
    var _labels = {};
    var _valname = "uservariable";
    var _it = 2;
    
    var _rbo_p = parseFloat($("#vis_alpha").val());
                
    var _tmpelements = _rows[1].split("\t")
    _singlerow = (isNaN(parseInt(_tmpelements[1]))) ? true:false;
    if(_singlerow == true) {
        _makelog = false;
        _it = 1;
    }
    
    
    // HTML table output
    var _html = '<table class="uk-table uk-table-hover uk-table-divider">';
    
    for(var i = 0; i < _rows.length; i++) {
        
        _elements = _rows[i].split("\t");
        
        if(i == 0) {
            _html += '<thead><tr>';
        } else {
            _html += '<tr>';
        }
        
        for(var j = 0; j < _elements.length; j = j + _it) {
                                
            if(i == 0) {

               
                
                _data[_elements[j]] = {};
                _labels[j] = _elements[j];
                
                _html += '<th class="uk-table-expand">' + _elements[j].substring(0,10); + '</th>';
                if(!_singlerow) {
                    _html += '<th class="uk-table-shrink">' + _elements[j+1].substring(11,16) + '</th>';
                }

                
            } else {
                
                var _tmp = {};
                var _tmpvalue = ($("#vis_ranksize").is(":checked")) ? _rows.length-i:1;
                _tmp[_valname] = (_singlerow) ? _tmpvalue:parseInt(_elements[j+1]);
                if(_makelog == true) {
                    var _newvalname = "log(uservariable)";
                    _tmp[_newvalname] = Math.round(Math.log(parseInt(_elements[j+1])) * 10);
                }
                _data[_labels[j]][_elements[j]] = _tmp;
                
                _html += '<td>' + _elements[j] + '</td>';
                if(!_singlerow) {
                    _html += '<td>' + _elements[j+1] + '</td>';
                }
            }
        }

        if(i == 0) {
            _html += '</tr></thead>';
        } else {
            _html += '</tr>';
        }
        
        
    }
    _html += '</table>';
    
    $("#vis_table").html(_html);
    
    
    // RBO/RBD preps
    var _pythonout = "";
    var _counter = 1;
    var _rbolists = [];
    
    for(var _day in _data) {

        _pythonout += "list" + _counter + " = [";
        
        var _tmplist = []
        for(var _vid in _data[_day]) {
            
            _pythonout += "'" + md5(_vid) + "',";
            _tmplist.push(md5(_vid));
        }

        _pythonout = _pythonout.substring(0,_pythonout.length - 1);
        _pythonout += "]\n";
        _counter++;
        
        _rbolists.push(_tmplist)
    }
    
    $("#pythonout").html(_pythonout);
    

    // calculate RBDs
    var _rbds = []
    for(var i = 0; i < _rbolists.length - 1; i++) {
        _rbds.push(Math.round((1 - calc_rbo(_rbolists[i],_rbolists[i+1],_rbo_p)) * 1000 ) / 1000);
    }
    
   // console.log(_rbds);
    
    
    // RBD table output
    var _rbdout = '<table><tr>';
    var _counter = 0;
    for(var _day in _data) {
        _rbdout += '<th class="uk-table-expand">' + _day.substring(0,10) + '</th>';
        if(_counter < _rbds.length) {
            _rbdout += '<th>&#8594; ' +  _rbds[_counter] + ' &#8594;</th>';
            
        }				
        _counter++;
    }
    
    //_avg = _avg / (_counter - 1);
    var _avg = domean(_rbds);
    var _variance = dovariance(_rbds);
    
    _rbdout += '<th>avg: ' + (Math.round((_avg) * 100 ) / 100)  + '<br />variance: ' + (Math.round((_variance) * 10000 ) / 10000) + '  </th>';
    _rbdout += '</tr></table>';
    $("#vis_rbd").html(_rbdout);
    
    var _startval = (_makelog) ? _newvalname:_valname;
    startVis(_startval,_w,_h);
}


function domean(_array) {
    var _avg = 0;
    for(var _value in _array) {
        _avg += _array[_value];
    }
    _avg = _avg / _array.length;
    return _avg;
}


function dovariance(_array) {
    var _avg = domean(_array);
    var _values = [];
    for(var _value in _array) {
        _values.push(Math.pow(_array[_value] - _avg, 2));
    }
    var _variance = domean(_values);
    return _variance;
}
        

function calc_rbo(_list1,_list2,p) {
    
    var _tmplists = [[_list1.length,_list1],[_list2.length,_list2]].sort()
    var s = _tmplists[0][0]
    var S = _tmplists[0][1]
    var l = _tmplists[1][0]
    var L = _tmplists[1][1]
    
    var ss = []
    var ls = []
    var overs = {}
    for(var i = 0; i < l; i++) {
        ls.push(L[i])
        if(i<s) {
            ss.push(S[i])
        }
        X_d = ss.filter(function(n) {
            return ls.indexOf(n) != -1
        }).length;
        overs[i+1] = parseFloat(X_d)
    }
        
    // (1) \sum_{d=1}^l (X_d / d) * p^d
    var sum1 = 0
    for(var i = 0; i < l; i++) {
        d = i + 1 
        sum1 += overs[d] / d * Math.pow(p,d)
    }
    var X_s = overs[s]
    var X_l = overs[l]

    // (2) \sum_{d=s+1}^l [(X_s (d - s)) / (sd)] * p^d
    var sum2 = 0
    for(var i = s; i < l; i++) {
        d = i + 1
        sum2 += (X_s * (d-s) / (s*d)) * Math.pow(p,d)
    }
    
    // (3) [(X_l - X_s) / l + X_s / s] * p^l
    var sum3 = ((X_l - X_s) / l + X_s / s) * Math.pow(p,l)
    
    // Equation 32
    var rbo_ext = (1 - p) / p * (sum1 + sum2) + sum3
    return rbo_ext
}
