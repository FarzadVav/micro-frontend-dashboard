"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Tabs, toast } from "@repo/ui/src/components";
import { LoginSchemaT, loginSchema, postLogin } from "@repo/lib";

function LoginForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"email" | "phone_number">("email");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaT>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      tenant: "shetab",
    },
  });

  const onSubmit = async (values: LoginSchemaT) => {
    const { tenant, email, password } = values;
    const res = await postLogin({ tenant, email, password });
    if (res.status === 200 && res.result) {
      toast({
        color: "success",
        status: "success",
        description: "ورود با موفقیت انجام شد",
      })
      Cookies.set("token", res.result.data.token, { expires: 30, path: "/" });
      router.push("/panel");
    } else {
      toast({
        color: "error",
        status: "error",
        description: "ورود با مشکل مواجه شد",
      })
    }
  };

  return (
    <div className="w-1/2 h-full f-center flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <button
          className="p-2 bg-background-thin border-2 w-full border-background-thin f-align gap-3 rounded-full inset-shadow-[0_0_15px_1px_var(--color-background)]"
          type="button"
        >
          <span className="avatar avatar-sm bg-background-thin rounded-full shadow-lg shadow-background-thick/50"></span>
          <div className="flex flex-col items-start gap-1">
            <span className="font-ravi-bold">پنل آروین ویرا</span>
            <p className="text-foreground-mute text-sm">متنی که شعار اون برند خواهد شد.</p>
          </div>
        </button>

        <h1 className="text-xl font-ravi-bold mt-9">به پنل مدیریت آروین ویرا خوش آمدید</h1>
        <p className="text-foreground-mute text-sm mt-3">اطلاعات مورد نیاز را با دقت وارد کنید</p>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab as any}>
          <Tabs.List className="tabs-list tabs-list-styled-2 mt-6 w-full [&_button]:w-1/2">
            <Tabs.Tab value="email" className="tabs-tab-styled-2">
              ورود با ایمیل
            </Tabs.Tab>
            <Tabs.Tab value="phone_number" className="tabs-tab-styled-2">
              ورود با شماره تلفن
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel className="mt-6" value="email">
            <label className="text-sm" htmlFor="email">
              ایمیل <span className="text-error">*</span>
            </label>
            <Input className="mt-1" htmlFor="email" variant="outline" color="primary" isRounded>
              <Input.Field
                id="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                {...register("email")}
              />
            </Input>
            {errors.email && (
              <p className="text-error text-xs mt-1.5">{errors.email.message}</p>
            )}

            <label className="text-sm mt-6" htmlFor="password">
              رمز عبور <span className="text-error">*</span>
            </label>
            <Input
              className="mt-1"
              htmlFor="password"
              variant="outline"
              color="primary"
              isRounded
            >
              <Input.Field
                id="password"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                {...register("password")}
              />
            </Input>
            {errors.password && (
              <p className="text-error text-xs mt-1.5">{errors.password.message}</p>
            )}
          </Tabs.Panel>
        </Tabs>

        <Button
          type="submit"
          variant="fill"
          color="primary"
          isRounded
          className="mt-6 w-full"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "در حال ورود..." : "ورود به پنل"}</span>
          <ArrowLeftIcon className="btn-icon-size" />
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;