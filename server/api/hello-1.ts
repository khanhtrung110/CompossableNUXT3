export default defineEventHandler((event) => {
  const request = event.node.req
  
  return {
    hello: 'world',
    data2: `This to ${request.url}`,
    mountains: 'mountains',
  }
})

