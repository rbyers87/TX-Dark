import { useState, useEffect } from 'react';
import { Appearance } from 'react-native-appearance';

export default function useColorScheme(): 'light' | 'dark' {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    function subscription(scheme: 'light' | 'dark') {
      setColorScheme(scheme);
    }

    const appearanceSubscription = Appearance.addChangeListener(({ colorScheme }) => {
      subscription(colorScheme);
    });

    return () => appearanceSubscription?.remove();
  }, []);

  return colorScheme;
}
