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
import { membersRole } from "@/store/roles";
import DVEducation from "./components/DVEducations";

async function getUserInformation(uri: string) {
  const member = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/${uri}`,
  });
  const avatar = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/media/member/${uri}`,
    responseType: "blob",
  })
    .then((data) => data)
    .catch(() => {});

  return {
    ...member.data,
    avatar:
      avatar?.data instanceof Blob ? URL.createObjectURL(avatar.data) : null,
  };
}

export default function DeveloperPage() {
  const { uri } = useParams();

  const { data } = useQuery({
    queryKey: ["member", uri],
    queryFn: () => getUserInformation(uri as string),
  });

  return (
    <div className="custom-container min-h-screen space-y-52 max-md:space-y-32 py-32! max-md:py-18!">
      <div className="space-y-20 @max-md:space-y-14">
        <div className="flex justify-between max-md:flex-col-reverse gap-5 max-md:gap-20">
          <div className="w-1/2 max-md:w-full space-y-5 max-md:space-y-3">
            {data?.full_name || data?.bio ? (
              <>
                <div className="flex items-center max-md:flex-col gap-2">
                  <PrimaryTitle title={data?.full_name} />
                  <div className="empty:hidden bg-green-600/15 font-dana-medium text-green-600 rounded-xl px-2 py-1">
                    {membersRole[data?.role as keyof typeof membersRole]?.title}
                  </div>
                </div>
                <PrimaryDescription
                  description={data?.bio}
                  className="max-md:text-center"
                />
                {data?.description?.length ? (
                  <DVAbout about={data?.description} />
                ) : null}
              </>
            ) : null}
          </div>

          {data?.avatar ? (
            <Avatar src={data?.avatar} className="size-80 max-md:size-72" />
          ) : null}
        </div>

        {data?.work_experiences?.length ? (
          <DVExperience experience={data?.work_experiences} />
        ) : null}

        {data?.educations?.length ? (
          <DVEducation
            isData={data?.educations?.length}
            educations={data?.educations}
          />
        ) : null}

        {data?.skills?.length ? <DVSkills skills={data?.skills} /> : null}

        {data?.projects?.length ? (
          <DVProjects projects={data?.projects} />
        ) : null}

        {data?.achievements?.length ? (
          <DVhacathons hacathon={data?.achievements} />
        ) : null}
      </div>
    </div>
  );
}
