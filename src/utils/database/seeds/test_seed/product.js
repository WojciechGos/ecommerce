/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// const knex = require('../../index')

const products = [
    {
        name: 'test0',
        price: 0,
        image_name: 'products/image0.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 0,
        brand: 'Birdy',
        type: 'Sofa'
    },
    {
        name: 'test1',
        price: 1,
        image_name: 'products/image1.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 1,
        brand: 'Birdy',
        type: 'Spring'
    },
    {
        name: 'test2',
        price: 2,
        image_name: 'products/image2.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 2,
        brand: 'Birdy',
        type: 'Desk Chair'
    },
    {
        name: 'test3',
        price: 3,
        image_name: 'products/image3.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 3,
        brand: 'Birdy',
        type: 'Air Chair'
    },
    {
        name: 'test4',
        price: 4,
        image_name: 'products/image4.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 4,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test5',
        price: 5,
        image_name: 'products/image5.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 5,
        brand: 'Birdy',
        type: 'Chair'
    },
    {
        name: 'test6',
        price: 6,
        image_name: 'products/image6.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 6,
        brand: 'Birdy',
        type: 'Wine Rack'
    },
    {
        name: 'test7',
        price: 7,
        image_name: 'products/image7.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 7,
        brand: 'Birdy',
        type: 'Play Pool'
    },
    {
        name: 'test8',
        price: 8,
        image_name: 'products/image8.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 8,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test9',
        price: 9,
        image_name: 'products/image9.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 9,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test10',
        price: 10,
        image_name: 'products/image10.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 10,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test11',
        price: 11,
        image_name: 'products/image11.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 10,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test12',
        price: 12,
        image_name: 'products/image12.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        rating: 10,
        brand: 'Lovely',
        type: 'Coir'
    }
]
const populate = async (knex) => {
    const result = await knex('product').insert(products)
    // console.log(result);
    return result
};
module.exports = populate

