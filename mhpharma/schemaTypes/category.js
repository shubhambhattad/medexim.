import {BiCategory} from 'react-icons/bi'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
