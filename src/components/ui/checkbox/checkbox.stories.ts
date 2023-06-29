import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
}
export const Unchecked: Story = {
  args: {
    checked: false,
  },
}
export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'checked checkbox with label',
  },
}
export const DisabledCheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'disabled checked checkbox with label',
    disabled: true,
  },
}
export const UncheckedWithLabel: Story = {
  args: {
    checked: false,
    label: 'unchecked checkbox with label',
  },
}
export const DisabledUncheckedWithLabel: Story = {
  args: {
    checked: false,
    label: 'disabled unchecked checkbox with label',
    disabled: true,
  },
}
