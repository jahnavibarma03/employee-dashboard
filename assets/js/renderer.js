// assets/js/renderer.js
export async function renderTemplate(path, data) {
  let tpl = await (await fetch(path)).text();

  tpl = tpl.replace(/<#list\s+(\w+)\s+as\s+(\w+)>([\s\S]*?)<\/#list>/g,
    (_, arrName, item, inner) => {
      return (data[arrName] || []).map(obj =>
        inner.replace(new RegExp(`\\$\\{\\s*${item}\\.([\\w]+)(?:!?)\\s*}`, "g"),
          (_, p) => obj[p] ?? ""
        )
      ).join("");
    }
  );

  tpl = tpl.replace(/\$\{\s*([\w.]+)(?:!?)\s*}/g, (_, expr) => {
    const val = expr.split('.').reduce((a, k) => (a ? a[k] : ""), data);
    return val != null ? val : "";
  });

  return tpl;
}
