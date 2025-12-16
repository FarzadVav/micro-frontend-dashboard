"use client";

import { useState } from "react";
import { AlertDialog, Checkbox, Dialog, Menu, Radio, RadioGroup, Switch, Tabs, Tooltip } from "@repo/ui/base-ui"
import { CheckIcon, ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon, PlusIcon, StarIcon, UserIcon, XIcon, CircleIcon } from "lucide-react"

import { PaginationWithState } from "@repo/ui/src/components/pagination/pagination";
import Button from "@repo/ui/src/components/button/button";
import Badge from "@repo/ui/src/components/badge/badge";
import Avatar from "@repo/ui/src/components/avatar/avatar";
import { Rating } from "@repo/ui/src/components/rating/rating";
import Input, { InputField } from "@repo/ui/src/components/input/input";
import { Otp } from "@repo/ui/src/components/otp/otp";
import { Upload } from "@repo/ui/src/components/upload/upload";
import MenuArrowSvg, { MENU_POSITIONER_SIDE_OFFSET } from "@repo/ui/src/components/menu/menuSetting";
import TooltipArrowSvg from "@repo/ui/src/components/tooptip/tooltip";
import ToastButton from "app/components/toastButton/toastButton";

const PAGES_WITH_STATE = [
  {
    name: "فرم اول",
    component: (
      <>
        <p>
          اول: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <div className="f-align gap-3 mt-3">
          <PaginationWithState.NextBtn className="btn btn-soft btn-square">
            <ChevronLeftIcon className="btn-icon-size" />
          </PaginationWithState.NextBtn>
        </div>
      </>
    ),
  },
  {
    name: "فرم دوم",
    component: (
      <>
        <p>
          دوم: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="f-align gap-3 mt-3">
          <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
            <ChevronRightIcon className="btn-icon-size" />
          </PaginationWithState.PrevBtn>
          <PaginationWithState.NextBtn className="btn btn-soft btn-square">
            <ChevronLeftIcon className="btn-icon-size" />
          </PaginationWithState.NextBtn>
        </div>
      </>
    ),
  },
  {
    name: "فرم سوم",
    component: (
      <>
        <p>
          سوم: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="f-align gap-3 mt-3">
          <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
            <ChevronRightIcon className="btn-icon-size" />
          </PaginationWithState.PrevBtn>
        </div>
      </>
    ),
  },
];

