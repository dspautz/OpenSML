function SmlTree(){
	this.parameterName = undefined;
	this.parameterValue = undefined;
	this.childList = undefined;
};

SmlTree.prototype.getParameterName = function getParameterName(){
	return this.parameterName;
};

SmlTree.prototype.setParameterName = function setParameterName(value){
	this.parameterName = value;
};

SmlTree.prototype.getParameterValue = function getParameterValue(){
	return this.parameterValue;
};

SmlTree.prototype.setParameterValue = function setParameterValue(value){
	this.parameterValue = value;
};

SmlTree.prototype.getChildList = function getChildList(){
	return this.childList;
};

SmlTree.prototype.setChildList = function setChildList(value){
	this.childList = value;
};

SmlTree.prototype.write = function write(buffer){
	
};

SmlTree.parse = function parse(buffer){
	
};

module.exports = SmlTree;