import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";
import { HeartIcon } from "lucide-react";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "دکمه مبتنی بر Base UI با واریانت‌های ظاهری و رنگی مختلف. می‌توانید اندازه، مربع بودن، گرد بودن و تمام‌عرض بودن را کنترل کنید.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["unstyled", "fill", "outline", "soft", "ghost", "float"],
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
    isSquare: { control: "boolean" },
    isRounded: { control: "boolean" },
    isFull: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "دکمه",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Fill: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
  },
};

export const Outline: Story = {
  args: {
    children: "دکمه",
    variant: "outline",
  },
};

export const Soft: Story = {
  args: {
    children: "دکمه",
    variant: "soft",
  },
};

export const Ghost: Story = {
  args: {
    children: "دکمه",
    variant: "ghost",
  },
};

export const Float: Story = {
  args: {
    children: "دکمه",
    variant: "float",
  },
};

export const Foreground: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "foreground",
  },
};

export const Background: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "background",
  },
  render: (args) => (
    <div className="p-3 bg-foreground">
      <Button {...args} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "secondary",
  },
};

export const Error: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "error",
  },
};

export const Warning: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "warning",
  },
};

export const Success: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "success",
  },
};

export const Info: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "info",
  },
};

export const Sm: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
    size: "sm",
  },
};

export const Lg: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
    size: "lg",
  },
};

export const Square: Story = {
  args: {
    children: <HeartIcon className="btn-icon-size" />,
    variant: "fill",
    color: "primary",
    isSquare: true,
  },
};

export const Rounded: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
    isSquare: false,
    isRounded: true,
  },
};

export const Full: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
    isSquare: false,
    isRounded: false,
    isFull: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "دکمه",
    variant: "fill",
    color: "primary",
    isSquare: false,
    isRounded: false,
    isFull: false,
    disabled: true,
  },
};
