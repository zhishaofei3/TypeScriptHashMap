var HashMap = (function () {
    function HashMap() {
        //���峤��
        //����һ������
        this.obj = {};
    }
    /**
     * �ж�Map�Ƿ�Ϊ��
     */
    HashMap.prototype.isEmpty = function () {
        return Object.keys(this.obj).length == 0;
    };
    /**
     * �ж϶������Ƿ���������Key
     */
    HashMap.prototype.containsKey = function (key) {
        return (key in this.obj);
    };
    /**
     * �ж϶������Ƿ�����������Value
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
     *��map����������
     */
    HashMap.prototype.put = function (key, value) {
        this.obj[key] = value;
    };
    /**
     * ���ݸ�����Key����Value
     */
    HashMap.prototype.get = function (key) {
        return this.containsKey(key) ? this.obj[key] : null;
    };
    /**
     * ���ݸ�����Keyɾ��һ��ֵ
     */
    HashMap.prototype.remove = function (key) {
        if (this.containsKey(key)) {
            delete this.obj[key];
        }
    };
    /**
     * ����Map�е�����Value
     */
    HashMap.prototype.values = function () {
        var _values = new Array();
        for (var key in this.obj) {
            _values.push(this.obj[key]);
        }
        return _values;
    };
    /**
     * ����Map�е�����Key
     */
    HashMap.prototype.keySet = function () {
        var _keys = new Array();
        for (var key in this.obj) {
            _keys.push(key);
        }
        return _keys;
    };
    /**
     * ����Map�ĳ���
     */
    HashMap.prototype.size = function () {
        return Object.keys(this.obj).length;
    };
    /**
     * ����Map
     */
    HashMap.prototype.clear = function () {
        this.obj = {};
    };
    return HashMap;
})();
//# sourceMappingURL=HashMap.js.map