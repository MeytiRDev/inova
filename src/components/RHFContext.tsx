"use client";
import { Children, cloneElement, ReactElement } from "react";
import {
  Controller,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";

export default function RHFContext({
  name,
  rules,
  children,
}: {
  name: string;
  children: ReactElement | ReactElement[];
  rules?: RegisterOptions;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          const fields = Children.map(children, (child, i) => {
            return cloneElement(child, { RHFConfigs: { field, name } });
          });

          return fields;
        }}
      />
      <p role="alert" className="empty:hidden text-red-600 text-sm mt-1">
        {errors[name]?.message}
      </p>
    </div>
  );
}
