import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SearchInput } from './search-input';

const meta = {
	title: 'Components/Search Input',
	component: SearchInput,
	tags: ['autodocs'],
	argTypes: {
		type: { control: false },
		className: { control: false },
	},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof SearchInput>;


export const Default: Story = {
	args: {
		value: 'Санкт-Петербург',
		onChange: fn(),
	}
};

export const Placeholder: Story = {
	args: {
		placeholder: 'Введите запрос',
	}
};

export const Disabled: Story = {
	args: {
		defaultValue: 'Город',
		disabled: true,
	}
};
