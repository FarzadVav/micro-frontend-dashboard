import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";
import { HeartIcon } from "lucide-react";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "بج مبتنی بر استایل‌های سفارشی با واریانت‌های ظاهری و رنگی مختلف. می‌توانید اندازه، مربع بودن، گرد بودن و تمام‌عرض بودن را کنترل کنید.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["unstyled", "fill", "outline", "soft"],
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
  },
  args: {
    children: "بج",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Fill: Story = {
  args: {
    children: "بج",
    variant: "fill",
  },
};

export const Outline: Story = {
  args: {
    children: "بج",
    variant: "outline",
  },
};

export const Soft: Story = {
  args: {
    children: "بج",
    variant: "soft",
  },
};

export const Foreground: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "foreground",
  },
};

export const Background: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "background",
  },
  render: (args) => (
    <div className="p-3 bg-foreground">
      <Badge {...args} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "secondary",
  },
};

export const Error: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "error",
  },
};

export const Warning: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "warning",
  },
};

export const Success: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "success",
  },
};

export const Info: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "info",
  },
};

export const Sm: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "primary",
    size: "sm",
  },
};

export const Lg: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "primary",
    size: "lg",
  },
};

export const Square: Story = {
  args: {
    children: <HeartIcon className="badge-icon-size" />,
    variant: "fill",
    color: "primary",
    isSquare: true,
  },
};

export const Rounded: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "primary",
    isSquare: false,
    isRounded: true,
  },
};

export const Full: Story = {
  args: {
    children: "بج",
    variant: "fill",
    color: "primary",
    isSquare: false,
    isRounded: false,
    isFull: true,
  },
};

