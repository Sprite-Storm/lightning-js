/// <reference path="./../reference.d.ts" />

namespace Lightning {
    export interface iTextStyle {
        align?: string;
        breakWords?: boolean;
        dropShadow?: boolean;
        dropShadowAlpha?: number;
        dropShadowAngle?: number;
        dropShadowBlur?: number;
        dropShadowColor?: string | number;
        dropShadowDistance?: number;
        fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fillGradientType?: number;
        fillGradientStops?: number[];
        fontFamily?: string | string[];
        fontSize?: number | string;
        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        leading?: number;
        letterSpacing?: number;
        lineHeight?: number;
        lineJoin?: "miter" | "round" | "bevel";
        miterLimit?: number;
        padding?: number;
        stroke?: string | number;
        strokeThickness?: number;
        trim?: boolean;
        textBaseline?: string;
        wordWrap?: boolean;
        wordWrapWidth?: number;
    } 
}