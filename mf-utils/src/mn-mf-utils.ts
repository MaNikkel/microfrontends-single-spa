interface IEmitEventProps {
  name: string;
  data: unknown;
}

export function emitEvent({ name, data}: IEmitEventProps) {
  dispatchEvent(new CustomEvent(name, { detail: data }))
}

interface IListenEventProps<T> {
  name: string;
  cb: () => T;
}

export function listenEvent<T = void>({ name, cb}: IListenEventProps<T>) {
  window.addEventListener(name, cb)
}
