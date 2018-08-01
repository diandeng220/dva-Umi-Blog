/**
 * 树结构替换Key
 *
 * @param {string|number} number 被转换对象
 * @param {string} lan 语言 默认en英文格式 (cn\en)
 * @return {string}
 */
export function transferNumber(number, lan = 'en') {
    number = Number(number);
    let result;
    switch (lan) {
        case 'cn':
            if (number >= 10000) {
                result = `${Math.floor(number / 1000) / 10}万`;
            } else if (number >= 100000000) {
                result = `${Math.floor(number / 10000000) / 10}亿`;
            } else {
                result = number;
            }
            break;
        default:
            if (number >= 1000) {
                result = `${Math.floor(number / 100) / 10}k`;
            } else if (number >= 1000000) {
                result = `${Math.floor(number / 100000) / 10}m`;
            } else {
                result = number;
            }
    }
    return result;
}
