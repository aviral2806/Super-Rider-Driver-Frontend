import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeBorderColor() {
  const theme = useColorScheme() ?? 'light';
  
  return theme === 'light' ? '#e0e0e0' : '#404040';
}