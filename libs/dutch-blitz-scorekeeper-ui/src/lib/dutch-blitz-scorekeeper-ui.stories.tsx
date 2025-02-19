import type { Meta, StoryObj } from '@storybook/react';
import { DutchBlitzScorekeeperUi } from './dutch-blitz-scorekeeper-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DutchBlitzScorekeeperUi> = {
  component: DutchBlitzScorekeeperUi,
  title: 'DutchBlitzScorekeeperUi',
};
export default meta;
type Story = StoryObj<typeof DutchBlitzScorekeeperUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Welcome to DutchBlitzScorekeeperUi!/gi)
    ).toBeTruthy();
  },
};
