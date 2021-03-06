var array     = require("../lib/abaaso.js").array,
    arr       = [{abc: 123124, xyz: 5}, {abc: 123124, xyz: 6}, {abc: 2, xyz: 5}],
    arrNested = [{data:{abc: 123124, xyz: 5}}, {data:{abc: 123124, xyz: 6}}, {data:{abc: 2, xyz: 5}}];

exports["add"] = {
	setUp: function (done) {
		this.val = [0];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.add(this.val, 0).length, 1, "Should be 1");
		test.equal(array.add(this.val, 1).length, 2, "Should be 2");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.add(0).length, 1, "Should be 1");
		test.equal(this.val.add(1).length, 2, "Should be 2");
		test.done();
	}
};

exports["binIndex"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		done();
	},
	direct: function (test) {
		test.expect(6);
		test.equal(array.binIndex(this.val, 0),  0, "Should be 0");
		test.equal(array.binIndex(this.val, 1),  1, "Should be 1");
		test.equal(array.binIndex(this.val, 2),  2, "Should be 2");
		test.equal(array.binIndex(this.val, 3),  3, "Should be 3");
		test.equal(array.binIndex(this.val, 4),  4, "Should be 4");
		test.equal(array.binIndex(this.val, 5), -1, "Should be -1");
		test.done();
	},
	sugar: function (test) {
		test.expect(6);
		test.equal(this.val.binIndex(0),  0, "Should be 0");
		test.equal(this.val.binIndex(1),  1, "Should be 1");
		test.equal(this.val.binIndex(2),  2, "Should be 2");
		test.equal(this.val.binIndex(3),  3, "Should be 3");
		test.equal(this.val.binIndex(4),  4, "Should be 4");
		test.equal(this.val.binIndex(5), -1, "Should be -1");
		test.done();
	}
};

exports["cast"] = {
	setUp: function (done) {
		this.val = {abc: true, xyz: false};
		done();
	},
	indices: function (test) {
		test.expect(2);
		test.equal(array.cast(this.val)[0], true, "Should be true");
		test.equal(array.cast(this.val)[1], false, "Should be false");
		test.done();
	},
	keys: function (test) {
		test.expect(2);
		test.equal(array.cast(this.val, true)[0], "abc", "Should be 'abc'");
		test.equal(array.cast(this.val, true)[1], "xyz", "Should be 'xyz'");
		test.done();
	}
};

exports["chunk"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.chunk(this.val, 5).length, 2, "Should be '2'");
		test.equal(array.chunk(this.val, 5)[0].length, 5, "Should be '5'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.chunk(5).length, 2, "Should be '2'");
		test.equal(this.val.chunk(5)[0].length, 5, "Should be '5'");
		test.done();
	}
};

exports["clear"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.clear(this.val).length, 0, "Should be '0'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.clear().length, 0, "Should be '0'");
		test.done();
	}
};

exports["clone"] = {
	setUp: function (done) {
		this.val   = [true, false];
		this.clone = undefined;
		done();
	},
	direct: function (test) {
		test.expect(5);
		test.equal(array.clone(this.val)[0], true, "Should be true");
		test.equal(array.clone(this.val)[1], false, "Should be false");
		test.equal(this.clone = array.clone(this.val), this.clone, "Should be a clone");
		test.equal(this.clone.push(true), 3, "Should be 3");
		test.equal(this.val.length, 2, "Should be 2");
		test.done();
	},
	sugar: function (test) {
		test.expect(5);
		test.equal(this.val.clone()[0], true, "Should be true");
		test.equal(this.val.clone()[1], false, "Should be false");
		test.equal(this.clone = this.val.clone(), this.clone, "Should be a clone");
		test.equal(this.clone.push(true), 3, "Should be 3");
		test.equal(this.val.length, 2, "Should be 2");
		test.done();
	}
};

