import { createPortal } from "react-dom";

const Portal = () => {

    return createPortal(
        <div>
            <h1>HAPPY GANESH CHATURTHI</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quasi unde est incidunt repellat repellendus earum explicabo
                accusantium recusandae nostrum eos.
            </p>

            <button>Click</button>
        </div>,
        document.getElementById("Portal")
    );
};

export default Portal;


