var keystone = require('keystone'),
    Types = keystone.Field.Types;

var PetInformation = new keystone.List('PetInformation', {
    label: '宠物资讯',
    map: { name: 'title' },
    defaultSort: '-createdAt'
});


PetInformation.add({
    title: { label: '标题', initial: true, type: String, required: true },
    createdAt: { label: '发布时间', type: Date, default: Date.now, required: true, initial: true },
    image: { label: '图片', type: Types.CloudinaryImages, folder: 'images/' },
    sourceWebsite: { label: '来源', type: String },
    articleSource: { label: '文章出处', type: String },
    author: { label: '作者', type: String },
    brief: { label: '摘要', type: Types.Html, wysiwyg: true },
    content: { label: '文章内容', type: Types.Html, wysiwyg: true },
    tags: { label: '标签组', type: Types.Relationship, many: true, ref: 'PetTags' }

});

// 宠物信息注册
PetInformation.register();