exports["collect"] = {
	setUp: function (done) {
		this.val = [0, 1, 2];
		this.fn  = function (i) { return i + "!"; };
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.collect(this.val, this.fn)[0], "0!", "Should be '0!'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.collect(this.fn)[0], "0!", "Should be '0!'");
		test.done();
	}
};

exports["compact"] = {
	setUp: function (done) {
		this.val = [0, null, 1];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.compact(this.val).length, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.compact().length, 2, "Should be '2'");
		test.done();
	}
};

exports["count"] = {
	setUp: function (done) {
		this.val = [1, 3, 1, 3, 3];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.count(this.val, 1), 2, "Should be '2'");
		test.equal(array.count(this.val, 3), 3, "Should be '3'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.count(1), 2, "Should be '2'");
		test.equal(this.val.count(3), 3, "Should be '3'");
		test.done();
	}
};

exports["diff"] = {
	setUp: function (done) {
		this.a1 = ["abc", "def"];
		this.a2 = ["abc", "xyz"];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.diff(this.a1, this.a2).length, 2, "Should be 2 differences");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.a1.diff(this.a2).length, 2, "Should be 2 differences");
		test.done();
	}
};

exports["each"] = {
	setUp: function (done) {
		this.val = ["abc"];
		self     = this;
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.each(this.val, function (i, idx) { self.val[idx] = "blah"; })[0], "blah", "Should be 'blah'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.each(function (i, idx) { self.val[idx] = "blah"; })[0], "blah", "Should be 'blah'");
		test.done();
	}
};

exports["empty"] = {
	setUp: function (done) {
		this.full  = [0, 1, 2, 3, 4];
		this.empty = [];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.empty(this.full),  false, "Should be 'false'");
		test.equal(array.empty(this.empty), true,  "Should be 'true'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.full.empty(),  false, "Should be 'false'");
		test.equal(this.empty.empty(), true,  "Should be 'true'");
		test.done();
	}
};

exports["equal"] = {
	setUp: function (done) {
		this.a = [0];
		this.b = [0];
		this.c = []
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.equal(this.a, this.b), true, "Should be 'true'");
		test.equal(array.equal(this.a, this.c), false,  "Should be 'false'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.a.equal(this.b), true, "Should be 'true'");
		test.equal(this.a.equal(this.c), false,  "Should be 'false'");
		test.done();
	}
};

exports["fib"] = {
	setUp: function (done) {
		this.test = [];
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.fib(5).length, 5, "Should be '5'");
		test.equal(array.fib(5).toString(), "1,1,2,3,5", "Should be '1,1,2,3,5'");
		test.equal(array.fib(7).toString(), "1,1,2,3,5,8,13", "Should be '1,1,2,3,5,8,13'");
		test.equal(array.fib().length, 100, "Should be '100'");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal(this.test.fib(5).length, 5, "Should be '5'");
		test.equal(this.test.fib(5).toString(), "1,1,2,3,5", "Should be '1,1,2,3,5'");
		test.equal(this.test.fib(7).toString(), "1,1,2,3,5,8,13", "Should be '1,1,2,3,5,8,13'");
		test.equal(this.test.fib().length, 100, "Should be '100'");
		test.done();
	}
};

exports["fill"] = {
	setUp: function (done) {
		this.val = ["a", "b"];
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.fill(this.val.clone(), "!")[0], "!", "Should be '!'");
		test.equal(array.fill(this.val.clone(), "!", 1)[0], "a", "Should be 'a'");
		test.equal(array.fill(this.val.clone(), "!", 1)[1], "!", "Should be '!'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.val.clone().fill("!")[0], "!", "Should be '!'");
		test.equal(this.val.clone().fill("!", 1)[0], "a", "Should be 'a'");
		test.equal(this.val.clone().fill("!", 1)[1], "!", "Should be '!'");
		test.done();
	}
};

exports["first"] = {
	setUp: function (done) {
		this.val = ["abc"];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.first(this.val), "abc", "Should be 'abc'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.first(), "abc", "Should be 'abc'");
		test.done();
	}
};

