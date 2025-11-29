"use client";
import DVAbout from "./components/DVAbout";
import DVExperience from "./components/DVExperience";
import DVSkills from "./components/DVSkills";
import DVProjects from "./components/DVProjects";
import DVhacathons from "./components/DVHacathon";
import Avatar from "@/components/Avatar";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import PrimaryDescription from "@/components/description/PrimaryDescription";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function DeveloperPage() {
  const { uri } = useParams();

  const { data } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const member = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/${uri}`,
      });
      const avatar = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/media/member/${uri}`,
        responseType: "blob",
      });

      return {
        ...member.data,
        avatar:
          avatar.data instanceof Blob ? URL.createObjectURL(avatar.data) : null,
      };
    },
  });

  return (
    <div className="@min-4xl:max-w-4xl mx-auto pt-16 pb-26 @max-md:pb-20 @max-md:pt-0">
      <div className="space-y-20">
        <div className="flex items-center justify-center gap-5">
          <div className="space-y-5">
            <PrimaryTitle title={data?.full_name} />
            <PrimaryDescription description={data?.bio} />
          </div>
          <Avatar src={data?.avatar} className="size-60" />
        </div>
        <DVAbout about={data?.bio} />
        <DVExperience experience={data?.work_experiences} />
        <DVSkills skills={data?.skills} />
        <DVProjects projects={data?.projects} />
        <DVhacathons hacathon={data?.achievements} />
      </div>
    </div>
  );
}
