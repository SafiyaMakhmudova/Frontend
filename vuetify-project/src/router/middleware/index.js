export async function layoutMiddleware(route) {
  const { layout } = route.meta;

  const layoutName = layout || "Default";

  const component = await import(`../../components/layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;
}
