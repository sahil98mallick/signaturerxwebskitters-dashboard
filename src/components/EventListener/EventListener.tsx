import events from "json/events/events";
import eventEmitter from "lib/services/event.emitter";
import { useEffect } from "react";

export default function EventListeners() {
  useEffect(() => {
    eventEmitter.on(events.routerPush, () => {});
    return () => {
      eventEmitter.off(events.routerPush, () => {});
    };
  }, []);

  return null;
}
