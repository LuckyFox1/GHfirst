function perform(nonce, cb) {
	var q = [];
	
	var next = function(param) {
		var callback = q.shift();
		if (callback) {
			var ret = callback(param);
			next(ret);
		}
	}

	var then = function(cb) {
		q.push(cb);
		return { then: then }
	}

	var firstParam = cb();
	setTimeout(() => { next(firstParam); }, 0);

	return { then: then };
}

perform(null, function() {
	var param = 1;
	console.log(param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
});
