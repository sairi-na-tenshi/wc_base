var FPoly= function(){
	var map= arguments
	return function(){
		return map[ arguments.length ].apply( this, arguments )
	}
}
