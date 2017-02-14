var keystone = require('keystone'),
    Types = keystone.Field.Types;


var PetAction = new keystone.List('PetAction', {
    map: { name: 'title' },
    label: '宠物行为',
    defaultSort: '-createdAt'
});



PetAction.add({
    title: { label: '宠物行为标题', type: String, initial: true, type: String, required: true },
    createdAt: { label: '发布时间', type: Date, default: Date.now, required: true, initial: true },
    image: { label: '图片', type: Types.CloudinaryImages, folder: 'images/' },
    sourceWebsite: { label: '来源', type: String, default: '动物网' },
    articleSource: { label: '文章出处', type: String, default: '动物网' },
    author: { label: '作者', type: String, default: '动物学家' },
    brief: { label: '摘要', type: Types.Html, wysiwyg: true },
    content: { label: '文章内容', type: Types.Html, wysiwyg: true },
    tags: { label: '标签组', type: Types.Relationship, many: true, ref: 'PetTags' },
    file: {
        label: '文件',
        type: Types.Embedly,
        from: 'path',
        options: {
            file: 'video',
            video_file: ''
        }
    }
});


PetAction.register();