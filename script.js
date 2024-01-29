function bold() { 
	document.getElementById("textarea").style.fontWeight = "bold"; 
} 

function italic() { 
		document.getElementById("textarea").style.fontStyle = "italic"; 
} 

function uppercase() { 
	
	document.getElementById("textarea").style.textTransform = "uppercase"; 
} 

function lowercase() { 
	
	document.getElementById("textarea").style.textTransform = "lowercase"; 
} 

function clear() { 
	const space = doucument.getElementById("textarea");
	space.value = ''; 
}
