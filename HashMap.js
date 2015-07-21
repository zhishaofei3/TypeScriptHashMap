var HashMap = (function () {
    function HashMap() {
        //定义长度
        this.length = 0;
        //创建一个对象
        this.obj = {};
    }
    /**
     * 判断Map是否为空
     */
    HashMap.prototype.isEmpty = function () {
        return this.length == 0;
    };
    /**
     * 判断对象中是否包含给定Key
     */
    HashMap.prototype.containsKey = function (key) {
        return (key in this.obj);
    };
    /**
     * 判断对象中是否包含给定的Value
     */
    HashMap.prototype.containsValue = function (value) {
        for (var key in this.obj) {
            if (this.obj[key] == value) {
                return true;
            }
        }
        return false;
    };
    /**
     *向map中添加数据
     */
    HashMap.prototype.put = function (key, value) {
        if (!this.containsKey(key)) {
            this.length++;
        }
        this.obj[key] = value;
    };
    /**
     * 根据给定的Key获得Value
     */
    HashMap.prototype.get = function (key) {
        return this.containsKey(key) ? this.obj[key] : null;
    };
    /**
     * 根据给定的Key删除一个值
     */
    HashMap.prototype.remove = function (key) {
        if (this.containsKey(key) && (delete this.obj[key])) {
            this.length--;
        }
    };
    /**
     * 获得Map中的所有Value
     */
    HashMap.prototype.values = function () {
        var _values = new Array();
        for (var key in this.obj) {
            _values.push(this.obj[key]);
        }
        return _values;
    };
    /**
     * 获得Map中的所有Key
     */
    HashMap.prototype.keySet = function () {
        var _keys = new Array();
        for (var key in this.obj) {
            _keys.push(key);
        }
        return _keys;
    };
    /**
     * 获得Map的长度
     */
    HashMap.prototype.size = function () {
        return this.length;
    };
    /**
     * 清空Map
     */
    HashMap.prototype.clear = function () {
        this.length = 0;
        this.obj = {};
    };
    return HashMap;
})();
//# sourceMappingURL=HashMap.js.map