//
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
//import Image from "next/image";


export default async function Home({searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || '10',
    model: searchParams.model || '',
    year: searchParams.year || '2022',
  
  });


const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      {/*<Hero/>*/}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
              Financial Insights: <span className="text-gray-100 gray-highlight">Trusted Source for Updates on Sustainable Finance and Grants</span><span className="text-black-100">{" "}.</span>
          </h1>
          <h2 className="red-color">Stay Informed, Stay Ahead.</h2>
        </div>

        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/> {/* Newsletter / Blog / */}
            <CustomFilter title="year" options={yearsOfProduction}/> {/* Year / */}
          </div>
        </div>


      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => 
            <CarCard car={car}/>)}
          </div>
        </section>
      ):(
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">
            Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}

        

      </div>
    </main>
  );
}


