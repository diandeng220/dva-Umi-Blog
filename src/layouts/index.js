import React from 'react';
import router from 'umi/router';
import styles from './index.less';
import NotFound from '../pages/404';

export default function Layout(props) {
    const state = {
        navs: [
            {
                name: 'about me',
                link: '/aboutme'
            },
            {
                name: 'picture',
                link: '/picture'
            },
            {
                name: 'blog',
                link: '/'
            },
        ],
    };

    function matchUrl(path, route) {
        let isMatch = true;
        if (route.path === path) {
            isMatch = false;
        } else if (route.routes) {
            isMatch = route.routes.every((subRoute) => matchUrl(path, subRoute));
        }
        return isMatch;
    }
    const isNotFound = matchUrl(props.location.pathname, props.route);
    return (
        <div className={`${styles.container} ${styles.fixNavContainer}`}>
            <div className={styles.nav}>
                <ul>
                    {
                        state.navs.map((nav, index) => {
                            return (
                                <li
                                    key={index}
                                    className={props.location.pathname === nav.link ? styles.action : {}}
                                    onClick={() => {
                                        router.push(nav.link);
                                    }}
                                >
                                    <span className={styles.navName}>{nav.name}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={styles.title}>caic blog</div>
            </div>
            <div className={styles.router}>
                {
                    isNotFound ? <NotFound/> : props.children
                }
            </div>
        </div>
    );
}
