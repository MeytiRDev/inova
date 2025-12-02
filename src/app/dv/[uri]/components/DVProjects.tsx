import CResult from "@/components/antd/CResult";
import Card from "@/components/card/Card";
import CardDateTime from "@/components/card/CardDateTime";
import CardDescription from "@/components/card/CardDescription";
import CardPicture from "@/components/card/CardPicture";
import CardTitle from "@/components/card/CardTitle";
import PrimaryDescription from "@/components/description/PrimaryDescription";
import SecondryTitle from "@/components/title/SecondryTitle";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function DVProjects({ projects }: any) {
  const isProjects = projects && projects?.length;
  const isStartAndEndDate = projects?.start_date || projects?.end_date

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center">
        <p className="text-sm px-2 py-1 rounded-md dark:text-black dark:bg-white font-dana-medium bg-black text-white">
          آخرین پروژه ها{" "}
        </p>
      </div>
      <SecondryTitle
        title="آخرین پروژه های انجام شده"
        className="justify-center"
      />
      <PrimaryDescription
        description="من روی پروژه‌های متنوعی کار کرده‌ام، از وب‌سایت‌های ساده گرفته تا برنامه‌های وب پیچیده.
در ادامه چند تا از موردعلاقه‌هایم را می‌بینید."
        className="w-2/3 text-center mx-auto"
      />
      <div
        className={twMerge("", isProjects ? "grid grid-cols-3 gap-5" : null)}
      >
        {isProjects ? (
          projects?.map((project: any) => {
            return (
              <Fragment key={project?.id}>
                <Card>
                  <CardPicture
                    avatar={`${process.env.NEXT_PUBLIC_BASE_URL}/team/media/project/${project?.id}`}
                  />
                  <div className="p-3">
                    <CardTitle title={project.title} />
                    <CardDateTime
                      dateTime={`از ${project.start_date || ""} تا ${
                        project.end_date || ""
                      }`}
                    />
                    <CardDescription description={project?.description} />
                    {/* <CardExternalLinks links={project?.link} /> */}
                  </div>
                </Card>
              </Fragment>
            );
          })
        ) : (
          <CResult title="در حال حاضر اطلاعاتی برای پروژه ها اخیر درج نشده!" />
        )}
      </div>
    </div>
  );
}
