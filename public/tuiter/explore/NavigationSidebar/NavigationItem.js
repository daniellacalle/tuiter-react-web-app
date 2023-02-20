/* eslint-env jquery */
const NavigationItem = (navItem) => {
    return(`
    <a class="list-group-item ${navItem.active ? "active" : ""} text-decoration-none"  href="${navItem.link}">
        <i class="${navItem.icon}"></i>
        <span class="d-sm-none d-xl-inline-block">${navItem.name}</span>
</a>
    `);
}

export default NavigationItem;
