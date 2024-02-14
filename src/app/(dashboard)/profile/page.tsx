/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lqnCpI6fLMG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <Card className="w-[75lvw]">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                    Update your profile information. Changes will be reflected across the platform.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                    <Label>Profile Picture</Label>
                    <div className="flex items-center space-x-4">
                        <img
                            alt="Profile picture"
                            className="rounded-full"
                            height="64"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="64"
                        />
                        <Button size="sm">Upload</Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
}

