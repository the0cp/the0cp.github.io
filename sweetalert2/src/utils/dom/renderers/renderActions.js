import{swalClasses}from"../../classes.js";import*as dom from"../../dom/index.js";import{capitalizeFirstLetter}from"../../utils.js";export const renderActions=(t,o)=>{const e=dom.getActions(),n=dom.getLoader(),s=dom.getConfirmButton(),l=dom.getDenyButton(),r=dom.getCancelButton();o.showConfirmButton||o.showDenyButton||o.showCancelButton||dom.hide(e),dom.applyCustomClass(e,o,"actions"),renderButton(s,"confirm",o),renderButton(l,"deny",o),renderButton(r,"cancel",o),handleButtonsStyling(s,l,r,o),o.reverseButtons&&(e.insertBefore(r,n),e.insertBefore(l,n),e.insertBefore(s,n)),dom.setInnerHtml(n,o.loaderHtml),dom.applyCustomClass(n,o,"loader")};function handleButtonsStyling(t,o,e,n){if(!n.buttonsStyling)return dom.removeClass([t,o,e],swalClasses.styled);dom.addClass([t,o,e],swalClasses.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.denyButtonColor&&(o.style.backgroundColor=n.denyButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor)}function renderButton(t,o,e){dom.toggle(t,e[`show${capitalizeFirstLetter(o)}Button`],"inline-block"),dom.setInnerHtml(t,e[`${o}ButtonText`]),t.setAttribute("aria-label",e[`${o}ButtonAriaLabel`]),t.className=swalClasses[o],dom.applyCustomClass(t,e,`${o}Button`),dom.addClass(t,e[`${o}ButtonClass`])}