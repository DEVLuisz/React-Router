import { Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function PageDefault(){
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}