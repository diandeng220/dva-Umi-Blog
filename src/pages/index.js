import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { transferNumber } from '@/utils';
import moment from 'moment';

function IndexPage(props) {
    const { articleList } = props.global;
    return (
        <div className={styles.articleList}>
            {
                articleList.map((article, index) => {
                    return (
                        <div key={index} className={styles.article}>
                            <div className={styles.title}>
                                <span className={styles.titleLetter}>{article.title}</span>
                            </div>
                            <div className={styles.subscription}>{article.description}</div>
                            <div className={styles.info}>
                                <div className={`${styles.infoItem} ${styles.infoTime}`}>{moment(article.createDate).format('YYYY.MM.DD')}</div>
                                <div className={`${styles.infoItem} ${styles.infoVisited}`}>visited: {transferNumber(article.visited)}</div>
                                <div className={`${styles.infoItem} ${styles.infoLike}`}>like: {transferNumber(article.like)}</div>
                                <div className={`${styles.infoItem} ${styles.infoCommit}`}>commit: {transferNumber(article.commit)}</div>
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
