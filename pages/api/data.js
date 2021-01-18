import getData from "../../utils/getData"

export default async function (req, res) {
  const data = await getData("/api/data")

  res.json(data)
}
