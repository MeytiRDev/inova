"use client";
import CResult from "@/components/antd/CResult";
import Card from "@/components/card/Card";
import CardBadge from "@/components/card/CardBadge";
import CardDescription from "@/components/card/CardDescription";
import CardPicture from "@/components/card/CardPicture";
import CardTitle from "@/components/card/CardTitle";
import PrimarySection from "@/components/section/PrimarySection";
import { membersRole } from "@/store/roles";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

type MembersSchema = {
  id: string;
  full_name: string;
  bio: string;
  avatar: string;
  role: keyof typeof membersRole;
};

async function getMembers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team`);
    const json = await response?.json();
    return json;
  } catch (error) {}
}

export default function MembersSectionCards() {
  const members = useQuery({ queryKey: ["members"], queryFn: getMembers });

  return (
    <PrimarySection>
      <div
        className={twMerge(
          "grow",
          members.data ? "grid grid-cols-3 max-md:grid-cols-1 gap-5" : null
        )}
      >
        {!members?.isPending ? (
          members.data ? (
            members?.data?.map((member: MembersSchema) => {
              return (
                <Fragment key={member.id}>
                  <Card>
                    <CardBadge
                      icon={membersRole[member.role].icon}
                      title={membersRole[member.role].title}
                    />

                    <CardPicture
                      avatar={`${process.env.NEXT_PUBLIC_BASE_URL}/team/media/member/${member.id}`}
                      url={`/dv/${member.id}`}
                    />
                    <div className="p-3">
                      <CardTitle
                        title={member.full_name}
                        url={`/dv/${member.id}`}
                      />
                      <CardDescription description={member.bio} />
                    </div>
                  </Card>
                </Fragment>
              );
            })
          ) : (
            <CResult title="در حال حاضر اطلاعاتی درباره اعضا درج نشده" />
          )
        ) : (
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="animate-pulse h-[376px] bg-bg-secondry rounded-xl"
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </PrimarySection>
  );
}
