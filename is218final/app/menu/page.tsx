import { Button } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

export default function Menu() {
    return (
      <div className="min-w-screen min-h-screen">
        <RestNav/>
        <RestFooter/>
      </div>
    )
  }