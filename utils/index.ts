import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){

const response = await fetch("http://localhost:1997/api/myData");
const result = await response.json();
const allCars = [
    // Sample car objects
    { id: 1, make: "Toyota",type:"a", model: "Corolla", year: 2022 },
    { id: 2, make: "Honda", type:"b",model: "Civic", year: 2022 },
    { id: 3, make: "Ford", type:"c",model: "Mustang", year: 2023 },
    // ...
  ];
return result;
}

export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(
        window.location.search);
           
        searchParams.set(type,value)
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        return newPathname;
}