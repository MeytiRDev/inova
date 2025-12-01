"use client";
import CResult from "@/components/antd/CResult";
import Card from "@/components/card/Card";
import CardDescription from "@/components/card/CardDescription";
import CardPicture from "@/components/card/CardPicture";
import CardTitle from "@/components/card/CardTitle";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { roles } from "@/store/roles";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "antd";
import axios from "axios";
import { Fragment } from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

type MembersSchema = {
  id: string;
  full_name: string;
  bio: string;
  avatar: string;
  role: keyof typeof roles;
};

export default function HMMembers() {
  const members: any = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const members = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`,
      });

      const finallyData: object[] = [];

      await Promise.all(
        members.data.map(async (member: any) => {
          try {
            const avatar = await axios({
              method: "GET",
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/media/member/${member.id}`,
              responseType: "blob",
            });

            finallyData.push({
              ...member,
              avatar:
                avatar.data instanceof Blob
                  ? URL.createObjectURL(avatar.data)
                  : null,
            });
          } catch (err) {
            finallyData.push(member);
          }
        })
      );

      return finallyData;
    },
  });

  return (
    <PrimarySection>
      <SecondryTitle title="اعضای تیم اینوا" icon={<HiOutlineUsers />} />
      <div
        className={twMerge(
          members
            ? "w-full flex items-center justify-center @max-md:flex-col gap-5"
            : null
        )}
      >
        {members?.data ? (
          members?.data?.map((member: MembersSchema) => {
            return (
              <Fragment key={member.id}>
                <Badge.Ribbon text={roles[member.role]} color="#013125">
                  <Card>
                    <CardPicture avatar={member.avatar} url={`/dv/${member.id}`} />
                    <div className="p-3">
                      <CardTitle title={member.full_name} url={`/dv/${member.id}`} />
                      <CardDescription description={member.bio} />
                    </div>
                  </Card>
                </Badge.Ribbon>
              </Fragment>
            );
          })
        ) : (
          <CResult title="در حال حاضر اطلاعاتی درباره اعضا درج نشده" />
        )}
      </div>
    </PrimarySection>
  );
}