exports["flat"] = {
	setUp: function (done) {
		this.val = [[0, 1], [2, 3], [4, 5]];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.flat(this.val).length, 6, "Should be an Array of 6 indices");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.flat().length, 6, "Should be an Array of 6 indices");
		test.done();
	}
};

exports["fromObject"] = {
	setUp: function (done) {
		this.val = {abc: true, xyz: false};
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.fromObject(this.val).length, 2, "Should be an Array of 2 indices");
		test.equal(array.fromObject(this.val)[0].length, 2, "Should be an Array of 2 indices");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal([].fromObject(this.val).length, 2, "Should be an Array of 2 indices");
		test.equal([].fromObject(this.val)[0].length, 2, "Should be an Array of 2 indices");
		test.done();
	}
};

exports["index"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz"];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.index(this.val, "abc"), 0, "Should be 0");
		test.equal(array.index(this.val, "xyz"), 1, "Should be 1");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.index("abc"), 0, "Should be 0");
		test.equal(this.val.index("xyz"), 1, "Should be 1");
		test.done();
	}
};

exports["indexed"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz"];
		this.val.someProperty      = true;
		this.val.someOtherProperty = true;
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.indexed(this.val).length, 4, "Should be 4");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.indexed().length, 4, "Should be 4");
		test.done();
	}
};

exports["intersect"] = {
	setUp: function (done) {
		this.a1 = ["abc", "def"];
		this.a2 = ["abc", "xyz"];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.intersect(this.a1, this.a2).length, 1, "Should be 1 match");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.a1.intersect(this.a2).length, 1, "Should be 1 match");
		test.done();
	}
};

exports["keepIf"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		this.fn  = function (i) { return i.isOdd(); };
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.keepIf(this.val, this.fn).length, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.keepIf(this.fn).length, 2, "Should be '2'");
		test.done();
	}
};

exports["keySortOne"] = {
	setUp: function (done) {
		this.arr = arr.slice();
		done();
	},
	test: function (test) {
		test.expect(1);
		test.equal(array.keySort( this.arr.slice(), "abc" )[0].abc, 2, "Should be '2'");
		test.done();
	},
	test: function (test) {
		test.expect(1);
		test.equal(this.arr.slice().keySort( "abc" )[0].abc, 2, "Should be '2'");
		test.done();
	}
};

exports["keySortTwo"] = {
	setUp: function (done) {
		this.arr = arr.slice();
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc" )[0].abc, 2, "Should be '2'");
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc" )[1].xyz, 6, "Should be '6'");
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc" )[2].xyz, 5, "Should be '5'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.arr.slice().keySort( "abc, xyz desc" )[0].abc, 2, "Should be '2'");
		test.equal(this.arr.slice().keySort( "abc, xyz desc" )[1].xyz, 6, "Should be '6'");
		test.equal(this.arr.slice().keySort( "abc, xyz desc" )[2].xyz, 5, "Should be '5'");
		test.done();
	}
};

exports["keySortOneNested"] = {
	setUp: function (done) {
		this.arr = arrNested.slice();
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.keySort( this.arr.slice(), "abc", "data" )[0].data.abc, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.arr.slice().keySort( "abc", "data" )[0].data.abc, 2, "Should be '2'");
		test.done();
	}
};

exports["keySortTwoNested"] = {
	setUp: function (done) {
		this.arr = arrNested.slice();
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc", "data" )[0].data.abc, 2, "Should be '2'");
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc", "data" )[1].data.xyz, 6, "Should be '6'");
		test.equal(array.keySort( this.arr.slice(), "abc, xyz desc", "data" )[2].data.xyz, 5, "Should be '5'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.arr.slice().keySort( "abc, xyz desc", "data" )[0].data.abc, 2, "Should be '2'");
		test.equal(this.arr.slice().keySort( "abc, xyz desc", "data" )[1].data.xyz, 6, "Should be '6'");
		test.equal(this.arr.slice().keySort( "abc, xyz desc", "data" )[2].data.xyz, 5, "Should be '5'");
		test.done();
	}
};

exports["keys"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz"];
		this.val.someProperty      = true;
		this.val.someOtherProperty = true;
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.keys(this.val).length, 4, "Should be 4");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.keys().length, 4, "Should be 4");
		test.done();
	}
};

