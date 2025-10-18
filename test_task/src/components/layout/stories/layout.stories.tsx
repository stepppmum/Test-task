import type { Meta, StoryObj } from '@storybook/react';

import colors from '@/common/styles/docs/export/colors';

import { Layout } from '../layout';

const meta = {
	title: 'Components/Layout/Examples',
	component: Layout,
	argTypes: {
		children: { control: false },
		className: { control: false },
	},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;


export const Default: Story = {
	args: {
		children: (
			<>
				<div
					style={{
						padding: '20px',
						backgroundColor: colors['gray-100'],
					}}
				>
					child
				</div>
			</>
		),
	}
};
