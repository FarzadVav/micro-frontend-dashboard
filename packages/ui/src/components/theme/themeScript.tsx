const script = `
  (function() {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.querySelector("html").setAttribute("data-theme", JSON.parse(theme));
    }
  })();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}