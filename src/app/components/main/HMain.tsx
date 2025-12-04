import HMMembers from "./members/HMMembers";
import HMAboutTeam from "./HMAboutTeam";

export default function HMain() {
  return (
    <div className="space-y-20 max-md:space-y-14">
      <HMAboutTeam />
      <HMMembers />
    </div>
  );
}
