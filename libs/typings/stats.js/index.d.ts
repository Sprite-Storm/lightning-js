// Generated by typings
// Source: custom_typings/stats.js/index.d.ts
interface Stats {
    domElement: HTMLElement;
    REVISION: number;
    setMode: (mode: number) => void;

    begin(): void;
    end(): number;
    update(): void;
}

interface StatsConstructor {
    new (): Stats;
}

declare var Stats: StatsConstructor;
