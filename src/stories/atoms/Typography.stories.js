import Typography from '../../components/atoms/Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    animate: { control: 'boolean' },
  },
};

export const Heading1 = {
  args: {
    variant: 'h1',
    children: 'Main Heading (H1)',
    animate: true,
  },
};

export const Heading2 = {
  args: {
    variant: 'h2',
    children: 'Section Heading (H2)',
    animate: true,
  },
};

export const Heading3 = {
  args: {
    variant: 'h3',
    children: 'Subsection Heading (H3)',
    animate: false,
  },
};

export const Paragraph = {
  args: {
    variant: 'p',
    children:
      'This is a paragraph of text that demonstrates the typography component. It can contain multiple lines and various content.',
    animate: true,
  },
};

export const WithCustomClass = {
  args: {
    variant: 'h2',
    children: 'Custom Styled Heading',
    className: 'custom-heading',
    animate: true,
  },
};
