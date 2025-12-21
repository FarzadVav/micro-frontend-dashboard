"use client";

import { useState } from "react";
import { CheckIcon, ChevronRightIcon, ChevronLeftIcon, PlusIcon, StarIcon, UserIcon, XIcon, CircleIcon } from "lucide-react"

import { PaginationWithState } from "@repo/ui/src/components/pagination/pagination";
import Badge from "@repo/ui/src/components/badge/badge";
import Avatar from "@repo/ui/src/components/avatar/avatar";
import { Rating } from "@repo/ui/src/components/rating/rating";
import { Input } from "@repo/ui/src/components/input/input";
import { Otp } from "@repo/ui/src/components/otp/otp";
import { Upload } from "@repo/ui/src/components/upload/upload";
import { Button, Choice, Modal, Popover, Tabs, toast } from "@repo/ui/src/components";

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

  const [filterChoice, setFilterChoice] = useState<string[]>([]);
  const [singleChoice, setSingleChoice] = useState<string | null>("1");
  const [multipleChoice, setMultipleChoice] = useState<string[]>(["1"]);
  const [switchChoice, setSwitchChoice] = useState<string[]>(["1"]);

  const [activeTab, setActiveTab] = useState("1");

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
        <div className="f-align gap-3 mt-6">

          <Button
            variant="fill"
            color="info"
            onClick={() =>
              toast({
                title: "اطلاعات جدید در داشبورد",
                color: "primary",
                status: "info",
                button: {
                  onClick: () => {
                    console.log("بستن");
                  },
                },
              })}
          >
            نمایش توست
          </Button>
        </div>
      </div>

      <div className="p-3 mt-9 palette-primary">
        <p className="text-5xl font-ravi-bold">چویس ها (فیلتر، رادیو، چک باکس، سوییج):</p>
        <p className="mt-6">فیلتر:</p>
        <Choice
          multiple
          direction="x"
          className="f-align gap-3 mt-3"
          activeChoice={filterChoice}
          setActiveChoice={setFilterChoice}>
          <Choice.Trigger
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            choiceName="1">
            فیلتر 1
          </Choice.Trigger>
          <Choice.Trigger
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            choiceName="2">
            فیلتر 2
          </Choice.Trigger>
          <Choice.Trigger
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            choiceName="3">
            فیلتر 3
          </Choice.Trigger>
        </Choice>

        <p className="mt-6">رادیو:</p>
        <Choice
          requiredOne
          direction="x"
          className="f-align gap-3 mt-3"
          activeChoice={singleChoice}
          setActiveChoice={setSingleChoice}>
          <Choice.Trigger
            className="choice choice-sm choice-radio"
            choiceName="1">
            <span className="choice-radio-trigger" />
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-radio"
            choiceName="2">
            <span className="choice-radio-trigger" />
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-lg choice-radio"
            choiceName="3">
            <span className="choice-radio-trigger" />
          </Choice.Trigger>
        </Choice>

        <p className="mt-6">چک باکس:</p>
        <Choice
          multiple
          direction="x"
          className="f-align gap-3 mt-3"
          activeChoice={multipleChoice}
          setActiveChoice={setMultipleChoice}
          requiredOne>
          <Choice.Trigger
            className="choice choice-sm choice-checkbox"
            choiceName="1">
            <span className="choice-checkbox-trigger">
              <CheckIcon className="size-2/3" />
            </span>
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-checkbox"
            choiceName="2">
            <span className="choice-checkbox-trigger">
              <CheckIcon className="size-2/3" />
            </span>
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-lg choice-checkbox"
            choiceName="3">
            <span className="choice-checkbox-trigger">
              <CheckIcon className="size-2/3" />
            </span>
          </Choice.Trigger>
        </Choice>

        <p className="mt-6">سوییج:</p>
        <Choice
          multiple
          direction="x"
          className="f-align gap-3 mt-3"
          activeChoice={switchChoice}
          setActiveChoice={setSwitchChoice}
          requiredOne>
          <Choice.Trigger
            className="choice choice-sm choice-switch"
            choiceName="1">
            <span className="choice-switch-trigger" />
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-switch"
            choiceName="2">
            <span className="choice-switch-trigger" />
          </Choice.Trigger>
          <Choice.Trigger
            className="choice choice-lg choice-switch"
            choiceName="3">
            <span className="choice-switch-trigger" />
          </Choice.Trigger>
        </Choice>
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
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}>
          <Tabs.List className="tabs-list tabs-list-styled-1 palette-primary mt-6">
            <Tabs.Tab
              value="1"
              className="tabs-tab-styled-1">
              <span>
                تب یک
              </span>
              <Badge className="tabs-badge" size="sm" isRounded isSquare>
                1
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              className="tabs-tab-styled-1">
              <span>
                تب دو
              </span>
              <Badge className="tabs-badge" size="sm" isRounded isSquare>
                2
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
              className="tabs-tab-styled-1">
              <span>
                تب سه
              </span>
              <Badge className="tabs-badge" size="sm" isRounded isSquare>
                3
              </Badge>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            className="tabs-panel"
            key={"1"}
            value="1">
            Tab 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel"
            key={"2"}
            value="2">
            Tab 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel"
            key={"3"}
            value="3">
            Tab 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut corporis
            sequi expedita deserunt aliquid iste facere, nisi ipsa iure ad nostrum animi.
            Adipisci placeat eos laborum error magnam officiis necessitatibus illo commodi
            a, aperiam tempora alias voluptatum eveniet, atque quas dolores, facilis
            architecto quisquam ipsum dolore officia debitis facere! Dicta iste consectetur,
            illo amet obcaecati aut error, ipsam optio at earum odio laudantium
            voluptatibus? Nemo, nisi debitis et, nam voluptas tempora ipsa ipsum culpa nobis
            perferendis ipsam cumque blanditiis quos corrupti, rerum eos? Sapiente fugiat
            voluptatibus laborum culpa at. Quidem, suscipit perferendis. Illum doloribus in
            cumque fuga laboriosam dignissimos!
          </Tabs.Panel>
        </Tabs>

        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}>
          <Tabs.List className="tabs-list tabs-list-styled-2 mt-6">
            <Tabs.Tab
              value="1"
              className="tabs-tab-styled-2">
              <span>
                تب یک
              </span>
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              className="tabs-tab-styled-2">
              <span>
                تب دو
              </span>
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
              className="tabs-tab-styled-2">
              <span>
                تب سه
              </span>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            className="tabs-panel"
            key={"1"}
            value="1">
            Tab 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel"
            key={"2"}
            value="2">
            Tab 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel"
            key={"3"}
            value="3">
            Tab 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut corporis
            sequi expedita deserunt aliquid iste facere, nisi ipsa iure ad nostrum animi.
            Adipisci placeat eos laborum error magnam officiis necessitatibus illo commodi
            a, aperiam tempora alias voluptatum eveniet, atque quas dolores, facilis
            architecto quisquam ipsum dolore officia debitis facere! Dicta iste consectetur,
            illo amet obcaecati aut error, ipsam optio at earum odio laudantium
            voluptatibus? Nemo, nisi debitis et, nam voluptas tempora ipsa ipsum culpa nobis
            perferendis ipsam cumque blanditiis quos corrupti, rerum eos? Sapiente fugiat
            voluptatibus laborum culpa at. Quidem, suscipit perferendis. Illum doloribus in
            cumque fuga laboriosam dignissimos!
          </Tabs.Panel>
        </Tabs>
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
        <p className="text-5xl font-ravi-bold">مدال:</p>
        <Modal>
          <Modal.Toggle className="mt-6" variant="fill">نمایش مدال</Modal.Toggle>

          <Modal.Portal className="modal-portal">
            <Modal.Body className="modal-body">
              <div className="size-32 rounded-full bg-blue-500 absolute left-0-top-0"></div>
              <div className="size-32 rounded-full bg-blue-500 absolute right-0-bottom-0"></div>

              <Modal.Header className="modal-header font-bold justify-center">
                به مدال خوش آمدید
              </Modal.Header>
              <Modal.Content className="modal-content max-w-xl">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </Modal.Content>
              <Modal.Footer className="modal-footer">
                <Modal.Toggle variant="soft" color="error">
                  بستن
                </Modal.Toggle>
              </Modal.Footer>
            </Modal.Body>
          </Modal.Portal>
        </Modal>
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
          <Input.Field id="input-1" type="text" />
        </Input>

        <Input
          variant="soft"
          color="primary"
          isRounded
          icon={<UserIcon className="input-icon-size" />}
          className="mt-6 max-w-96"
          htmlFor="input-2"
        >
          <Input.Field id="input-2" type="text" />
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
        <p className="text-5xl font-ravi-bold">پاپ اور:</p>

        <Popover
          className="popover mt-6"
          mode="hover">
          <Popover.Toggle variant="soft">من رو هوور کن</Popover.Toggle>

          <Popover.Body className="popover-body right-0-bottom-out card card-thin card-menu max-w-[200%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </Popover.Body>
        </Popover>

        <Popover
          className="popover mt-3"
          mode="both">
          <Popover.Toggle variant="soft">من رو هوور و کلیک کن</Popover.Toggle>

          <Popover.Body className="popover-body right-0-bottom-out card card-thin card-menu max-w-[200%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </Popover.Body>
        </Popover>
        <Popover
          className="popover mt-3"
          mode="click">
          <Popover.Toggle className="data-[state=false]:btn-soft data-[state=true]:btn-fill">
            من رو باز کن
          </Popover.Toggle>

          <Popover.Body className="popover-body right-0-bottom-out card card-thin card-y card-menu">
            <Button variant="ghost">پسندیدن</Button>
            <Button variant="ghost">غیرفعال</Button>
            <Button variant="ghost">دانلود</Button>
            <Popover className="popover">
              <Popover.Toggle variant="ghost">اشتراک گذاری</Popover.Toggle>
              <Popover.Body className="popover-body top-center-left-out card card-y card-menu">
                <Button variant="ghost">لینک</Button>
                <Button variant="ghost">اینستاگرام</Button>
                <Button variant="ghost">تلگرام</Button>
                <Button variant="ghost">ایکس</Button>
              </Popover.Body>
            </Popover>
          </Popover.Body>
        </Popover>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-ravi-bold">تولتیپ:</p>

        <Popover
          className="popover mt-6"
          mode="hover">
          <Popover.Toggle variant="soft">B</Popover.Toggle>

          <Popover.Body className="popover-body top-out-left-center out-position-offset card card-sm card-thin card-menu max-w-[200%]">
            <span>
              Bold
            </span>
            <Popover.Arrow className="bottom-out-left-center out-position-offset-none" fillColor="background-thin" />
          </Popover.Body>
        </Popover>
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