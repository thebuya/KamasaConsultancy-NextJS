import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    textStyles:string;
    rightIcon:string;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface BlogProps{
    id: number;
    heading: string;
    type:string;
    year:number;
    author:string;
}

export interface CeramicProps{
    id: number;
    heading: string;
    style:string;
    height:number;
    width:number;

}
export interface CarProps{
    id: number;
    car:string;
    type:string;
    year:number;
    model:string;
    make:string;
    transmission:string;
}


export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
export interface OptionProps{
    title: string,
    type:string
    value: string,
}
export interface  CustomFilterProps{
    title: string,
    options: OptionProps[];
    
}