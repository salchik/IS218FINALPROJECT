import { Button } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

export default function About() {
    return (
      <div className="flex min-h-screen">
        <RestNav/>
        <RestFooter/>
      </div>
    )
  }