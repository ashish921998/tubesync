/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qXZtgZJCX1E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<h1 className="text-2xl font-bold">Tubesync</h1>
				</div>
			</header>
			<main className="flex-1 bg-gray-100 dark:bg-gray-800 p-8">
				<div className="max-w-6xl mx-auto">
					<Card className="mx-auto max-w-md">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl font-bold">Sign In</CardTitle>
							<CardDescription>
								Enter your email and password to access your account.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" required type="password" />
							</div>
							<div className="flex items-center justify-between">
								<Link className="text-sm underline" href="#">
									Forgot your password?
								</Link>
								<Button className="ml-auto" type="submit">
									Sign in
								</Button>
							</div>
						</CardContent>
						<CardFooter className="text-center text-sm">
							Don't have an account?
							<Link className="underline" href="#">
								Sign up
							</Link>
						</CardFooter>
					</Card>
				</div>
			</main>
			<footer className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<p className="text-sm">© 2024 Tubesync. All rights reserved.</p>
				<div className="flex items-center gap-4">
					<Link className="hover:underline" href="#">
						Terms of Service
					</Link>
					<Link className="hover:underline" href="#">
						Privacy Policy
					</Link>
					<Link className="hover:underline" href="#">
						Contact
					</Link>
				</div>
			</footer>
		</div>
	);
}

function YoutubeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
			<path d="m10 15 5-3-5-3z" />
		</svg>
	);
}