exports["last"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz", "def"];
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.last(this.val), "def", "Should be 'def'");
		test.equal(array.last(this.val, 2)[0], "xyz", "Should be 'xyz'");
		test.equal(array.last(this.val, 3)[0], "abc", "Should be 'abc'");
		test.equal(array.last(this.val, 4)[0], "abc", "Should be 'abc'");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal(this.val.last(), "def", "Should be 'def'");
		test.equal(this.val.last(2)[0], "xyz", "Should be 'xyz'");
		test.equal(this.val.last(3)[0], "abc", "Should be 'abc'");
		test.equal(this.val.last(4)[0], "abc", "Should be 'abc'");
		test.done();
	}
};

exports["limit"] = {
	setUp: function (done) {
		this.val = ["a", "b", "c", "d", "e"];
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.limit(this.val, 3, 2).length, 2, "Should be 2");
		test.equal(array.limit(this.val, 3, 2)[0], "d", "Should be 'd'");
		test.equal(array.limit(this.val, 3, 2)[1], "e", "Should be 'e'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.val.limit(3, 2).length, 2, "Should be 2");
		test.equal(this.val.limit(3, 2)[0], "d", "Should be 'd'");
		test.equal(this.val.limit(3, 2)[1], "e", "Should be 'e'");
		test.done();
	}
};

exports["max"] = {
	setUp: function (done) {
		this.val = [1, 3, 7, 2, 10];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.max(this.val), 10, "Should be '10'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.max(), 10, "Should be '10'");
		test.done();
	}
};

exports["mean"] = {
	setUp: function (done) {
		this.val     = [1, 3, 5];
		this.invalid = [];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.mean(this.val), 3, "Should be '3'");
		test.equal(array.mean(this.invalid), undefined, "Should be 'undefined'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.mean(), 3, "Should be '3'");
		test.equal(this.invalid.mean(), undefined, "Should be 'undefined'");
		test.done();
	}
};

exports["median"] = {
	setUp: function (done) {
		this.even = [5, 1, 3, 8];
		this.odd  = [5, 1, 3];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.median(this.even), 4, "Should be '4'");
		test.equal(array.median(this.odd), 3, "Should be '3'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.even.median(), 4, "Should be '4'");
		test.equal(this.odd.median(), 3, "Should be '3'");
		test.done();
	}
};

