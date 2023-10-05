import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'song',
  title: 'song',
  type: 'document',
  icon,
  fields: [
    // defineField({
    //   name: 'name',
    //   title: 'name',
    //   type: 'song',
    // }),
     defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'video',
      type: 'file',
      options: {
        accept:'video/*',
      },
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'text',
      options: {
        hotspot: true,
      },
    }),
    
  ],
  preview: {
    select: {title: 'description', media: 'video'},
  },
})
