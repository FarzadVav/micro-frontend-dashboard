import type { Meta, StoryObj } from "@storybook/react";
import { UserIcon } from "lucide-react";

import InputWrapper, { InputField } from "./inputWrapper";

const meta = {
  title: "UI/Input",
  component: InputWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "اینپوت مبتنی بر استایل‌های سفارشی با واریانت‌های ظاهری و رنگی مختلف. می‌توانید اندازه، گرد بودن و مربع بودن را کنترل کنید.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["unstyled", "outline", "soft"],
      mapping: { unstyled: undefined },
      labels: { unstyled: "بدون استایل" },
    },
    color: {
      control: { type: "select" },
      options: [
        "unstyled",
        "foreground",
        "background",
        "primary",
        "secondary",
        "error",
        "warning",
        "success",
        "info",
      ],
      mapping: { unstyled: undefined },
      labels: { unstyled: "بدون استایل" },
    },
    size: {
      control: { type: "select" },
      options: ["unstyled", "sm", "lg"],
      mapping: { unstyled: undefined },
      labels: { unstyled: "بدون استایل" },
    },
    isRounded: { control: "boolean" },
    isSquare: { control: "boolean" },
  },
  args: {
    children: <InputField type="text" placeholder="متن را وارد کنید" />,
  },
} satisfies Meta<typeof InputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "outline",
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Rounded: Story = {
  args: {
    variant: "outline",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Primary: Story = {
  args: {
    variant: "soft",
    color: "primary",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "soft",
    color: "secondary",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Error: Story = {
  args: {
    variant: "outline",
    color: "error",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Warning: Story = {
  args: {
    variant: "outline",
    color: "warning",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Success: Story = {
  args: {
    variant: "outline",
    color: "success",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Info: Story = {
  args: {
    variant: "outline",
    color: "info",
    isRounded: true,
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Sm: Story = {
  args: {
    variant: "outline",
    size: "sm",
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Lg: Story = {
  args: {
    variant: "outline",
    size: "lg",
    icon: <UserIcon className="input-icon-size" />,
    children: <input className="input-field" type="text" placeholder="متن را وارد کنید" />,
  },
};

export const Square: Story = {
  args: {
    variant: "outline",
    isSquare: true,
    children: <input className="input-field" type="text" />,
  },
};

export const Textarea: Story = {
  args: {
    variant: "outline",
    children: <InputField as="textarea" placeholder="متن را وارد کنید" />,
  },
};

export const Select: Story = {
  args: {
    variant: "outline",
    children: (
      <InputField as="select">
        <option value="">انتخاب کنید</option>
        <option value="1">گزینه ۱</option>
        <option value="2">گزینه ۲</option>
        <option value="3">گزینه ۳</option>
      </InputField>
    ),
  },
};

