const varients = {
  primary: "h-12 px-4 rounded-2xl bg-green-700 text-white",
  secondry: "h-12 px-2 rounded-2xl bg-green-600 text-white",
};

type ButtonProps = {
  type?: "submit" | "button";
  varient?: keyof typeof varients;
  title: string;
};

export default function Button({
  type = "button",
  varient = "primary",
  title,
}: ButtonProps) {
  return (
    <button type={type} className={varients[varient]}>
      {title}
    </button>
  );
}