function Page() {
  const [rating, setRating] = useState(3);

  return (
    <>
      <div className="p-3">
        <p className="text-5xl font-ravi-bold">دکمه ها:</p>

        <div className="f-align gap-3 mt-6">
          <Button variant="fill" color="foreground" isRounded>
            کلیک
          </Button>
          <div className="p-3 bg-foreground">
            <Button variant="fill" color="background" isRounded>
              کلیک
            </Button>
          </div>
          <Button variant="fill" color="primary" isRounded>
            کلیک
          </Button>
          <Button variant="fill" color="secondary" isRounded>
            کلیک
          </Button>
          <Button variant="fill" color="error" isRounded>
            کلیک
          </Button>
          <Button variant="fill" color="warning" isRounded>
            کلیک
          </Button>
          <Button variant="fill" color="success" isRounded>
            کلیک
          </Button>
          <Button variant="fill" color="info" isRounded>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button variant="outline" color="foreground" isRounded>
            کلیک
          </Button>
          <div className="p-3 bg-foreground">
            <Button variant="outline" color="background" isRounded>
              کلیک
            </Button>
          </div>
          <Button variant="outline" color="primary" isRounded>
            کلیک
          </Button>
          <Button variant="outline" color="secondary" isRounded>
            کلیک
          </Button>
          <Button variant="outline" color="error" isRounded>
            کلیک
          </Button>
          <Button variant="outline" color="warning" isRounded>
            کلیک
          </Button>
          <Button variant="outline" color="success" isRounded>
            کلیک
          </Button>
          <Button variant="outline" color="info" isRounded>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button variant="soft" color="foreground" isRounded>
            کلیک
          </Button>
          <div className="p-3 bg-foreground">
            <Button variant="soft" color="background" isRounded>
              کلیک
            </Button>
          </div>
          <Button variant="soft" color="primary" isRounded>
            کلیک
          </Button>
          <Button variant="soft" color="secondary" isRounded>
            کلیک
          </Button>
          <Button variant="soft" color="error" isRounded>
            کلیک
          </Button>
          <Button variant="soft" color="warning" isRounded>
            کلیک
          </Button>
          <Button variant="soft" color="success" isRounded>
            کلیک
          </Button>
          <Button variant="soft" color="info" isRounded>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button variant="ghost" color="foreground" isRounded>
            کلیک
          </Button>
          <div className="p-3 bg-foreground">
            <Button variant="ghost" color="background" isRounded>
              کلیک
            </Button>
          </div>
          <Button variant="ghost" color="primary" isRounded>
            کلیک
          </Button>
          <Button variant="ghost" color="secondary" isRounded>
            کلیک
          </Button>
          <Button variant="ghost" color="error" isRounded>
            کلیک
          </Button>
          <Button variant="ghost" color="warning" isRounded>
            کلیک
          </Button>
          <Button variant="ghost" color="success" isRounded>
            کلیک
          </Button>
          <Button variant="ghost" color="info" isRounded>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 mt-6">
          <Button variant="float" color="foreground" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <div className="p-3 bg-foreground">
            <Button variant="float" color="background" isRounded isSquare>
              <PlusIcon className="btn-icon-size" />
            </Button>
          </div>
          <Button variant="float" color="primary" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <Button variant="float" color="secondary" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <Button variant="float" color="error" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <Button variant="float" color="warning" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <Button variant="float" color="success" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
          <Button variant="float" color="info" isRounded isSquare>
            <PlusIcon className="btn-icon-size" />
          </Button>
        </div>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">بج:</p>
        <div className="f-align gap-3 mt-6">
          <Badge variant="fill">لورم ایپسوم</Badge>
          <div className="bg-foreground p-3">
            <Badge variant="fill" color="background">لورم ایپسوم</Badge>
          </div>
          <Badge variant="fill" color="primary">لورم ایپسوم</Badge>
          <Badge variant="fill" color="secondary">لورم ایپسوم</Badge>
          <Badge variant="fill" color="error">لورم ایپسوم</Badge>
          <Badge variant="fill" color="warning">لورم ایپسوم</Badge>
          <Badge variant="fill" color="info">لورم ایپسوم</Badge>
        </div>
        <div className="f-align gap-3 mt-6">
          <Badge variant="outline">لورم ایپسوم</Badge>
          <div className="bg-foreground p-3">
            <Badge variant="outline" color="background">لورم ایپسوم</Badge>
          </div>
          <Badge variant="outline" color="primary">لورم ایپسوم</Badge>
          <Badge variant="outline" color="secondary">لورم ایپسوم</Badge>
          <Badge variant="outline" color="error">لورم ایپسوم</Badge>
          <Badge variant="outline" color="warning">لورم ایپسوم</Badge>
          <Badge variant="outline" color="info">لورم ایپسوم</Badge>
        </div>
        <div className="f-align gap-3 mt-6">
          <Badge variant="soft">لورم ایپسوم</Badge>
          <div className="bg-foreground p-3">
            <Badge variant="soft" color="background">لورم ایپسوم</Badge>
          </div>
          <Badge variant="soft" color="primary">لورم ایپسوم</Badge>
          <Badge variant="soft" color="secondary">لورم ایپسوم</Badge>
          <Badge variant="soft" color="error">لورم ایپسوم</Badge>
          <Badge variant="soft" color="warning">لورم ایپسوم</Badge>
          <Badge variant="soft" color="info">لورم ایپسوم</Badge>
        </div>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">آواتار ها:</p>
        <div className="f-align gap-3 mt-6">
          <Avatar size="xxl" className="bg-background-thick" />
          <Avatar size="xxl" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="xl" className="bg-background-thick" />
          <Avatar size="xl" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="lg" className="bg-background-thick" />
          <Avatar size="lg" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar className="bg-background-thick" />
          <Avatar isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="sm" className="bg-background-thick" />
          <Avatar size="sm" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="xs" className="bg-background-thick" />
          <Avatar size="xs" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="xxs" className="bg-background-thick" />
          <Avatar size="xxs" isCircle className="bg-background-thick" />
        </div>
        <div className="f-align gap-3 mt-3">
          <Avatar size="xxxs" className="bg-background-thick" />
          <Avatar size="xxxs" isCircle className="bg-background-thick" />
        </div>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">توست ها:</p>
        <ToastButton />
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">چک باکس:</p>
        <label className={"f-align gap-3 mt-6"}>
          <span>
            فعالسازی نوتیفیکیشن ها
          </span>
          <Checkbox.Root defaultChecked aria-label="Enable notifications" className={"checkbox"}>
            <Checkbox.Indicator className={"checkbox-indicator"}>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </label>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">رادیو:</p>
        <RadioGroup aria-labelledby={"radio"} defaultValue="system" className={"radio-group mt-6"}>
          <p id={"radio"}>
            تم وب سایت:
          </p>

          <label className={"radio-label"}>
            <Radio.Root value="dark" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            دارک
          </label>

          <label className={"radio-label"}>
            <Radio.Root value="light" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            لایت
          </label>

          <label className={"radio-label"}>
            <Radio.Root value="system" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            سیستم
          </label>
        </RadioGroup>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">تگ:</p>
        <Badge variant="soft" isRounded className="mt-6">
          <span>دسته بندی ها</span>
          <XIcon className="badge-icon-size text-error" />
        </Badge>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">تب:</p>
        <Tabs.Root className={"max-w-5xl mt-6"} defaultValue="1">
          <Tabs.List className={"tabs-list"}>
            <Tabs.Tab className={"tabs-tab palette-success"} value="1">
              <span>
                فروش
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
            <Tabs.Tab className={"tabs-tab palette-error"} value="2">
              <span>
                سرور و امنیت
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
            <Tabs.Tab className={"tabs-tab palette-warning"} value="3">
              <span>
                بایگانی
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel className={"p-3"} value="1">
            اول: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </Tabs.Panel>
          <Tabs.Panel className={"p-3"} value="2">
            دوم: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </Tabs.Panel>
          <Tabs.Panel className={"p-3"} value="3">
            سوم: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </Tabs.Panel>
        </Tabs.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">ریت:</p>
        <Rating className="rating mt-6">
          <Rating.Items
            className="rating-items"
            count={5}
            value={rating}
            onValueChange={setRating}
            element={<StarIcon className="text-background-thick size-9" />}
            activeElement={<StarIcon className="fill-yellow-500 text-yellow-500 size-9" />}
          />
        </Rating>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">آلرت دیالوگ:</p>
        <AlertDialog.Root>
          <AlertDialog.Trigger className="btn btn-fill palette-error mt-6">
            حذف
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className="dialog-backdrop" />
            <AlertDialog.Popup className="dialog-popup">
              <AlertDialog.Title className="dialog-title">
                از حذف این آیتم مطمعن هستید؟
              </AlertDialog.Title>
              <AlertDialog.Description className="dialog-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </AlertDialog.Description>
              <div className="dialog-footer">
                <AlertDialog.Close className={"btn btn-soft"}>
                  <XIcon className="btn-icon-size" />
                  <span>
                    بستن
                  </span>
                </AlertDialog.Close>
                <AlertDialog.Close className="btn btn-fill palette-error">
                  <span>
                    حذف
                  </span>
                  <CheckIcon className="btn-icon-size" />
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">دیالوگ:</p>
        <Dialog.Root>
          <Dialog.Trigger className="btn btn-fill mt-6">
            مشاهده اعلان ها
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="dialog-backdrop" />
            <Dialog.Popup className="dialog-popup">
              <Dialog.Title className="dialog-title">23 اعلان جدید</Dialog.Title>
              <Dialog.Description className="dialog-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Dialog.Description>
              <div className="dialog-footer">
                <Dialog.Close className="btn btn-soft">
                  باشه
                </Dialog.Close>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">اینپوت:</p>

        <Input
          variant="outline"
          isRounded
          icon={<UserIcon className="input-icon-size" />}
          className="mt-6 max-w-96"
          htmlFor="input-1"
        >
          <InputField id="input-1" type="text" />
        </Input>

        <Input
          variant="soft"
          color="primary"
          isRounded
          icon={<UserIcon className="input-icon-size" />}
          className="mt-6 max-w-96"
          htmlFor="input-2"
        >
          <InputField id="input-2" type="text" />
        </Input>

        <div className="f-align mt-6">
          <Otp className="otp" dir="ltr">
            <Otp.Inputs
              length={6}
              className="input input-outline input-square"
              onLastChange={(otp) => alert(otp)}
            />

            <Otp.HiddenInput />
          </Otp>
        </div>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">آپلودر:</p>
        <Upload className="bg-background-thick f-center flex-col gap-3 p-6 rounded-lg max-w-96 mt-6">
          <div className="size-12 border-2 border-dashed border-foreground-mute f-center rounded-lg">
            <PlusIcon className="size-7" />
          </div>
          <p>برای آپلود <span className="text-info">کلیک</span> کنید</p>
          <p className="text-warning">حجم فایل بیش از 2 مگ نباشد</p>

          <Upload.Input />
        </Upload>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">آپلودر:</p>

        <Menu.Root>
          <Menu.Trigger className="btn btn-fill mt-6">
            دسته بندی <ChevronDownIcon className="btn-icon-size" />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={MENU_POSITIONER_SIDE_OFFSET}>
              <Menu.Popup className="menu-popup">
                <Menu.Arrow className="menu-arrow">
                  <MenuArrowSvg />
                </Menu.Arrow>
                <Menu.Item className="menu-item">
                  Add to Library
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Add to Playlist
                </Menu.Item>
                <Menu.Separator className="mx-4 my-1.5 h-px bg-background-thick" />
                <Menu.Item className="menu-item">
                  Play Next
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Play Last
                </Menu.Item>
                <Menu.Separator className="mx-4 my-1.5 h-px bg-background-thick" />
                <Menu.Item className="menu-item">
                  Favorite
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Share
                </Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">تولتیپ:</p>

        <Tooltip.Provider>
          <div className="f-align gap-3 mt-6">
            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                B
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Bold
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                I
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Italic
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                U
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Underline
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </Tooltip.Provider>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">سوییچ:</p>

        <Switch.Root
          className="switch mt-6 palette-info"
        >
          <Switch.Thumb className="switch-thumb" />
        </Switch.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">استپ:</p>
        <PaginationWithState className="max-w-5xl mt-6" pages={PAGES_WITH_STATE}>
          <div className="f-center mb-3 gap-3">
            <PaginationWithState.Counts
              className="btn data-[skipped=false]:btn-soft btn-square btn-rounded data-[skipped=true]:btn-fill data-[skipped=true]:palette-primary"
              progressElement={<div className="w-32 f-center gap-1.5 group">
                <div className="h-1 w-1/4 rounded-full bg-background-thick group-data-[skipped=true]:bg-primary" />
                <div className="h-1 w-1/4 rounded-full bg-background-thick group-data-[skipped=true]:bg-primary" />
                <div className="h-1 w-1/4 rounded-full bg-background-thick group-data-[in-progress=true]:bg-primary" />
                <div className="h-1 w-1/4 rounded-full bg-background-thick group-data-[in-progress=true]:bg-primary" />
              </div>}
            >
              <CircleIcon className="btn-icon-size" />
            </PaginationWithState.Counts>
          </div>

          <PaginationWithState.Pages />
        </PaginationWithState>
      </div>

      <p className="p-3 my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, commodi at! Accusamus et sit, fugit perspiciatis, architecto aperiam ad impedit dignissimos voluptatem dolorum possimus voluptas deleniti. Dolores nam dicta aliquam perferendis corporis non accusantium veniam sed minus earum rerum magni temporibus incidunt, minima velit, ad harum placeat. Obcaecati sint neque cum pariatur eaque rem, numquam, rerum possimus soluta, natus voluptatum aliquid nam eos eius nulla ad reprehenderit. Officiis nam nostrum cum. Dolor corporis cumque suscipit modi voluptatibus quis nam eum ratione in minus voluptates soluta culpa esse adipisci quos incidunt consectetur veritatis, recusandae mollitia dolorum saepe? Odit ullam nostrum aperiam?
      </p>
    </>
  )
}

export default Page