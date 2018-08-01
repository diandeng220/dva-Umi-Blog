import React from 'react';
import router from 'umi/router';
import styles from './index.less';

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
                name: 'blog article',
                link: '/'
            },
        ],
    };
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
                    props.children
                }
            </div>
        </div>
    );
}
