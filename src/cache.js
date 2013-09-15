/**
 * @namespace abaaso.cache
 * @private
 */
var cache = {
	/**
	 * Collection URIs
	 *
	 * @memberOf abaaso.cache
	 * @type {Object}
	 */
	items : {},

	/**
	 * Garbage collector for the cached items
	 *
	 * @method clean
	 * @memberOf abaaso.cache
	 * @return {undefined} undefined
	 */
	clean : function () {
		return utility.iterate( cache.items, function ( v, k ) {
			if ( cache.expired( k ) ) {
				cache.expire( k, true );
			}
		});
	},

	/**
	 * Expires a URI from the local cache
	 *
	 * Events: expire    Fires when the URI expires
	 *
	 * @method expire
	 * @memberOf abaaso.cache
	 * @param  {string}  uri    URI of the local representation
	 * @param  {boolean} silent [Optional] If 'true', the event will not fire
	 * @return {undefined}      undefined
	 */
	expire : function ( uri, silent ) {
		silent = ( silent === true );
		if ( cache.items[uri] !== undefined ) {
			delete cache.items[uri];

			if ( !silent ) {
				observer.fire( uri, "beforeExpire, expire, afterExpire" );
			}

			return true;
		}
		else {
			return false;
		}
	},

	/**
	 * Determines if a URI has expired
	 *
	 * @method expired
	 * @memberOf abaaso.cache
	 * @param  {object} uri Cached URI object
	 * @return {boolean}    True if the URI has expired
	 */
	expired : function ( uri ) {
		var item = cache.items[uri];

		return item !== undefined && item.expires !== undefined && item.expires < new Date();
	},

	/**
	 * Returns the cached object {headers, response} of the URI or false
	 *
	 * @method get
	 * @memberOf abaaso.cache
	 * @param  {string}  uri    URI/Identifier for the resource to retrieve from cache
	 * @param  {boolean} expire [Optional] If 'false' the URI will not expire
	 * @param  {boolean} silent [Optional] If 'true', the event will not fire
	 * @return {mixed}          URI Object {headers, response} or False
	 */
	get : function ( uri, expire ) {
		uri    = utility.parse( uri ).href;
		expire = ( expire !== false );

		if ( cache.items[uri] === undefined ) {
			return false;
		}

		if ( expire && cache.expired( uri ) ) {
			cache.expire( uri );

			return false;
		}

		return utility.clone( cache.items[uri], true );
	},

	/**
	 * Sets, or updates an item in cache.items
	 *
	 * @method set
	 * @memberOf abaaso.cache
	 * @param  {string} uri      URI to set or update
	 * @param  {string} property Property of the cached URI to set
	 * @param  {mixed} value     Value to set
	 * @return {mixed}           URI Object {headers, response} or undefined
	 */
	set : function ( uri, property, value ) {
		uri = utility.parse( uri ).href;

		if ( cache.items[uri] === undefined ) {
			cache.items[uri] = {};
			cache.items[uri].permission = 0;
		}

		if ( property === "permission" ) {
			cache.items[uri].permission |= value;
		}
		else if ( property === "!permission" ) {
			cache.items[uri].permission &= ~value;
		}
		else {
			cache.items[uri][property] = value;
		}

		return cache.items[uri];
	}
};
