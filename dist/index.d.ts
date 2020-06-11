declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: {};
            boxBufferGeometry: {
                attach: string;
                args: Array<number>;
            };
            meshStandardMaterial: {
                attach: string;
                color: string;
            };
        }
    }
}
import Box from './box';
export { Box };
