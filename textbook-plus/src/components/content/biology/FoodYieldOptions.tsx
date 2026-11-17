/**
 * FoodYieldOptions — the three approaches to increasing food production.
 *
 * Three equal cards, numbered 01–03. The third (genetically engineered
 * crop-based agriculture) carries a quiet accent because it is the approach
 * this chapter develops — not because it is ranked above the other two.
 */

const OPTIONS = [
  { n: "01", title: "Agro-chemical Based Agriculture" },
  { n: "02", title: "Organic Agriculture" },
  { n: "03", title: "Genetically Engineered Crop-Based Agriculture" },
];

export function FoodYieldOptions() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-3" role="list">
      {OPTIONS.map((option, index) => {
        const isThird = index === OPTIONS.length - 1;

        return (
          <div
            key={option.n}
            className={
              isThird
                ? "flex flex-col rounded-xl border-2 border-indigo-600/35 bg-indigo-50/40 px-3.5 py-3 dark:bg-indigo-950/20"
                : "flex flex-col rounded-xl border border-border bg-card px-3.5 py-3"
            }
            role="listitem"
          >
            <span
              className={
                isThird
                  ? "text-[10px] font-bold tabular-nums tracking-[0.08em] text-indigo-800 dark:text-indigo-300"
                  : "text-[10px] font-bold tabular-nums tracking-[0.08em] text-muted-foreground"
              }
            >
              {option.n}
            </span>

            <div className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-foreground">
              {option.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
