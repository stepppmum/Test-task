// src/assets/icons/useIcons.ts
export const useIcons = () => {
    const modules = import.meta.glob('./*.svg', { eager: true, import: 'default' });
  
    const icons: Record<string, string> = {};
  
    for (const path in modules) {
      const name = path.split('/').pop()?.replace('.svg', '');
      if (name) icons[name] = modules[path] as string;
    }
  
    return icons;
  };
  