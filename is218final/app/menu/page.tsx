import { Button } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

export default function Menu() {
    return (
      <div className="flex min-h-screen">
        <RestNav/>
        <RestFooter/>
      </div>
    )
  }