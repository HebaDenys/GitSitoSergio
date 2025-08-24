import Icon from '../components/atoms/Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'facebook',
        'instagram',
        'twitter',
        'linkedin',
        'youtube',
        'phone',
        'email',
        'location',
        'menu',
        'close',
        'arrow',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Facebook = {
  args: {
    name: 'facebook',
    size: 'medium',
  },
};

export const Instagram = {
  args: {
    name: 'instagram',
    size: 'medium',
  },
};

export const Phone = {
  args: {
    name: 'phone',
    size: 'medium',
  },
};

export const Email = {
  args: {
    name: 'email',
    size: 'medium',
  },
};

export const Menu = {
  args: {
    name: 'menu',
    size: 'medium',
  },
};

export const Close = {
  args: {
    name: 'close',
    size: 'medium',
  },
};

export const LargeIcon = {
  args: {
    name: 'arrow',
    size: 'large',
  },
};

export const SmallIcon = {
  args: {
    name: 'location',
    size: 'small',
  },
};
