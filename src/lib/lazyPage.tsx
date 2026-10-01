import { lazy, type ComponentType } from 'react';

/*
  lazyPage — React.lazy con precarga.
  · Cada página vive en su propio archivo JS (el sitio ya no descarga todo
    de una vez, lo que acelera la carga en celular).
  · `preload()` descarga la página antes de mostrarla: se usa al prerenderizar
    (servidor) y antes de hidratar (navegador), para que el HTML ya pintado no
    se reemplace por un «cargando».
*/
export type LazyPage<P = any> = ComponentType<P> & { preload: () => Promise<unknown> };

export function lazyPage<P = any>(factory: () => Promise<{ default: ComponentType<P> }>): LazyPage<P> {
  let Loaded: ComponentType<P> | null = null;
  let promise: Promise<unknown> | null = null;

  const load = () => {
    if (!promise) {
      promise = factory().then((m) => {
        Loaded = m.default;
        return m;
      });
    }
    return promise;
  };

  const Lazy = lazy(load as () => Promise<{ default: ComponentType<any> }>);

  const Page = ((props: any) => (Loaded ? <Loaded {...props} /> : <Lazy {...props} />)) as LazyPage<P>;
  Page.preload = load;
  return Page;
}
