function finallyConstructor(t){var n=this.constructor;return this.then((function(r){return n.resolve(t()).then((function(){return r}))}),(function(r){return n.resolve(t()).then((function(){return n.reject(r)}))}))}export default finallyConstructor;