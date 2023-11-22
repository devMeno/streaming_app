import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export default function Header() {
     return (
          <>
               <p1>Home</p1>
               <button>
                    <lord-icon
                         src="https://cdn.lordicon.com/kkvxgpti.json"
                         // trigger="hover"
                         style={{ width: "40px", height: "40px" }}>
                    </lord-icon>
               </button>
          </>
     )
}