exports["merge"] = {
	setUp: function (done) {
		this.a = [];
		this.b = [];
		done();
	},
	direct: function (test) {
		test.expect(2);
		this.a = [1];
		this.b = [2, 3, 4, 5];
		test.equal(array.merge(this.a, this.b), this.a, "Should be 'this.a'");
		test.equal(this.a.length, 5, "Should be '5'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		this.a = [1];
		this.b = [2, 3, 4, 5];
		test.equal(this.a.merge(this.b), this.a, "Should be 'this.a'");
		test.equal(this.a.length, 5, "Should be '5'");
		test.done();
	}
};

exports["min"] = {
	setUp: function (done) {
		this.val = [1, 3, 7, 2, 10];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.min(this.val), 1, "Should be '1'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.min(), 1, "Should be '1'");
		test.done();
	}
};

exports["mingle"] = {
	setUp: function (done) {
		this.val    = [["a", "b", "c", "d"], [0, 1, 2, 3]];
		this.result = [["a", 0], ["b", 1], ["c", 2], ["d", 3]];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.mingle(this.val[0], this.val[1])[0][0], this.result[0][0], "Should match '" + this.result[0][0] + "'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val[0].mingle(this.val[1])[0][0], this.result[0][0], "Should match '" + this.result[0][0] + "'");
		test.done();
	}
};

exports["mode"] = {
	setUp: function (done) {
		this.single = [1, 3, 7, 1, 2, 10, 7, 7, 3, 10];
		this.many   = [1, 3, 7, 1, 2, 10, 7, 7, 3, 10, 10];
		this.none   = [];
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.mode(this.single), 7, "Should be '7'");
		test.equal(array.mode(this.many).length, 2, "Should be '2' ([7, 10])");
		test.equal(array.mode(this.none), undefined, "Should be 'undefined'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.single.mode(), 7, "Should be '7'");
		test.equal(this.many.mode().length, 2, "Should be '2' ([7, 10])");
		test.equal(this.none.mode(), undefined, "Should be 'undefined'");
		test.done();
	}
};

exports["percents"] = {
	setUp: function (done) {
		this.val = [1, 2, 3, 37];
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.percents(this.val).sum(), 100, "Should be '100'");
		test.equal(array.percents(this.val).toString(), "2,5,7,86", "Should be '2,5,7,86'");
		test.equal(array.percents(this.val, 1).sum(), 100, "Should be '100'");
		test.equal(array.percents(this.val, 7).sum(), 100, "Should be '100'");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal(this.val.percents().sum(), 100, "Should be '100'");
		test.equal(this.val.percents().toString(), "2,5,7,86", "Should be '2,5,7,86'");
		test.equal(this.val.percents(1).sum(), 100, "Should be '100'");
		test.equal(this.val.percents(7).sum(), 100, "Should be '100'");
		test.done();
	}
};

exports["range"] = {
	setUp: function (done) {
		this.val = [5, 1, 3, 8];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.range(this.val), 7, "Should be '7'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.range(), 7, "Should be '7'");
		test.done();
	}
};

exports["rassoc"] = {
	setUp: function (done) {
		this.val = [[1, 3], [7, 2]];
		this.a   = 3;
		this.b   = 2;
		this.c   = 1;
		this.d   = undefined;
		done();
	},
	direct: function (test) {
		test.expect(3);
		test.equal(array.rassoc(this.val, this.a)[1], this.a, "Should be '" + this.a + "'");
		test.equal(array.rassoc(this.val, this.b)[1], this.b, "Should be '" + this.b + "'");
		test.equal(array.rassoc(this.val, this.c), this.d, "Should be '" + this.d + "'");
		test.done();
	},
	sugar: function (test) {
		test.expect(3);
		test.equal(this.val.rassoc(this.a)[1], this.a, "Should be '" + this.a + "'");
		test.equal(this.val.rassoc(this.b)[1], this.b, "Should be '" + this.b + "'");
		test.equal(this.val.rassoc(this.c), this.d, "Should be '" + this.d + "'");
		test.done();
	}
};

exports["reject"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		this.fn  = function (i) { return i.isEven(); };
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.reject(this.val, this.fn).length, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.reject(this.fn).length, 2, "Should be '2'");
		test.done();
	}
};

exports["remove"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz"];
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.remove(this.val.clone(), 0).length, 1, "Should be 1");
		test.equal(array.remove(this.val.clone(), 1).length, 1, "Should be 1");
		test.equal(array.remove(this.val.clone(), "abc").length, 1, "Should be 'xyz'");
		test.equal(array.remove(this.val.clone(), "xyz").length, 1, "Should be 'abc'");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal(this.val.clone().remove(0).length, 1, "Should be 1");
		test.equal(this.val.clone().remove(1).length, 1, "Should be 1");
		test.equal(this.val.clone().remove("abc")[0], "xyz", "Should be 'xyz'");
		test.equal(this.val.clone().remove("xyz")[0], "abc", "Should be 'abc'");
		test.done();
	}
};

