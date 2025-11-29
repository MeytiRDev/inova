import React from "react";
import HMMembers from "./members/HMMembers";
import HMAboutTeam from "./HMAboutTeam";

export default function HMain() {
  return (
    <div className="space-y-20">
      <HMAboutTeam />
      <HMMembers />
    </div>
  );
}
