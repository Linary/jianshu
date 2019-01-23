import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }, {
        id: 2,
        title: '英超精华',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
    articleList: [{
        id: 1,
        title: '京东，永别了',
        desc: '昨日，刘强东一案彻底告一段落了；昨日，看透了商人“奸”的本质；昨日，我决定此生不会再用京东了！ 刘强东一案结束了，为摆脱罪名，他承认了背叛婚姻，...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/14386771-5a3d75f15e631c19.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: '顶级程序员',
        desc: '一说电脑相信大家都会想起程序员，因为他们所从事的行业正适合我们生活中电脑息息相关的。那么今天我们就来看一下关于程序员在全世界究竟有多少厉害的人？...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/14386771-5a3d75f15e631c19.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    }, {
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}