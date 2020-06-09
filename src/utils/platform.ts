import { ICON_WINDOWS, ICON_LINUX, ICON_APPLE } from '~/constants/icons';

export const getPlatformIcon = () => {
  const { platform } = navigator;

  if (platform === 'Win32') {
    return ICON_WINDOWS;
  } else if (platform.startsWith('Linux')) {
    return ICON_LINUX;
  } else if (platform.startsWith('Mac')) {
    return ICON_APPLE;
  }
};
