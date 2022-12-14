let tests = [
    {
      input: 'https://cdn.shopify.com/e.jpg?v=15',
      size: '100x',
      output: 'https://cdn.shopify.com/e_100x.jpg?v=15'
    },
    {
      input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',
      size: 'x200',
      output: 'https://cdn.shopify.com/e_x200.jpg?v=15'
    },
    {
      input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',
      size: '100x',
      output: 'https://cdn.shopify.com/e-jpg_100x.jpg?v=15'
    },
    {
      input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
      size: 'x100',
      output: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15'
    },
    {
      input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',
      size: '100x200',
      output: 'https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15'
    }
]

const test2 = [
  {
    input: 'https://cdn.shopify.com/e.jpg?v=15',
    size: '100x',
  },
  {
    input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',
    size: 'x200',
  },
  {
    input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',
    size: '100x',
  },
  {
    input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
    size: 'x100',
  },
  {
    input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',
    size: '100x200',
  }
]

const reSizeImageItems = (arr) => {
  return arr.map(item => {
    const regex = /_?(\d+)?x?(\d+)?\.jpg\?v=15/
    return{
      ...item,
      output: item.input.replace(regex, `_${item.size}.jpg?v=15`)
    }
  })
}

console.log(reSizeImageItems(test2));