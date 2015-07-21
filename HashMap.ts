class HashMap {
	//定义长度
	public length = 0;
	//创建一个对象
	public obj = {};

	/**
	 * 判断Map是否为空
	 */
	public isEmpty():boolean {
		return this.length == 0;
	}

	/**
	 * 判断对象中是否包含给定Key
	 */
	public containsKey(key):boolean {
		return (key in this.obj);
	}

	/**
	 * 判断对象中是否包含给定的Value
	 */
	public containsValue(value):boolean {
		for (var key in this.obj) {
			if (this.obj[key] == value) {
				return true;
			}
		}
		return false;
	}

	/**
	 *向map中添加数据
	 */
	public put(key, value):void {
		if (!this.containsKey(key)) {
			this.length++;
		}
		this.obj[key] = value;
	}

	/**
	 * 根据给定的Key获得Value
	 */
	public get(key):any {
		return this.containsKey(key) ? this.obj[key] : null;
	}

	/**
	 * 根据给定的Key删除一个值
	 */
	public remove(key):void {
		if (this.containsKey(key) && (delete this.obj[key])) {
			this.length--;
		}
	}

	/**
	 * 获得Map中的所有Value
	 */
	public values():any {
		var _values = new Array();
		for (var key in this.obj) {
			_values.push(this.obj[key]);
		}
		return _values;
	}

	/**
	 * 获得Map中的所有Key
	 */
	public keySet():any {
		var _keys = new Array();
		for (var key in this.obj) {
			_keys.push(key);
		}
		return _keys;
	}

	/**
	 * 获得Map的长度
	 */
	public size():number {
		return length;
	}

	/**
	 * 清空Map
	 */
	public clear():void {
		length = 0;
		this.obj = {};
	}
}