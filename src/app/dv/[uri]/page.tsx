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
import CAlert from "@/components/antd/CAlert";
import { roles } from "@/store/roles";
import DVEducation from "./components/DVEducations";

export default function DeveloperPage() {
  const { uri } = useParams();

  const { data } = useQuery({
    queryKey: ["member", uri],
    queryFn: async () => {
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
          avatar?.data instanceof Blob
            ? URL.createObjectURL(avatar.data)
            : null,
      };
    },
  });

  return (
    <div className="@min-4xl:max-w-4xl mx-auto pt-16 pb-26 @max-md:pb-20 @max-md:pt-10 @max-md:px-3">
      <div className="space-y-20 @max-md:space-y-14">
        <div className="flex items-center justify-center @max-md:flex-col-reverse gap-5">
          <div className="grow space-y-5 max-md:space-y-3">
            {data?.full_name || data?.bio ? (
              <>
                <div className="flex items-center gap-2">
                  <PrimaryTitle title={data?.full_name} />
                  <div className="empty:hidden bg-green-600/15 font-dana-medium text-green-600 rounded-xl px-2 py-1">
                    {roles[data?.role]}
                  </div>
                </div>
                <PrimaryDescription
                  description={data?.bio}
                  className="max-md:text-center"
                />
              </>
            ) : (
              <div className="">
                <CAlert
                  alertProps={{
                    title: "در حال حاظر اطلاعاتی درج نشده است",
                  }}
                />
              </div>
            )}
          </div>
          <Avatar src={data?.avatar} className="size-72" />
        </div>
        <DVAbout about={data?.description} />
        <DVExperience experience={data?.work_experiences} />
        <DVEducation
          isData={data?.educations?.length}
          educations={data?.educations}
        />
        <DVSkills skills={data?.skills} />
        <DVProjects projects={data?.projects} />
        <DVhacathons hacathon={data?.achievements} />
      </div>
    </div>
  );
}
