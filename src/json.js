/**
 * JSON methods
 *
 * @class json
 * @namespace abaaso
 */
var json = {
	/**
	 * Transforms JSON to CSV
	 * 
	 * @param  {String}  arg JSON  string to transform
	 * @param  {String}  delimiter [Optional] Character to separate fields
	 * @param  {Boolean} header    [Optional] False to not include field names as first row
	 * @return {String}            CSV string
	 */
	csv : function ( arg, delimiter, header ) {
		delimiter  = delimiter || ",";
		header     = ( header !== false );
		var obj    = json.decode( arg, true ) || arg,
		    result = "",
		    prepare;

		// Prepares input based on CSV rules
		prepare = function ( input ) {
			var output;

			if ( input instanceof Array ) {
				output = "\"" + input.toString() + "\"";

				if ( regex.object_type.test( output ) ) {
					//output = "\"" + json.csv( input, delimiter ) + "\""; // Possible, but since "\n" is not handled properly within all CSV parsers we'll leave it as JSON
					output = "\"" + json.encode( input ) + "\"";
				}
			}
			else if ( input instanceof Object ) {
				output = "\"" + json.encode( input ) + "\"";
			}
			else if ( regex.csv_quote.test( input ) ) {
				output = "\"" + input.replace( /\n/g, " " ).replace( /"/g, "\"\"" ) + "\"";
			}
			else {
				output = input;
			}

			return output;
		};

		if ( obj instanceof Array ) {
			if ( header ) {
				result  = ( array.keys( obj[0] ).join( delimiter ) + "\n" );
			}

			result += obj.map( function ( i ) {
				return json.csv( i, delimiter, false );
			}).join( "\n" );
		}
		else {
			if ( header ) {
				result = ( array.keys( obj ).join( delimiter ) + "\n" );
			}

			result += ( array.cast( obj ).map( prepare ).join( delimiter ) + "\n" );
		}

		return result.replace(/\n$/, "");
	},

	/**
	 * Decodes the argument
	 *
	 * @method decode
	 * @param  {String}  arg    String to parse
	 * @param  {Boolean} silent [Optional] Silently fail
	 * @return {Mixed}          Entity resulting from parsing JSON, or undefined
	 */
	decode : function ( arg, silent ) {
		try {
			return JSON.parse( arg );
		}
		catch ( e ) {
			if ( silent !== true ) {
				error( e, arguments, this );
			}

			return undefined;
		}
	},

	/**
	 * Encodes the argument as JSON
	 *
	 * @method encode
	 * @param  {Mixed}   arg    Entity to encode
	 * @param  {Boolean} silent [Optional] Silently fail
	 * @return {String}         JSON, or undefined
	 */
	encode : function ( arg, silent ) {
		try {
			return JSON.stringify( arg );
		}
		catch ( e ) {
			if ( silent !== true) {
				error( e, arguments, this );
			}

			return undefined;
		}
	}
};
