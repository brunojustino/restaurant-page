export const pageChange = (c, link, oldLink) => {
    c.replaceChild(link, oldLink)
    return link
}


export const createLink = (name) => {
    let li = ce("li")
    li.className = "hvr-glow"
    let a = ce("a")
    a.id = name
    a.className = "links link glow"
    a.textContent = name
    li.appendChild(a)
    return li
}

export const ce = (s) => {
    return document.createElement(s)
}