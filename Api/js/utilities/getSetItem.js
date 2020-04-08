const setCookie = (name, value) => {
    return Cookies.set(name, value);
}
const getCookie = (name) => {
    return Cookies.get(name);
}
const removeCookies = (name) =>{
    return Cookies.remove(name);
}
const setLocal = (name, value) => {
    return localStorage.setItem(name, value);
}
const getLocal = (name) => {
    return localStorage.getItem(name);
}
const setSession = (name, value) => {
    return sessionStorage.setItem(name, value);
}
const getSession = (name) => {
    return sessionStorage.getItem(name);
}
const getMass = (string, split) => {
    return string.split(split);
}
const showBtn = (favorites, param) => {
    return (
        $(".grid-" + param).append(`
            <button type="button" data-param="${param}" class="btn btn-dark favorites-link">${favorites}</button>
        `)
    )
}
