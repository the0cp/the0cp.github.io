import Promise from"./index";import promiseFinally from"./finally";import allSettled from"./allSettled";var globalNS=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"function"!=typeof globalNS.Promise?globalNS.Promise=Promise:globalNS.Promise.prototype.finally?globalNS.Promise.allSettled||(globalNS.Promise.allSettled=allSettled):globalNS.Promise.prototype.finally=promiseFinally;