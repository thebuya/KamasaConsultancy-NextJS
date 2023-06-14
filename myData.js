import { fetchCars } from "@/utils";

export default async function handler(req, res) {
  const { manufacturer = "", year = "2022", fuel = "", limit = "10", model = "" } = req.query;

  const allCars = await fetchCars({
    manufacturer,
    year,
    fuel,
    make,
    limit,
    model,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  if (!isDataEmpty) {
    res.status(200).json(allCars);
  } else {
    res.status(404).json({ message: "No results found" });
  }
}
