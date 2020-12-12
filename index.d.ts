declare module '*.css' {
    interface Style {
        [key: string]: string;
    }

    const style: Style;

    export default style;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
