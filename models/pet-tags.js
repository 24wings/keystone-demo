var keystone = require('keystone'),
    Types = keystone.Field.Types;

var PetTags = new keystone.List('PetTags', {
    label: '宠物标签',
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

PetTags.add({
    title: { type: String, required: true, initial: true },
    createdAt: { type: Types.Date }
});

PetTags.register();