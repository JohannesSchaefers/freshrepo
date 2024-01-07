/*
// Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM
import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

// meine erste island
// Islands ermöglichen dem Client zu interagieren. Islands sind isolierte Preact-Komponenten, die auf dem Server
// gerendert werden und auf dem Client mit Wasser versorgt werden. Damit unterscheiden sie sich von allen anderen
// Komponenten in Fresh, die nur auf dem Server gerendert werden.

// Islands werden angelegt, in dem man eine Datei im islands/ Verzeichnis eines Fresh-Projects anlegt. Der Dateiname muss
// ein PascalCase oder kebab-case Name der Island sein.

export default function Counter1( props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>minus minus 1</Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>plus plus 1</Button>          
    </div>
    
  );
}

*/

import { h, FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';

interface CounterProps {
  count: { value: number };
}

const Counter1: FunctionalComponent<CounterProps> = (props: CounterProps) => {
  // Assuming there's a variable named `valueToUpdate` that you want to watch for changes
  let valueToUpdate = 5;

  useEffect(() => {
    // Update props.count.value when the variable valueToUpdate changes
    props.count.value = valueToUpdate;
  }, [valueToUpdate]);

  return (
    <div class="py-6">
      <p class="text-3xl">{props.count.value}</p>
    </div>
  );
};

export default Counter1;



