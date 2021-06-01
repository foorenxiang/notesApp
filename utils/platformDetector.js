import { Platform } from 'react-native';

const { OS } = Platform;

export const isWeb = OS === 'web';

export const isiOS = OS === 'ios';
export const isAndroid = OS === 'android';
export const isMacOS = OS === 'macos';
export const isWindows = OS === 'windows';

export const isMobileDevice = isiOS || isAndroid;
export const isDesktopDevice = isMacOS || isWindows;
export const isNativeDevice = isMobileDevice || isDesktopDevice;
