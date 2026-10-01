/*
  selectableLinks — Permite seleccionar y copiar texto que está dentro de
  enlaces (tarjetas del blog, pilares, correo y teléfono del pie, etc.).

  Si la persona arrastró el ratón para seleccionar texto dentro de un enlace,
  al soltar el clic NO se abre el enlace: así puede copiar sin salir de la
  página. Un clic normal (sin selección) sigue funcionando igual.
*/
export function enableSelectableLinks() {
  if (typeof document === 'undefined') return;

  document.addEventListener(
    'click',
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) return;
      const node = sel.anchorNode;
      if (node && link.contains(node)) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true,
  );
}
