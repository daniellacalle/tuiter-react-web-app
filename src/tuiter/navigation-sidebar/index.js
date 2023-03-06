import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a href="." className="list-group-item">
                <i className="bi bi-twitter pe-2"></i>
                Tuiter</a>
            <a href="." className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill pe-2"></i>
                Home
            </a>
            <a href="." className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash pe-2"></i>
                Explore
            </a>
            <a href="." className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill pe-2"></i>
                Notifications
            </a>
            <a href="." className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill pe-2"></i>
                Messages
            </a>
            <a href="." className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill pe-2"></i>
                Bookmarks
            </a>
            <a href="." className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul pe-2"></i>
                Lists
            </a>
            <a href="." className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill pe-2"></i>
                Profile
            </a>
            <a href="." className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots pe-2"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;

