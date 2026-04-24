import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Used for sale display',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Sale', value: 'sale' },
          { title: 'Limited', value: 'limited' },
        ],
      },
    }),
    defineField({
      name: 'region',
      title: 'Region (World)',
      type: 'string',
      options: {
        list: [
          { title: 'British', value: 'British' },
          { title: 'American', value: 'American' },
          { title: 'Japanese', value: 'Japanese' },
          { title: 'European', value: 'European' },
          { title: 'Global', value: 'Global' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Sweet Type',
      type: 'string',
      options: {
        list: [
          { title: 'Gummies', value: 'Gummies' },
          { title: 'Chocolate', value: 'Chocolate' },
          { title: 'Hard Candy', value: 'Hard Candy' },
          { title: 'Sour', value: 'Sour' },
          { title: 'Licorice', value: 'Licorice' },
          { title: 'Retro', value: 'Retro' },
        ],
      },
    }),
    defineField({
      name: 'diet',
      title: 'Dietary Info',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegan', value: 'Vegan' },
          { title: 'Halal', value: 'Halal' },
          { title: 'Gluten-Free', value: 'Gluten-Free' },
          { title: 'Sugar-Free', value: 'Sugar-Free' },
        ],
      },
    }),
    defineField({
      name: 'occasion',
      title: 'Occasion',
      type: 'string',
      options: {
        list: [
          { title: 'Gift', value: 'Gift' },
          { title: 'Self-Treat', value: 'Self-Treat' },
          { title: 'Party', value: 'Party' },
          { title: 'Wedding', value: 'Wedding' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'brand',
    },
  },
});
