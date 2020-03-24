import { getPathNameFromUrl, getRouteFromFullPath, getRouteFromRegex } from "./route.utils.ts";
import { MetaRoute } from "../models/meta-route.ts";

export function routeExist(routes: MetaRoute[], url: string): boolean {
  const pathname: string = getPathNameFromUrl(url);
  
  let route = getRouteFromFullPath(routes, pathname);

  if (!route) route = getRouteFromRegex(routes, pathname);

  return !!route;
}