var keystone = require('keystone'),
    Types = keystone.Field.Types;


var PetLife = new keystone.List('PetLife', {
    label: '宠物生活',
    map: { name: 'title' },
    defaultSort: '-createdAt'
});
// PetLife.relationship({path:'posts',ref:'',refPath:''});

PetLife.add({
    title: { label: '标题', initial: true, type: String, required: true },
    createdAt: { label: '发布时间', type: Date, default: Date.now, required: true, initial: true },
    image: { label: '图片', type: Types.CloudinaryImages, folder: 'images/' },
    sourceWebsite: { label: '来源', type: String },
    articleSource: { label: '文章出处', type: String },
    author: { label: '作者', type: String },
    content: { label: '文章内容', type: Types.Html, wysiwyg: true }
});

PetLife.register();