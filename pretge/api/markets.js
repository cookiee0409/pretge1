export default async function handler(req, res) {

  const r = await fetch(
    "https://gamma-api.polymarket.com/markets"
  )

  const data = await r.json()

  res.status(200).json(data)

}