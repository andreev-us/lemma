import { Smartphone } from "lucide-react";

export function MobilePlaceholder() {
    return (
        <div className="block lg:hidden min-h-screen flex flex-col items-center justify-center p-6 bg-background text-center">
            <div className="max-w-md space-y-6">
                <div className="flex justify-center">
                    <div className="rounded-full bg-muted p-6">
                        <Smartphone className="w-12 h-12 text-muted-foreground" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Coming Soon
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        We are currently working on the mobile experience
                    </h1>
                    <p className="text-muted-foreground">
                        Please use a computer to access the learning dashboard.
                    </p>
                </div>

                <div className="pt-4 text-sm text-muted-foreground">
                    Desktop required (1024px or wider)
                </div>
            </div>
        </div>
    );
}
