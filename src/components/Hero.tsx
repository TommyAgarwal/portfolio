export default function Hero() {
    return (
        <header className="w-full flex flex-col items-center justify-center text-center min-h-[70vh] px-4 md:px-8 pt-20 pb-10">
            <div className="flex flex-col items-center max-w-5xl w-full px-12 py-6 md:px-24 md:py-12 rounded-[32px] bg-card-bg border border-border">
                <h1 className="text-[56px] md:text-[80px] lg:text-[96px] font-medium text-text-primary tracking-tight leading-[1.2] mb-2 md:mb-4 py-1">
                    Tommy Agarwal
                </h1>
                <p className="text-[18px] md:text-[20px] lg:text-[24px] text-text-secondary leading-relaxed max-w-[800px] font-normal">
                    Impact-driven Product Designer rooted in technical reality.
                </p>
                <div className="mt-8 md:mt-12">
                    <span className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-card-bg-hover border border-card-bg-accent text-[14px] md:text-[16px] font-medium text-text-secondary gap-4">
                        Currently #OpenToWork
                        <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(74,222,128,0.5)] animate-pulse"></span>
                    </span>
                </div>
            </div>
        </header>
    );
}

