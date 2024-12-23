import { createElementTree } from "./createElementTree";
import { mainData } from "../components/mainData";
import { navData } from "../components/navData"

export function createView(){
    const navElement = createElementTree(navData)
    const mainElement = createElementTree(mainData)

    console.log(typeof nav)
    console.log(typeof main)
    return { navElement, mainElement }

}