import CResult from "@/components/antd/CResult";
import Card from "@/components/card/Card";
import CardBadge from "@/components/card/CardBadge";
import CardDescription from "@/components/card/CardDescription";
import CardPicture from "@/components/card/CardPicture";
import CardTitle from "@/components/card/CardTitle";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { roles } from "@/store/roles";
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

export default async function HMMembers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team`);
  const members = await res.json();

  return (
    <PrimarySection>
      <SecondryTitle title="اعضای تیم اینوا" icon={<HiOutlineUsers />} />
      <div
        className={twMerge(
          "grow",
          members ? "grid grid-cols-3 @max-md:grid-cols-1 gap-5" : null
        )}
      >
        {members ? (
          members?.map((member: MembersSchema) => {
            return (
              <Fragment key={member.id}>
                <Card>
                  <CardBadge>
                    <h4>{roles[member.role]}</h4>
                  </CardBadge>
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
        )}
      </div>
    </PrimarySection>
  );
}
