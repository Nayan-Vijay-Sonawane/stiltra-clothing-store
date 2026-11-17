import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export default function DesignPreview() {
    return (

        <main className="min-h-screen py-12 sm:py-16">

            <Container>

                <section className="sapce-y-12">

                    {/* Brand Introduction */}
                    
                    <div className="space-y-3">

                        <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
                            Contemporary Everyday Wear
                        </p>

                        <h1 className="text-5xl sm:text-7xl">
                            STILTRA
                        </h1>

                        <h2 className="text-3xl sm:text-4xl italic">
                            Style in every form.
                        </h2>

                        <p className="text-[var(--color-secondary)]">
                            Everyday, thoughtfully styled.
                        </p>

                        {/* Button */}

                        <div className="space-y-4">

                            <h2 className="text-2xl">
                                Buttons
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                <Button variant="primary">
                                    SHOP NOW
                                </Button>

                                <Button variant="secondary">
                                    EXPLORE
                                </Button>

                                <Button variant="outline">
                                    VIEW COLLECTION
                                </Button>

                                <Button className="ghost">
                                    CANCEL
                                </Button>

                            </div>

                            <div className="flex flex-wrap items-center gap-3">

                                <Button size="sm">
                                    SMALL
                                </Button>

                                <Button size="md">
                                    MEDIUM
                                </Button>

                                <Button size="lg">
                                    LARGE
                                </Button>

                            </div>

                        </div>

                        {/* Badges */}

                        <div className="space-y-4">

                            <h2 className="text-2xl">
                                Product Badges
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                <Badge>
                                    Featured
                                </Badge>

                                <Badge variant="new">
                                    New Arrival
                                </Badge>

                                <Badge variant="sale">
                                    Sale
                                </Badge>

                                <Badge variant="success">
                                    Available
                                </Badge>

                            </div>

                        </div>

                        {/* Input Fields */}

                        <div className="max-w-md space-y-4">

                            <h2 className="text-2xl">
                                Input Fields
                            </h2>

                            <Input 
                                id="name"
                                label="Full Name"
                                placeholder="Enter your name"
                            />

                            <Input 
                                id="email"
                                label="Email Address"
                                placeholder="Enter your email"
                            />
                            
                        </div>

                        {/* Brand colors */}

                        <div className="space-y-4">

                            <h2 className="text-2xl">
                                Brand Colors
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

                                <div className="h-2o rounded-md bg-[#F8F7F4]">
                                    <p className="mt-2 text-xs">Warm Ivory</p>
                                </div>

                                <div className="h-20 rounded-md bg-[#111111]">
                                    <p className="mt-2 text-xs">Soft Black</p>
                                </div>

                                <div className="h-20 rounded-md bg-[#6B6B6B]">
                                    <p className="mt-2 text-xs">Stone Grey</p>
                                </div>

                                <div className="h-20 rounded-md bg-[#8B7355]">
                                    <p className="mt-2 text-xs">Muted Taupe</p>
                                </div>

                                <div className="h-20 rounded-md border bg-white">
                                    <p className="mt-2 text-xs">Pure White</p>
                                </div>

                                <div className="h-20 rounded-md bg-[#E8E5DF]">
                                    <p className="mt-2 text-xs">Soft Border</p>
                                </div>

                            </div>

                        </div>

                        {/* Typography */}

                        <div className="space-y-4">

                            <h2 className="text-2xl">
                                Typography
                            </h2>

                            <h1 className="text-5xl">
                                Contemporary Fashion
                            </h1>

                            <p className="text-[var(--color-secondary)]">
                                Everyday essentials designed for
                                comfort, confidence and expression.
                            </p>

                        </div>

                    </div>

                </section>

            </Container>

        </main>

    );
}