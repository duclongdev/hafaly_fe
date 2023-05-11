import { lazy } from "react";

export function lazyLoad(path, nameExport) {
  return lazy(() => {
    if (nameExport == null) return path;
    return path.then((module) => ({ default: module[nameExport] }));
  });
}