exports["removeIf"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		this.fn  = function (i) { return i.isEven(); };
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.removeIf(this.val, this.fn).length, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.removeIf(this.fn).length, 2, "Should be '2'");
		test.done();
	}
};

exports["removeWhile"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		this.fn  = function (i) { return i < 3; };
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.removeWhile(this.val, this.fn).length, 2, "Should be '2'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.removeWhile(this.fn).length, 2, "Should be '2'");
		test.done();
	}
};

exports["replace"] = {
	setUp: function (done) {
		this.a = ["abc", "xyz"];
		this.b = [0, 1, 2];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.replace(this.a.clone(), this.b).length, 3, "Should be 3");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.a.clone().replace(this.b).length, 3, "Should be 3");
		test.done();
	}
};

exports["rest"] = {
	setUp: function (done) {
		this.val = [0, 1, 2];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.rest(this.val).length, 2, "Should be 2");
		test.equal(array.rest(this.val, 2).length, 1, "Should be 1");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.rest().length, 2, "Should be 2");
		test.equal(this.val.rest(2).length, 1, "Should be 1");
		test.done();
	}
};

exports["rindex"] = {
	setUp: function (done) {
		this.val = [0, 1, 1, 1, 2];
		this.a   = 1;
		this.b   = 3;
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.rindex(this.val, this.a), 3, "Should be '3'");
		test.equal(array.rindex(this.val, this.b), -1, "Should be '-1'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.rindex(this.a), 3, "Should be '3'");
		test.equal(this.val.rindex(this.b), -1, "Should be '-1'");
		test.done();
	}
};

exports["rotate"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.rotate(this.val, 3)[0], 2, "Should be '2'");
		test.equal(array.rotate(this.val, -2)[0], 3, "Should be '3'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.rotate(3)[0], 2, "Should be '2'");
		test.equal(this.val.rotate(-2)[0], 3, "Should be '3'");
		test.done();
	}
};

exports["series"] = {
	setUp: function (done) {
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.series(0, 5).length, 5, "Should be 5");
		test.equal(array.series(0, 5).last(), 4, "Should be 4");
		test.equal(array.series(0, 25, 5).length, 5, "Should be 5");
		test.equal(array.series(0, 25, 5).last(), 20, "Should be 20");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal([].series(0, 5).length, 5, "Should be 5");
		test.equal([].series(0, 5).last(), 4, "Should be 4");
		test.equal([].series(0, 25, 5).length, 5, "Should be 5");
		test.equal([].series(0, 25, 5).last(), 20, "Should be 20");
		test.done();
	}
};

exports["split"] = {
	setUp: function (done) {
		this.lower = 21;
		this.upper = 100;
		done();
	},
	lower: function (test) {
		var i      = -1,
		    ar     = [],
		    result = this.lower - 1;

		while (++i < this.lower) ar.push(i);

		test.expect(6);
		test.equal(array.split(ar, 3).length, 3, "Should be '3'");
		test.equal(array.split(ar, 3)[0].length, 7, "Should be '7'");
		test.equal(array.split(ar, 3).last().last(), result, "Should be '" + result + "'");
		test.equal(ar.split(3).length, 3, "Should be '3'");
		test.equal(ar.split(3)[0].length, 7, "Should be '7'");
		test.equal(ar.split(3).last().last(), result, "Should be '" + result + "'");
		test.done();
	},
	upper: function (test) {
		var i      = -1,
		    ar     = [],
		    result = this.upper - 1;

		while (++i < this.upper) ar.push(i);

		test.expect(6);
		test.equal(array.split(ar, 43).length, 43, "Should be '43'");
		test.equal(array.split(ar, 43)[0].length, 3, "Should be '3'");
		test.equal(array.split(ar, 43).last().last(), result, "Should be '" + result + "'");
		test.equal(ar.split(43).length, 43, "Should be '43'");
		test.equal(ar.split(43)[0].length, 3, "Should be '3'");
		test.equal(ar.split(43).last().last(), result, "Should be '" + result + "'");
		test.done();
	}
};

