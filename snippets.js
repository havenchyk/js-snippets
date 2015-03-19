//Replacement for jquery function with shortcut
var $ = function(selector) {
	return document.querySelectorAll(selector);
}

//for performance can be used: 
//document.getElementById
//getElementsByClassName
//getElementsByTagName

//replacement for $('<div/>')
var createElement = funciton(elName) {
	return document.createElement(elName);
}

//jQuery on:
//$('div').on('click', function() {
//
//});
function on(eventName, selector) {
		[].forEach.call($(selector), function ($el) {
  			$el.addEventListener(eventName, function() {
		});
	});
}

//change attribute
function getAttr(selector, attrName) {
	return document.querySelector(selector).getAttribute(attrName);
}

function setAttr(selector, attrName, value) {
	return document.querySelector(selector).setAttribute(attrName, value);
}

//add/remove/toggle class
function addClass(className) {
	document.querySelector('.el').classList.add('class');
}

function removeClass(className) {
	document.querySelector('.el').classList.remove('class');
}

function toggleClass(className) {
	document.querySelector('.el').classList.toggle('class');
}


//append $('.el').append($('<div/>'));
function append(selector, elementToAppend) {
	document.querySelector(selector).appendChild(createElement(elementToAppend));
}

//clone: $('.el').clone();
function clone(selector) {
	return document.querySelector(selector).cloneNode(true);
}

//$('.el').remove
function remove(el) {
  var toRemove = document.querySelector(el);

  toRemove.parentNode.removeChild(toRemove);
}

//$('.el').parent()

function parent(selector) {
	return document.querySelector('.el').parentNode;
}

//$('.el').prev();
//$('.el').next();

function prev(selector) {
	return document.querySelector(selector).previousElementSibling;
}

function next(selector) {
	return document.querySelector(selector).nextElementSibling;
}