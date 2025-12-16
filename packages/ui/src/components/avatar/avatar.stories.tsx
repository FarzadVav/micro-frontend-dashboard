import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "آواتار مبتنی بر استایل‌های سفارشی با اندازه‌های مختلف. می‌توانید حالت دایره‌ای را نیز فعال کنید.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["unstyled", "xxl", "xl", "lg", "sm", "xs", "xxs", "xxxs"],
      mapping: { unstyled: undefined },
      labels: { unstyled: "پیش‌فرض" },
    },
    isCircle: { control: "boolean" },
  },
  args: {
    className: "bg-background-thick",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    className: "bg-background-thick",
  },
};

export const Circle: Story = {
  args: {
    className: "bg-background-thick",
    isCircle: true,
  },
};

export const Xxxl: Story = {
  args: {
    size: "xxl",
    className: "bg-background-thick",
  },
};

export const XxxlCircle: Story = {
  args: {
    size: "xxl",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Xxl: Story = {
  args: {
    size: "xl",
    className: "bg-background-thick",
  },
};

export const XxlCircle: Story = {
  args: {
    size: "xl",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Xl: Story = {
  args: {
    size: "lg",
    className: "bg-background-thick",
  },
};

export const XlCircle: Story = {
  args: {
    size: "lg",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
    className: "bg-background-thick",
  },
};

export const SmCircle: Story = {
  args: {
    size: "sm",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Xs: Story = {
  args: {
    size: "xs",
    className: "bg-background-thick",
  },
};

export const XsCircle: Story = {
  args: {
    size: "xs",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Xxs: Story = {
  args: {
    size: "xxs",
    className: "bg-background-thick",
  },
};

export const XxsCircle: Story = {
  args: {
    size: "xxs",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Xxxs: Story = {
  args: {
    size: "xxxs",
    className: "bg-background-thick",
  },
};

export const XxxsCircle: Story = {
  args: {
    size: "xxxs",
    isCircle: true,
    className: "bg-background-thick",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="f-align gap-3">
      <Avatar size="xxl" className="bg-background-thick" />
      <Avatar size="xl" className="bg-background-thick" />
      <Avatar size="lg" className="bg-background-thick" />
      <Avatar className="bg-background-thick" />
      <Avatar size="sm" className="bg-background-thick" />
      <Avatar size="xs" className="bg-background-thick" />
      <Avatar size="xxs" className="bg-background-thick" />
      <Avatar size="xxxs" className="bg-background-thick" />
    </div>
  ),
};

export const Circles: Story = {
  render: () => (
    <div className="f-align gap-3">
      <Avatar size="xxl" isCircle className="bg-background-thick" />
      <Avatar size="xl" isCircle className="bg-background-thick" />
      <Avatar size="lg" isCircle className="bg-background-thick" />
      <Avatar isCircle className="bg-background-thick" />
      <Avatar size="sm" isCircle className="bg-background-thick" />
      <Avatar size="xs" isCircle className="bg-background-thick" />
      <Avatar size="xxs" isCircle className="bg-background-thick" />
      <Avatar size="xxxs" isCircle className="bg-background-thick" />
    </div>
  ),
};

