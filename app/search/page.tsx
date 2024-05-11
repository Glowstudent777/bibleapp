import { VersesNumber } from "@/components/BibleCards";
import SearchMain from "@/components/SearchMain";
import { Metadata } from "next";
import { VerseArray, getBibles } from "../fetch";

export const metadata: Metadata = {
    title:"Search"
}
export default function Search(){
  return (
    <>
      <SearchMain />
    </>
  )
}