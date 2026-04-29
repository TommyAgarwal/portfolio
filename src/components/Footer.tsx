export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-bg pt-16 pb-40 md:py-8 px-8 md:px-16 mt-20 relative overflow-hidden h-auto md:h-[136px] flex md:items-center">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-card-bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-12 relative z-10">
                {/* Left Section: Message */}
                <div className="flex-1 text-center md:text-left w-full">
                    <p className="text-text-secondary text-[11px] font-bold uppercase tracking-[0.25em] mb-2 opacity-70">
                        Thanks for stopping by!
                    </p>
                    <p className="text-base font-medium text-text-primary tracking-tight m-0">
                        Like what you saw?{" "}
                        <a
                            href="https://www.linkedin.com/in/tommyagarwal/"
                            target="_blank"
                            className="text-text-primary hover:text-text-secondary transition-all duration-300 underline decoration-border-subtle underline-offset-4"
                        >
                            Let&apos;s get in touch.
                        </a>
                    </p>
                </div>

                {/* Navigation Gap: Reserved for the fixed Navbar at scroll-end */}
                {/* 72px matches the navigation pill height (h-14 + p-2) */}
                <div className="hidden md:block w-[480px] h-[72px] pointer-events-none" aria-hidden="true" />

                {/* Right Section: Copyright */}
                <div className="flex-1 flex flex-col items-center md:items-end justify-end w-full">
                    <p className="text-text-secondary/80 text-[14px] font-medium m-0">
                        &copy; {new Date().getFullYear()} Tommy Agarwal
                    </p>
                </div>
            </div>

            {/* Fine line highlight at the very bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        </footer>
    );
}




