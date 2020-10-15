// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  console.log(req.connection.remoteAddress)
  res.json(req)
}
