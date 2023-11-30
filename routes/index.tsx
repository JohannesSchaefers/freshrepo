import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
   
  const count = useSignal(3);
  return (

   

    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to the 45th biggest Fresh in town!</h1>
        <canvas id="myCanvas" width="300" height="150" style="border:1px solid grey"></canvas>
        <p class="my-4">
        <svg width="100" height="100">
          
  <circle cx={count} cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
 

   // <h1>Just doin the do ... ... ... -- \./\./\./.</h1>
    
   // );
  
    }


  
