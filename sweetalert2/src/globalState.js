import{RESTORE_FOCUS_TIMEOUT}from"./constants.js";const globalState={};export default globalState;const focusPreviousActiveElement=()=>{globalState.previousActiveElement&&globalState.previousActiveElement.focus?(globalState.previousActiveElement.focus(),globalState.previousActiveElement=null):document.body&&document.body.focus()};export const restoreActiveElement=()=>new Promise((e=>{const t=window.scrollX,o=window.scrollY;globalState.restoreFocusTimeout=setTimeout((()=>{globalState.previousActiveElement&&globalState.previousActiveElement.focus?(globalState.previousActiveElement.focus(),globalState.previousActiveElement=null):document.body&&document.body.focus(),e()}),RESTORE_FOCUS_TIMEOUT),void 0!==t&&void 0!==o&&window.scrollTo(t,o)}));