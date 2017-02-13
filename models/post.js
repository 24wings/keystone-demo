var keysone = require('keystone'),
    Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
    autokey: { from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Post.add({
    title: { type: String, require: true },
    state: { type: Types.select, options: '草稿,发布,存档', default: '草稿' },
    author: { type: Types.Relationship, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    publishAt: Date,
    image: { type: Types.CloudinaryImage },
    content: {
        brief: { label: '简要', type: Types.HTML, wysiwyg: true, height: 150 },
        extended: { label: '内容', type: Types.HTML, wysiwyg: true, height: 400 }
    }
});


Post.register();