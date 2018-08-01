import React from 'react';
import styles from './index.less';
import router from 'umi/router';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.errorCode}>404</div>
            <div>
                <p>Don't go around</p>
                <p>There's nothing you want here</p>
            </div>
            <div
                className={styles.return}
            >
                <span
                    className={styles.returnText}
                    onClick={() => {
                        router.push('/');
                    }}
                >return to blog</span>
            </div>
        </div>
    );
}