exports["sort"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz", "A", "d", 123];
		done();
	},
	direct: function (test) {
		test.expect(5);
		test.equal(this.val.sort(array.sort)[0], 123, "Should be 123");
		test.equal(this.val[1], "A", "Should be 'A'");
		test.equal(this.val[2], "abc", "Should be 'abc'");
		test.equal(this.val[3], "d", "Should be 'd'");
		test.equal(this.val[4], "xyz", "Should be 'xyz'");
		test.done();
	}
};

exports["stddev"] = {
	setUp: function (done) {
		this.val = [1, 3, 5];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.stddev(this.val), 1.632993161855452, "Should be '1.632993161855452'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.stddev(), 1.632993161855452, "Should be '1.632993161855452'");
		test.done();
	}
};

exports["sum"] = {
	setUp: function (done) {
		this.val = [1, 3, 5];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.sum(this.val), 9, "Should be '9'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.sum(), 9, "Should be '9'");
		test.done();
	}
};

exports["take"] = {
	setUp: function (done) {
		this.val = [0, 1, 2, 3, 4];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.take(this.val, 1)[0], 0, "Should be '0'");
		test.equal(array.take(this.val, 3).length, 3, "Should be '3'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.take(1)[0], 0, "Should be '0'");
		test.equal(this.val.take(3).length, 3, "Should be '3'");
		test.done();
	}
};

exports["total"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz"];
		this.val.someProperty      = true;
		this.val.someOtherProperty = true;
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.total(this.val), 4, "Should be 4");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.total(), 4, "Should be 4");
		test.done();
	}
};

exports["toObject"] = {
	setUp: function (done) {
		this.val = ["abc", "xyz", "A", "d", 123];
		done();
	},
	direct: function (test) {
		test.expect(2);
		test.equal(array.toObject(this.val) instanceof Object, true, "Should be true");
		test.equal(this.val["0"], "abc", "Should be 'abc'");
		test.done();
	},
	sugar: function (test) {
		test.expect(2);
		test.equal(this.val.toObject() instanceof Object, true, "Should be true");
		test.equal(this.val["0"], "abc", "Should be 'abc'");
		test.done();
	}
};

exports["unique"] = {
	setUp: function (done) {
		this.val = [0, 1, 1, 2, 2, 3];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.unique(this.val).length, 4, "Should be '4'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.unique().length, 4, "Should be '4'");
		test.done();
	}
};

exports["variance"] = {
	setUp: function (done) {
		this.val = [1, 3, 5];
		done();
	},
	direct: function (test) {
		test.expect(1);
		test.equal(array.variance(this.val), 2.6666666666666665, "Should be '2.6666666666666665'");
		test.done();
	},
	sugar: function (test) {
		test.expect(1);
		test.equal(this.val.variance(), 2.6666666666666665, "Should be '2.6666666666666665'");
		test.done();
	}
};

exports["zip"] = {
	setUp: function (done) {
		this.val = [0, 1];
		this.a   = 1;
		done();
	},
	direct: function (test) {
		test.expect(4);
		test.equal(array.zip(this.val, this.a).length, 2, "Should be 2");
		test.equal(array.zip(this.val, this.a)[0].length, 2, "Should be 2");
		test.equal(array.zip(this.val, this.a)[1].length, 2, "Should be 2");
		test.equal(array.zip(this.val, this.a)[1][1], null, "Should be null");
		test.done();
	},
	sugar: function (test) {
		test.expect(4);
		test.equal(this.val.zip(this.a).length, 2, "Should be 2");
		test.equal(this.val.zip(this.a)[0].length, 2, "Should be 2");
		test.equal(this.val.zip(this.a)[1].length, 2, "Should be 2");
		test.equal(this.val.zip(this.a)[1][1], null, "Should be null");
		test.done();
	}
};