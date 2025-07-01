import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeCardColor() {
  const theme = useColorScheme() ?? 'light';
  
  return theme === 'light' ? '#f5f5f5' : '#2a2a2a';
}