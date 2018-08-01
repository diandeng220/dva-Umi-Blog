import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { transferNumber } from '@/utils';
import moment from 'moment';

function IndexPage(props) {
    const { blogList } = props.global;
    return (
        <div className={styles.blogList}>
            {
                blogList.map((blog, index) => {
                    return (
                        <div key={index} className={styles.blog}>
                            <div className={styles.title}>
                                <span className={styles.titleLetter}>{blog.title}</span>
                            </div>
                            <div className={styles.subscription}>{blog.description}</div>
                            <div className={styles.info}>
                                <div className={`${styles.infoItem} ${styles.infoTime}`}>{moment(blog.createDate).format('YYYY.MM.DD')}</div>
                                <div className={`${styles.infoItem} ${styles.infoVisited}`}>visited: {transferNumber(blog.visited)}</div>
                                <div className={`${styles.infoItem} ${styles.infoLike}`}>like: {transferNumber(blog.like)}</div>
                                <div className={`${styles.infoItem} ${styles.infoCommit}`}>commit: {transferNumber(blog.commit)}</div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default connect(({ global }) => {
    return {
        global
    };
})(IndexPage);
