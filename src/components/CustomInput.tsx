"use client";
import { icons } from "@/store/icons";
import { CustomInputProps } from "@/types/CustomInput.types";
import { twMerge } from "tailwind-merge";

export default function CustomInput({
  RHFConfigs = { field: null, name: null },
  inputConfigs = {
    type: "text",
    placeholder: "",
    className: "",
    onChange: () => {},
    label: "",
  },
  viewConfigs,
  events,
}: CustomInputProps) {
  function focusAndBlurFn(type: "focus" | "blur") {
    return (e: FocusEvent) => {
      const input = e.target as HTMLInputElement;
      const parent = input.parentElement as HTMLDivElement;
      if (type === "focus") {
        parent.classList.replace("border-gray-300", "border-green-600");
        return;
      }
      parent.classList.replace("border-green-600", "border-gray-300");
    };
  }

  return (
    <div className="w-full">
      <label className="font-dana-medium mb-10">{inputConfigs.label}</label>
      <div
        id="wrapper_input"
        className="flex items-center justify-start gap-2 px-2 border border-solid border-gray-300 rounded-xl"
      >
        <div className="empty:hidden text-lg text-gray-500">
          {viewConfigs?.icon ? icons[viewConfigs?.icon] : null}
        </div>
        <input
          type={inputConfigs.type}
          onChange={inputConfigs.onChange}
          placeholder={inputConfigs.placeholder}
          autoComplete="off"
          className={twMerge("h-10 w-full", inputConfigs.className)}
          onFocus={focusAndBlurFn("focus")}
          {...(RHFConfigs?.field ? RHFConfigs?.field : {})}
          onPaste={events?.onPaste}
          onBlur={focusAndBlurFn("blur")}
          onInput={events?.onInput}
          onBeforeInput={events?.onBeforeInput}
        />
      </div>
    </div>
  );
}
