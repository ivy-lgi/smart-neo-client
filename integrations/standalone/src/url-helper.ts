export function parameter(key: string): string | undefined {
  const param = new URLSearchParams(window.location.search).get(key);
  return param !== null ? decodeURIComponent(param) : undefined;
}

export function themeParam(): 'dark' | 'light' {
  const theme = parameter('theme');
  if (theme === 'dark') {
    return theme;
  }
  return 'light';
}
